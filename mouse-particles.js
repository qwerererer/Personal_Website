(function() {
  if (typeof document === 'undefined') return
  var app = null, bgContainer, fxContainer, bgList = [], trailList = [], burstList = []
  var mouseX = -9999, mouseY = -9999, prevX = -9999, prevY = -9999
  var BG_SIZE = 45, TRAIL_MAX = 100, BURST_MAX = 400

  function rand(n) { return Math.floor(Math.random() * n) }

  function colors() {
    var cs = [0x4488FF, 0x66AAFF, 0x3377EE, 0x5599FF, 0x3D7BFF]
    return cs[rand(cs.length)]
  }

  function mkGeo(type, size, color) {
    var g = new PIXI.Graphics()
    switch (type) {
      case 0: g.circle(0, 0, size).fill(color); break
      case 1: g.moveTo(0, -size).lineTo(size * 0.866, size * 0.5).lineTo(-size * 0.866, size * 0.5).closePath().fill(color); break
      case 2: g.moveTo(-size, -size).lineTo(size, -size).lineTo(size, size).lineTo(-size, size).closePath().fill(color); break
      case 3: g.moveTo(0, -size).lineTo(size, 0).lineTo(0, size).lineTo(-size, 0).closePath().fill(color); break
    }
    var t = app.renderer.generateTexture(g)
    var s = new PIXI.Sprite(t)
    s.anchor.set(0.5)
    g.destroy()
    return s
  }

  function spawnBG() {
    var cols = Math.ceil(window.innerWidth / BG_SIZE) + 3
    var rows = Math.ceil(window.innerHeight / BG_SIZE) + 3
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var s = mkGeo(rand(4), 2 + Math.random() * 2, colors())
        s.x = c * BG_SIZE + (Math.random() - 0.5) * BG_SIZE * 0.6
        s.y = r * BG_SIZE + (Math.random() - 0.5) * BG_SIZE * 0.6
        s.alpha = 0.08 + Math.random() * 0.12
        s.rotation = Math.random() * Math.PI * 2
        s.scale.set(0.3 + Math.random() * 0.5)
        bgContainer.addChild(s)
        bgList.push({ s: s, rs: (Math.random() - 0.5) * 0.01, ph: Math.random() * Math.PI * 2 })
      }
    }
  }

  function spawnTrail(x, y) {
    var s = mkGeo(rand(4), 3 + Math.random() * 2, colors())
    s.x = x + (Math.random() - 0.5) * 8
    s.y = y + (Math.random() - 0.5) * 8
    s.alpha = 0.7
    s.scale.set(0.5 + Math.random() * 0.8)
    s.rotation = Math.random() * Math.PI * 2
    fxContainer.addChild(s)
    trailList.push({ s: s, life: 1, decay: 0.018 + Math.random() * 0.02, rs: (Math.random() - 0.5) * 0.04 })
    if (trailList.length > TRAIL_MAX) {
      var o = trailList.shift()
      fxContainer.removeChild(o.s); o.s.destroy()
    }
  }

  function burstAt(x, y) {
    var n = 25 + rand(20)
    for (var i = 0; i < n; i++) {
      var a = Math.PI * 2 * i / n, sp = 2 + Math.random() * 5
      var s = mkGeo(rand(4), 2 + Math.random() * 2, colors())
      s.x = x; s.y = y; s.alpha = 1
      s.scale.set(0.2 + Math.random() * 0.3)
      s.rotation = Math.random() * Math.PI * 2
      fxContainer.addChild(s)
      burstList.push({ s: s, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, decay: 0.01 + Math.random() * 0.014, rs: (Math.random() - 0.5) * 0.06 })
      if (burstList.length > BURST_MAX) {
        var o = burstList.shift()
        fxContainer.removeChild(o.s); o.s.destroy()
      }
    }
  }

  async function init() {
    var el = document.createElement('div')
    el.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:50'
    document.body.insertBefore(el, document.body.firstChild)

    app = new PIXI.Application()
    await app.init({ backgroundAlpha: 0, antialias: true, resolution: Math.min(window.devicePixelRatio, 2), eventMode: 'none', autoDensity: true })
    el.appendChild(app.canvas)
    app.renderer.resize(window.innerWidth, window.innerHeight)

    bgContainer = new PIXI.Container()
    fxContainer = new PIXI.Container()
    app.stage.addChild(bgContainer)
    app.stage.addChild(fxContainer)

    spawnBG()

    document.addEventListener('mousemove', function(e) { mouseX = e.clientX; mouseY = e.clientY })
    document.addEventListener('mouseleave', function() { mouseX = -9999; mouseY = -9999 })
    document.addEventListener('click', function(e) { burstAt(e.clientX, e.clientY) })
    window.addEventListener('resize', function() { app.renderer.resize(window.innerWidth, window.innerHeight) })

    var tick = 0
    app.ticker.add(function() {
      tick++; var t = tick * 0.02
      for (var i = 0; i < bgList.length; i++) {
        var p = bgList[i]
        p.s.rotation += p.rs
        var pl = 0.3 + Math.sin(t + p.ph) * 0.18
        p.s.scale.set(pl * (1 + Math.sin(t * 0.5 + p.ph * 2) * 0.1))
      }
      if (mouseX > 0 && mouseY > 0 && tick % 2 === 0) {
        var dx = mouseX - prevX, dy = mouseY - prevY, dist = Math.sqrt(dx * dx + dy * dy)
        if (dist > 5) {
          var steps = Math.min(Math.ceil(dist / 10), 4)
          for (var s = 0; s < steps; s++) { var f = (s + 1) / (steps + 1); spawnTrail(prevX + dx * f, prevY + dy * f) }
        }
        prevX = mouseX; prevY = mouseY
      }
      for (var i = trailList.length - 1; i >= 0; i--) {
        var p = trailList[i]; p.life -= p.decay; p.s.alpha = Math.max(0, p.life); p.s.rotation += p.rs
        p.s.scale.set(0.5 + (1 - p.life) * 0.8)
        if (p.life <= 0) { fxContainer.removeChild(p.s); p.s.destroy(); trailList.splice(i, 1) }
      }
      for (var i = burstList.length - 1; i >= 0; i--) {
        var p = burstList[i]; p.s.x += p.vx; p.s.y += p.vy; p.vx *= 0.96; p.vy *= 0.96
        p.life -= p.decay; p.s.alpha = Math.max(0, p.life); p.s.rotation += p.rs
        if (p.life <= 0) { fxContainer.removeChild(p.s); p.s.destroy(); burstList.splice(i, 1) }
      }
    })
  }

  init()
})()

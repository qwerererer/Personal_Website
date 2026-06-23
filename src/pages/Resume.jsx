export default function Resume() {
  return (
    <div className="page resume">
      <h1>简历</h1>

      <section className="resume-section">
        <h2>教育背景</h2>
        <div className="resume-item">
          <div className="resume-item-header">
            <h3>计算机科学与技术 学士</h3>
            <span className="date">2019 - 2023</span>
          </div>
          <p className="subtitle">大学名称</p>
          <p>主修课程：数据结构与算法、操作系统、计算机网络、数据库系统</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>工作经历</h2>
        <div className="resume-item">
          <div className="resume-item-header">
            <h3>C++ 开发工程师</h3>
            <span className="date">2023 - 至今</span>
          </div>
          <p className="subtitle">公司名称</p>
          <ul>
            <li>使用 C++17/20 开发高性能后端服务，QPS 提升 40%</li>
            <li>设计并实现分布式任务调度系统，支持百万级并发任务</li>
            <li>优化内存管理，减少内存泄漏和碎片，降低 GC 停顿</li>
          </ul>
        </div>
        <div className="resume-item">
          <div className="resume-item-header">
            <h3>C++ 开发实习生</h3>
            <span className="date">2022 - 2023</span>
          </div>
          <p className="subtitle">公司名称</p>
          <ul>
            <li>参与内核模块开发，使用 C++ 实现 IPC 通信组件</li>
            <li>编写单元测试和性能基准测试，覆盖率达 85% 以上</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>技能</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>语言</h3>
            <p>C/C++, Python, Java, JavaScript</p>
          </div>
          <div className="skill-category">
            <h3>技术领域</h3>
            <p>多线程编程, 网络编程, 内存管理, 性能调优</p>
          </div>
          <div className="skill-category">
            <h3>工具</h3>
            <p>Git, CMake, GDB, Valgrind, Docker, Linux</p>
          </div>
        </div>
      </section>
    </div>
  )
}

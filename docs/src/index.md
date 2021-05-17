---
home: true
actionText: 이력서 →
actionLink: /resume/
footer: devcjkim.github.io  
---

<style>
.terminal {
  @import "./app.css";
}
@media only screen and (max-width: 768px) {
  .terminal .title-desktop {
    display: none;
  }
  .terminal code .list {
    display: block;
  }
}
@media only screen and (min-width: 769px) {
  .terminal section {
    margin: 50px;
  }
  .terminal .title-mobile {
    display: none;
  }
}
.terminal section {
  background-color: #2C2F2F;
  color: #727674;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  overflow: hidden;
}
.terminal header {
  border-bottom: 1px solid #4D4C4D;
  font-size: 16px;
  text-align: center;
  padding: 6px;
}
.terminal header .buttons {
  position: absolute;
}
.terminal header .buttons .red {
  background-color: #E94B35;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  margin: 0 auto;
  display: inline-block;
}
.terminal header .buttons .yellow {
  background-color: #f0f000;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  margin: 0 auto;
  display: inline-block;
}
.terminal header .buttons .green {
  background-color: #1AAF5C;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  margin: 0 auto;
  display: inline-block;
}
.terminal nav {
  border-bottom: 1px solid #4D4C4D;
}
.terminal nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.terminal nav ul li {
  background-color: #252929;
  color: #727674;
  text-align: center;
  padding: 5px 0;
}
.terminal nav ul li a {
  color: #727674;
}
.terminal nav ul li:hover {
  color: #fff;
  cursor: pointer;
}
.terminal .selected {
  background-color: #323634;
  color: #fff;
}
.terminal .right-border {
  position: relative;
}
.terminal .right-border:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  background: #4D4C4D;
}
.terminal main {
  padding: 4px;
  min-height: 400px;
}
.terminal main code {
  display: block;
}
.terminal .font-sky-blue {
  color: #51D0DD;
}
.terminal .font-blue {
  color: #719BFF;
}
.terminal .font-red {
  color: #ED5E3F;
}
.terminal .font-green {
  color: #49E690;
}
.terminal .font-white {
  color: #F4F4F5;
}
.terminal .ls span {
  padding-right: 50px;
}
.terminal a {
  color: #fff;
  text-decoration: none;
  outline: none;
}
.terminal a:hover, .terminal a:active {
  color: #fff;
  text-decoration: none;
  outline: none;
}

.grid-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.grid-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
}

</style>

<div class="grid-row terminal">
  <section>
    <header>
      <div class="buttons">
        <div class="red"></div>
        <div class="yellow"></div>
        <div class="green"></div>
      </div>
      <div class="title-desktop">devcjkim.github.io ─ devcjkim@devcjkim-Github-pages</div>
      <div class="title-mobile">devcjkim.github.io</div>
    </header>
    <nav>
      <ul class="grid-row">
        <li class="grid-6 selected right-border">Profile</li>
        <li class="grid-6"><a href="https://github.com/centell" rel="author" target="_blank">Github</a></li>
      </ul>   
    </nav>
    <main>
      <!--welcome-->
      <code>
        <span class="font-white">Welcome to devcjkim.github.io 2.0.1 LTS (Vue Press 1.8.2)</span>
      </code>
      <!--whoami-->
      <code>
        <span class="font-sky-blue">devcjkim.github.io</span>
        <span class="font-blue">
          git:(<span class="font-red">master</span>)</span> $ <span class="font-green">whoami
        </span>
      </code>
      <code>
        <span class="font-white">name: kim chan joong</span>
      </code>
      <code>
        <span class="font-white">job: web developer</span>
      </code>
      <code>
        <span class="font-white">location: Busan, Korea</span>
      </code>
      <!--skills-->
      <code>
        <span class="font-sky-blue">devcjkim.github.io</span>
        <span class="font-blue">
          git:(<span class="font-red">master</span>)
        </span>
        $ <span class="font-green">cat <span class="font-white">favorite-tech</span>
        </span>
      </code>
      <code class="ls">
        <span class="font-white list">javascript</span>
        <span class="font-white list">node.js</span>
        <span class="font-white list">rust</span>
        <span class="font-white list">linux</span>
        <span class="font-white list">mysql</span>
        <span class="font-white list">AWS</span>
        <span class="font-white list">React.js</span>
      </code>
      <!--personal projects-->
      <code>
        <span class="font-sky-blue">devcjkim.github.io</span>
        $ <span class="font-green">ls </span> <span class="font-white">PersonalProjects</span>
      </code>
      <code class="ls">
        <span class="list"><a class="font-sky-blue" href="https://github.com/rlidea/weaver-serrver">weaver-framework</a></span>
        <span class="list"><a class="font-sky-blue" href="https://www.npmjs.com/package/create-element.js">create-element.js</a></span>
        <span class="list"><a class="font-sky-blue" href="https://www.npmjs.com/package/grid-system.css">grid-system.css</a></span>
      </code>
      <!--end-->
      <code>
        <span class="font-sky-blue">devcjkim.github.io</span> $
      </code>
    </main>
  </section>
</div>

<div style="display: flex; justify-content: center;">
  주로 서버 및 백앤드 개발을 담당하며 프론트 개발까지 가능한 풀스택 지향 개발자입니다.<br/>
  클라우드, Docker 등을 이용한 아키텍팅 등 전반적인 웹 개발 영역을 경험했습니다.
</div>

<div class="features">
  <div class="feature">
    <a href="/resume"><h2>Resume</h2></a>
    <p>
      저에 대해 소개합니다.
    </p>
  </div>
<div class="feature">
    <a href="/portfolio"><h2>Portfolio</h2></a>
    <p>
      제가 경험한 프로젝트들을 소개합니다.
    </p>
  </div>
</div>

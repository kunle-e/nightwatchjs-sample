# nightwatchjs-sample
sample nightwatch.js project

Dependencies: Nodejs and NPM must be installed on your system
Project includes selenium-server-standalone-2.53.0.jar

* Clone the repo:   <br/>git clone https://github.com/kunle-e/nightwatchjs-sample.git
* In the project root install nightwatch.js: <br/>npm install nightwatch

<b>Run tests:</b><br/>
nightwatch --test tests/github.js

<br/>
Extra<br/>
Sometimes selenium server may need to be shutdown manually.<br/>
Shutdown selenium server:<br/>
http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer

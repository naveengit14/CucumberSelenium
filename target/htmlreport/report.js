$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumberDemo.feature");
formatter.feature({
  "line": 2,
  "name": "this is for the cucumber reporting and Demo",
  "description": "",
  "id": "this-is-for-the-cucumber-reporting-and-demo",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "open a webpage and do some activity",
  "description": "",
  "id": "this-is-for-the-cucumber-reporting-and-demo;open-a-webpage-and-do-some-activity",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "go to google webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "search for the keyword \"\u003cKeyword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on the \"\u003clink\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "this-is-for-the-cucumber-reporting-and-demo;open-a-webpage-and-do-some-activity;",
  "rows": [
    {
      "cells": [
        "Keyword",
        "link"
      ],
      "line": 10,
      "id": "this-is-for-the-cucumber-reporting-and-demo;open-a-webpage-and-do-some-activity;;1"
    },
    {
      "cells": [
        "cucumber",
        "https://en.wikipedia.org/wiki/Cucumber"
      ],
      "line": 11,
      "id": "this-is-for-the-cucumber-reporting-and-demo;open-a-webpage-and-do-some-activity;;2"
    },
    {
      "cells": [
        "selenium",
        "https://www.google.co.in/url?sa\u003dt\u0026rct\u003dj\u0026q\u003d\u0026esrc\u003ds\u0026source\u003dweb\u0026cd\u003d4\u0026cad\u003drja\u0026uact\u003d8\u0026ved\u003d0ahUKEwix_Ymr8PfXAhWBeCYKHT0wAaQQFghBMAM\u0026url\u003dhttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSelenium_(software)\u0026usg\u003dAOvVaw1yXYA0TfNZVvBYIIiTpKL3"
      ],
      "line": 12,
      "id": "this-is-for-the-cucumber-reporting-and-demo;open-a-webpage-and-do-some-activity;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "open a webpage and do some activity",
  "description": "",
  "id": "this-is-for-the-cucumber-reporting-and-demo;open-a-webpage-and-do-some-activity;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "go to google webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "search for the keyword \"cucumber\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on the \"https://en.wikipedia.org/wiki/Cucumber\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DemoforCucumebr.goToGoogleWebpage()"
});
formatter.result({
  "duration": 61715264928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber",
      "offset": 24
    }
  ],
  "location": "DemoforCucumebr.searchForTheKeyword(String)"
});
formatter.result({
  "duration": 232418261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://en.wikipedia.org/wiki/Cucumber",
      "offset": 14
    }
  ],
  "location": "DemoforCucumebr.clickOnThe(String)"
});
formatter.result({
  "duration": 6820265845,
  "error_message": "org.openqa.selenium.InvalidSelectorException: The given selector .//a[@href\u003d\u0027\u0027https://en.wikipedia.org/wiki/Cucumber] is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: Unable to locate an element with the xpath expression .//a[@href\u003d\u0027\u0027https://en.wikipedia.org/wiki/Cucumber] because of the following error:\n[Exception... \"The expression is not a legal expression.\"  code: \"12\" nsresult: \"0x805b0033 (SyntaxError)\"  location: \"\u003cunknown\u003e\"]\nCommand duration or timeout: 19 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027IGTSGGN1ITS2076\u0027, ip: \u0027172.32.19.26\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_92\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d29.0, platform\u003dXP, browserConnectionEnabled\u003dtrue, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: d6d6de28-cc6b-401d-ad97-11c1bbc8fcc7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat steps.DemoforCucumebr.clickOnThe(DemoforCucumebr.java:40)\r\n\tat ✽.Then click on the \"https://en.wikipedia.org/wiki/Cucumber\"(cucumberDemo.feature:7)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: The given selector .//a[@href\u003d\u0027\u0027https://en.wikipedia.org/wiki/Cucumber] is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: Unable to locate an element with the xpath expression .//a[@href\u003d\u0027\u0027https://en.wikipedia.org/wiki/Cucumber] because of the following error:\n[Exception... \"The expression is not a legal expression.\"  code: \"12\" nsresult: \"0x805b0033 (SyntaxError)\"  location: \"\u003cunknown\u003e\"]\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027IGTSGGN1ITS2076\u0027, ip: \u0027172.32.19.26\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_92\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.annotateInvalidSelectorError_(file:///C:/Users/NAVEEN~1.SIN/AppData/Local/Temp/anonymous8638695762448091323webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8879)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/NAVEEN~1.SIN/AppData/Local/Temp/anonymous8638695762448091323webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8910)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/NAVEEN~1.SIN/AppData/Local/Temp/anonymous8638695762448091323webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8914)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/NAVEEN~1.SIN/AppData/Local/Temp/anonymous8638695762448091323webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10884)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/NAVEEN~1.SIN/AppData/Local/Temp/anonymous8638695762448091323webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10889)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/NAVEEN~1.SIN/AppData/Local/Temp/anonymous8638695762448091323webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10831)\r\n",
  "status": "failed"
});
formatter.write("open a webpage and do some activity");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 979991665,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "open a webpage and do some activity",
  "description": "",
  "id": "this-is-for-the-cucumber-reporting-and-demo;open-a-webpage-and-do-some-activity;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@DEMO"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "go to google webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "search for the keyword \"selenium\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on the \"https://www.google.co.in/url?sa\u003dt\u0026rct\u003dj\u0026q\u003d\u0026esrc\u003ds\u0026source\u003dweb\u0026cd\u003d4\u0026cad\u003drja\u0026uact\u003d8\u0026ved\u003d0ahUKEwix_Ymr8PfXAhWBeCYKHT0wAaQQFghBMAM\u0026url\u003dhttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSelenium_(software)\u0026usg\u003dAOvVaw1yXYA0TfNZVvBYIIiTpKL3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DemoforCucumebr.goToGoogleWebpage()"
});
formatter.result({
  "duration": 2057975188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium",
      "offset": 24
    }
  ],
  "location": "DemoforCucumebr.searchForTheKeyword(String)"
});
formatter.result({
  "duration": 151312585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.co.in/url?sa\u003dt\u0026rct\u003dj\u0026q\u003d\u0026esrc\u003ds\u0026source\u003dweb\u0026cd\u003d4\u0026cad\u003drja\u0026uact\u003d8\u0026ved\u003d0ahUKEwix_Ymr8PfXAhWBeCYKHT0wAaQQFghBMAM\u0026url\u003dhttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSelenium_(software)\u0026usg\u003dAOvVaw1yXYA0TfNZVvBYIIiTpKL3",
      "offset": 14
    }
  ],
  "location": "DemoforCucumebr.clickOnThe(String)"
});
formatter.result({
  "duration": 3850467281,
  "error_message": "org.openqa.selenium.InvalidSelectorException: The given selector .//a[@href\u003d\u0027\u0027https://www.google.co.in/url?sa\u003dt\u0026rct\u003dj\u0026q\u003d\u0026esrc\u003ds\u0026source\u003dweb\u0026cd\u003d4\u0026cad\u003drja\u0026uact\u003d8\u0026ved\u003d0ahUKEwix_Ymr8PfXAhWBeCYKHT0wAaQQFghBMAM\u0026url\u003dhttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSelenium_(software)\u0026usg\u003dAOvVaw1yXYA0TfNZVvBYIIiTpKL3] is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: Unable to locate an element with the xpath expression .//a[@href\u003d\u0027\u0027https://www.google.co.in/url?sa\u003dt\u0026rct\u003dj\u0026q\u003d\u0026esrc\u003ds\u0026source\u003dweb\u0026cd\u003d4\u0026cad\u003drja\u0026uact\u003d8\u0026ved\u003d0ahUKEwix_Ymr8PfXAhWBeCYKHT0wAaQQFghBMAM\u0026url\u003dhttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSelenium_(software)\u0026usg\u003dAOvVaw1yXYA0TfNZVvBYIIiTpKL3] because of the following error:\n[Exception... \"The expression is not a legal expression.\"  code: \"12\" nsresult: \"0x805b0033 (SyntaxError)\"  location: \"\u003cunknown\u003e\"]\nCommand duration or timeout: 618 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027IGTSGGN1ITS2076\u0027, ip: \u0027172.32.19.26\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_92\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d29.0, platform\u003dXP, browserConnectionEnabled\u003dtrue, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: d6d6de28-cc6b-401d-ad97-11c1bbc8fcc7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat steps.DemoforCucumebr.clickOnThe(DemoforCucumebr.java:40)\r\n\tat ✽.Then click on the \"https://www.google.co.in/url?sa\u003dt\u0026rct\u003dj\u0026q\u003d\u0026esrc\u003ds\u0026source\u003dweb\u0026cd\u003d4\u0026cad\u003drja\u0026uact\u003d8\u0026ved\u003d0ahUKEwix_Ymr8PfXAhWBeCYKHT0wAaQQFghBMAM\u0026url\u003dhttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSelenium_(software)\u0026usg\u003dAOvVaw1yXYA0TfNZVvBYIIiTpKL3\"(cucumberDemo.feature:7)\r\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: The given selector .//a[@href\u003d\u0027\u0027https://www.google.co.in/url?sa\u003dt\u0026rct\u003dj\u0026q\u003d\u0026esrc\u003ds\u0026source\u003dweb\u0026cd\u003d4\u0026cad\u003drja\u0026uact\u003d8\u0026ved\u003d0ahUKEwix_Ymr8PfXAhWBeCYKHT0wAaQQFghBMAM\u0026url\u003dhttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSelenium_(software)\u0026usg\u003dAOvVaw1yXYA0TfNZVvBYIIiTpKL3] is either invalid or does not result in a WebElement. The following error occurred:\nInvalidSelectorError: Unable to locate an element with the xpath expression .//a[@href\u003d\u0027\u0027https://www.google.co.in/url?sa\u003dt\u0026rct\u003dj\u0026q\u003d\u0026esrc\u003ds\u0026source\u003dweb\u0026cd\u003d4\u0026cad\u003drja\u0026uact\u003d8\u0026ved\u003d0ahUKEwix_Ymr8PfXAhWBeCYKHT0wAaQQFghBMAM\u0026url\u003dhttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSelenium_(software)\u0026usg\u003dAOvVaw1yXYA0TfNZVvBYIIiTpKL3] because of the following error:\n[Exception... \"The expression is not a legal expression.\"  code: \"12\" nsresult: \"0x805b0033 (SyntaxError)\"  location: \"\u003cunknown\u003e\"]\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027IGTSGGN1ITS2076\u0027, ip: \u0027172.32.19.26\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_92\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.annotateInvalidSelectorError_(file:///C:/Users/NAVEEN~1.SIN/AppData/Local/Temp/anonymous8638695762448091323webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8879)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/NAVEEN~1.SIN/AppData/Local/Temp/anonymous8638695762448091323webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8910)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/NAVEEN~1.SIN/AppData/Local/Temp/anonymous8638695762448091323webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8914)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/NAVEEN~1.SIN/AppData/Local/Temp/anonymous8638695762448091323webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10884)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/NAVEEN~1.SIN/AppData/Local/Temp/anonymous8638695762448091323webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10889)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/NAVEEN~1.SIN/AppData/Local/Temp/anonymous8638695762448091323webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10831)\r\n",
  "status": "failed"
});
formatter.write("open a webpage and do some activity");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 565359317,
  "status": "passed"
});
});
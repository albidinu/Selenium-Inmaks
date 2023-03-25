$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FbRegistration.feature");
formatter.feature({
  "name": "To validate the account creation of fb application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To creat new account",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To launch the browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbRegistration.to_launch_the_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch url of fb application",
  "keyword": "When "
});
formatter.match({
  "location": "FbRegistration.to_launch_url_of_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the creat new account button",
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_click_the_creat_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To  pass firstname in firstname text box",
  "rows": [
    {
      "cells": [
        "firstname",
        "subash"
      ]
    },
    {
      "cells": [
        "firstname2",
        "arunkumar"
      ]
    },
    {
      "cells": [
        "firstname3",
        "bharath"
      ]
    },
    {
      "cells": [
        "firstname4",
        "albi"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_pass_firstname_in_firstname_text_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass secondname in secondname text box",
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_pass_secondname_in_secondname_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass mobileno or email in email text box",
  "rows": [
    {
      "cells": [
        "password1",
        "password2",
        "password3"
      ]
    },
    {
      "cells": [
        "89984u74",
        "iie809ui",
        "jnvnjadnk"
      ]
    },
    {
      "cells": [
        "9098rirevkj",
        "mcdmdbjv",
        "oiioeoidwkh"
      ]
    },
    {
      "cells": [
        "inwbiucdni",
        "jnnjcwdni",
        "innjdclinkbu"
      ]
    },
    {
      "cells": [
        "8889899898",
        "kjdkjsku",
        "009koivcrjhkkl"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_pass_mobileno_or_email_in_email_text_box(DataTable)"
});
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: Keys to send should be a not null CharSequence\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:97)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy16.sendKeys(Unknown Source)\r\n\tat org.base.BaseClass.passText(BaseClass.java:56)\r\n\tat org.stepdefinition.FbRegistration.to_pass_mobileno_or_email_in_email_text_box(FbRegistration.java:58)\r\n\tat ✽.To pass mobileno or email in email text box(src/test/resources/FbRegistration.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To creat new password using new password test box",
  "keyword": "And "
});
formatter.match({
  "location": "FbRegistration.to_creat_new_password_using_new_password_test_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "T close the chrome browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbRegistration.t_close_the_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
});
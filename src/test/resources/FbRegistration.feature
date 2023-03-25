Feature: To validate the account creation of fb application

Scenario: To creat new account
Given To launch the browser and maximize the window
When To launch url of fb application
And To click the creat new account button
#one dimension map data
And To  pass firstname in firstname text box
#key     value
|firstname| subash|
|firstname2|arunkumar|
|firstname3|bharath|
|firstname4|albi|

And To pass secondname in secondname text box
#Two dimensional map data
And To pass mobileno or email in email text box
|password1|password2|password3|
|89984u74|iie809ui|jnvnjadnk|
|9098rirevkj|mcdmdbjv|oiioeoidwkh|
|inwbiucdni|jnnjcwdni|innjdclinkbu|
|8889899898|kjdkjsku|009koivcrjhkkl|



And To creat new password using new password test box
Then T close the chrome browser 




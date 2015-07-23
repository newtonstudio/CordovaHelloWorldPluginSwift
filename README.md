HelloWorldPluginSwift
============

This plugin allows you to study how to write a helloworld ios plugin (in Swift), pass value into the plugin and return the value after process

Installation
------------

### For Cordova >= 3.0:

1. To add this plugin just type: `cordova plugin add https://github.com/newtonstudio/CordovaHelloWorldPluginSwift` or `phonegap local plugin add https://github.com/newtonstudio/CordovaHelloWorldPluginSwift`
2. To remove this plugin type: `cordova plugin remove com.iteatech.helloworldPluginSwift` or `phonegap local plugin remove com.iteatech.helloworldPluginSwift`


Usage
-------

&lt;!doctype html&gt;
&lt;html lang="en" ng-app="app"&gt;
&lt;head&gt;
&lt;title&gt;helloWorld&lt;/title&gt;
&lt;script src="cordova.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
```javascript	
        document.addEventListener("deviceready", function () {
                                  
           HelloWorldPluginSwift.echo(function(e){
                                 alert(e); //ios will return the value you pass into
                                 },function(){
                                 alert('fail');
                                 }, "anything to pass to ios here");
                                  
        },false);
```		
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;


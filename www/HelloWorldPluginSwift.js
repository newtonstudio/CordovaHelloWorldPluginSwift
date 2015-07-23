//
//  Canvas2ImagePlugin.js
//  Canvas2ImagePlugin PhoneGap/Cordova plugin
//
//  Created by Tommy-Carlos Williams on 29/03/12.
//  Copyright (c) 2012 Tommy-Carlos Williams. All rights reserved.
//  MIT Licensed
//

  module.exports = {
    
    echo:function(successCallback, failureCallback, myinput) {
        // successCallback required
        if (typeof successCallback != "function") {
            console.log("HelloWorldPluginSwift Error: successCallback is not a function");
        }
        else if (typeof failureCallback != "function") {
            console.log("HelloWorldPluginSwift Error: failureCallback is not a function");
        }
        else {
            //var canvas = (typeof canvasId === "string") ? document.getElementById(canvasId) : canvasId;
            //var imageData = canvas.toDataURL().replace(/data:image\/png;base64,/,'');
            return cordova.exec(successCallback, failureCallback, "HelloWorldPluginSwift","echo",[myinput]);
        }
    }
  };
  

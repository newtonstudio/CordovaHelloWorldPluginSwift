
import Foundation

@objc(HelloWorldPluginSwift) class HelloWorldPluginSwift : CDVPlugin {
    func echo(command: CDVInvokedUrlCommand) {
        var message = command.arguments[0] as String
        
        message = message.uppercaseString // Prove the plugin is actually doing something
        
        var pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAsString: message)
        commandDelegate.sendPluginResult(pluginResult, callbackId:command.callbackId)
    }
}



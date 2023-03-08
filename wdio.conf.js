const { join } = require('path')

exports.config = {
    waitForTimeout: 10000,
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    specs: ['./test/specs/**/*spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "ebac-qe",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/web_driver.apk'),
        "appWaitActivity": ".MainActivity",
        "appActivity": ".SplashActivity", 
        "appPackage": "com.wdiodemoapp"
    }]
}
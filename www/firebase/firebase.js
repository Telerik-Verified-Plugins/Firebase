
var channel = require('cordova/channel');

channel.createSticky('onCordovaFirebaseReady');
channel.waitForInitialization('onCordovaFirebaseReady');

channel.onCordovaReady.subscribe(function() {
    window.firebaseReadyEvent = new Event('firebaseReady');
    window.addEventListener('firebaseReady', function (e) {
        channel.onCordovaFirebaseReady.fire();
    }, false);

    var imported = document.createElement('script');
    imported.src = 'plugins/com.firebase.sdk/www/firebase/firebase-impl.js';
    document.head.appendChild(imported);
});

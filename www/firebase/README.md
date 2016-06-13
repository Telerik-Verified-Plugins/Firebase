Version 3.0.4 was downloaded [here](https://www.gstatic.com/firebasejs/3.0.4/firebase.js)
and saved as `firebase-impl.js`

__WHEN YOU UPDATE:__ add `window.dispatchEvent(window.firebaseReadyEvent);` at
the very bottom of the `firebase-impl.js` file!

This is required because to wire it to Cordova's `deviceready` event we need to wait for
the injected implementation to settle.
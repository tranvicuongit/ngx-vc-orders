importScripts('https://www.gstatic.com/firebasejs/4.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.6.1/firebase-messaging.js');
firebase.initializeApp({
  'messagingSenderId': '197681766169',
  "gcm_user_visible_only": true
});
const messaging = firebase.messaging();


messaging.setBackgroundMessageHandler(function(payload) {
  console.log('Received background message ', payload);
  // here you can override some options describing what's in the message;
  // however, the actual content will come from the Webtask
  const notificationOptions = {
    icon: '/assets/favicon/favicon-96x96.png'
  };
  return self.registration.showNotification(notificationTitle, notificationOptions);
});

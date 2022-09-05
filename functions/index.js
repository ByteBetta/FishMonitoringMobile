const functions = require("firebase-functions");

const admin = require("firebase-admin");

const firebaseConfig = {
    apiKey: "AIzaSyBtOgZY8qllTMMZPg4XiZCyGMzljoH1ZSU",
    authDomain: "bfar-testproj.firebaseapp.com",
    databaseURL: "https://bfar-testproj-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bfar-testproj",
    storageBucket: "bfar-testproj.appspot.com",
    messagingSenderId: "800830952471",
    appId: "1:800830952471:web:478fc959f0c331591bf852",
    measurementId: "G-DK388P7D66"
}

admin.initializeApp(firebaseConfig);

exports.sendNotify = functions.database.ref("subscriptions/{subscriptionId}").onCreate((snap, context) => {

    const data = snap.val();
    var creatorId = data['creatorId'];
    var subscriberId = data['subscriberId'];

    return admin.database.ref("users/" + subscriberId).once("value", Usersnap => {
        const payload = {
            notfication: {
                title: "test",
                body : "test Message",
            }
        };

        return admin.database().ref('devices/' + creatorId).once("value", Usersnap => {
            var token = tokenSnap.val();
            return admin.messaging().sendToDevice(token, payload);

        });
    })

})
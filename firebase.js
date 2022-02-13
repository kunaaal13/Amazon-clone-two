const firebaseConfig = {
  apiKey: 'AIzaSyD0IZFaQM3CNL52D0_y4kdj6VIZPSDAGaM',
  authDomain: 'clone-two-e223e.firebaseapp.com',
  projectId: 'clone-two-e223e',
  storageBucket: 'clone-two-e223e.appspot.com',
  messagingSenderId: '526793306970',
  appId: '1:526793306970:web:b4ecb9d6788bdfc795b963',
  measurementId: 'G-EJ4RP4NYPP',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

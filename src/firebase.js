import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAPdStGPJYAiAIyl6CvhR3ch8_qQslKR5I",
  authDomain: "clone-amzn-challenge.firebaseapp.com",
  databaseURL: "https://clone-amzn-challenge.firebaseio.com",
  projectId: "clone-amzn-challenge",
  storageBucket: "clone-amzn-challenge.appspot.com",
  messagingSenderId: "669390782935",
  appId: "1:669390782935:web:cf2c51fa0e617b70730b92",
  measurementId: "G-FKH823GQKW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
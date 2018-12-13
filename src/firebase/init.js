import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var config = {
	apiKey: 'AIzaSyDN4V88DWnDtYVAeCmRz823auSy5h5GlcA',
	authDomain: 'agility-planner-31170.firebaseapp.com',
	databaseURL: 'https://agility-planner-31170.firebaseio.com',
	projectId: 'agility-planner-31170',
	storageBucket: 'agility-planner-31170.appspot.com',
	messagingSenderId: '454641178593'
};

firebase.initializeApp(config);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

const firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true });

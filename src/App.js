import React, { useContext, useEffect, useState } from 'react';
import './firebase/init';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContext from './contexts/auth';
import Main from './Main';
import Header from 'components/Header';

const uiConfig = {
	signInFlow: 'popup',
	signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
	callbacks: {
		signInSuccessWithAuthResult: (data) => {
			//
		}
	}
};

const currentUser = JSON.parse(localStorage.getItem('user'));

export default function App() {
	const auth = useContext(AuthContext);
	const [user, setUser] = useState(currentUser);

	if (currentUser) {
		auth.user = currentUser;
	}

	useEffect(() => {
		const stop = firebase.auth().onAuthStateChanged((user) => {
			localStorage.setItem('user', JSON.stringify(user));
			auth.user = user;
			setUser(user);
		});

		return stop;
	}, []);

	return (
		<>
			{!user && (
				<StyledFirebaseAuth
					uiConfig={uiConfig}
					firebaseAuth={firebase.auth()}
				/>
			)}

			{user && (
				<>
					<Header />
					<Router>
						<Main />
					</Router>
				</>
			)}
		</>
	);
}

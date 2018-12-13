import React, { useContext } from 'react';
import AuthContext from 'contexts/auth';
import firebase from 'firebase/app';
import styled from 'styled-components';

const HeaderBar = styled.div`
	background-color: #cccccc;
	display: flex;
	justify-content: space-between;
`;

export default function Header() {
	return (
		<HeaderBar>
			<h1>Agility Planner</h1>
			<LogOut />
		</HeaderBar>
	);
}

function LogOut() {
	const auth = useContext(AuthContext);

	function signUserOut() {
		firebase.auth().signOut();
		auth.user = null;
		localStorage.removeItem('user');
	}

	return <button onClick={signUserOut}>Log out</button>;
}

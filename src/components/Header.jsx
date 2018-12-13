import React, { useContext } from 'react';
import AuthContext from 'contexts/auth';
import firebase from 'firebase/app';
import styled from 'styled-components';
import Container from 'components/Container';

const HeaderBar = styled.header`
	background-color: #cccccc;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
`;

export default function Header() {
	return (
		<HeaderBar>
			<Container>
				<Content>
					<h1>Agility Planner</h1>
					<LogOut />
				</Content>
			</Container>
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

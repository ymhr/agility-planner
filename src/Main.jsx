import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import useFirestore from 'hooks/useFirestore';
import AuthContext from 'contexts/auth';
import firebase from 'firebase/app';
import EventListing from 'components/EventListing';
import Container from 'components/Container';
import AddEvent from 'components/AddEvent';

export default function Main() {
	return (
		<>
			<Container>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
			</Container>
		</>
	);
}

function transformResults(snapshot) {
	return snapshot.docs.map((d) => {
		return { ...d.data(), id: d.id };
	});
}

function Home() {
	const auth = useContext(AuthContext);

	const collection = firebase
		.firestore()
		.collection('events')
		.where('uid', '==', auth.user.uid);

	const [events, eventsLoading, eventsError] = useFirestore(
		collection,
		transformResults
	);

	if (eventsLoading) {
		return <h1>...Loading</h1>;
	}

	if (eventsError) {
		return <h1>Something went wrong</h1>;
	}

	return (
		<>
			<br />
			<AddEvent />

			{events.map((item) => (
				<EventListing key={item.id} event={item} />
			))}
		</>
	);
}

function About() {
	return <h1>About</h1>;
}

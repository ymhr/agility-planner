import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function Main() {
	return (
		<>
			<Route path="/" exact component={Home} />
			<Route path="/about" component={About} />
		</>
	);
}

function Home() {
	return (
		<>
			<h1>Hello world</h1>
			<Link to="/about">About</Link>
		</>
	);
}

function About() {
	return <h1>About</h1>;
}

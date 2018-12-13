import React from 'react';
import Date from 'components/Date';

export default function EventListing({ event }) {
	return (
		<div>
			<h2>{event.name}</h2>
			<Date timestamp={event.registration_closes} />
		</div>
	);
}

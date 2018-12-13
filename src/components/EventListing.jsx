import React from 'react';
import Date from 'components/Date';

export default function EventListing({ event }) {
	return (
		<div>
			<h2>{event.name}</h2>
			<table>
				<tbody>
					<tr>
						<td>Registration closes: </td>
						<td>
							<Date timestamp={event.registration_closes} />
						</td>
						<td>Start date: </td>
						<td>
							<Date timestamp={event.start_date} />
						</td>
						<td>End date: </td>
						<td>
							<Date timestamp={event.end_date} />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

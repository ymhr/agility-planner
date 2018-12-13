import React from 'react';
import styled from 'styled-components';
import { DateTime } from 'luxon';

const Time = styled.div`
	background-color: #c4def2;
	border-bottom: 1px dashed #2460c1;
	display: inline-block;
	transition: all 0.1s ease;
	padding: 2px;

	&:hover {
		transform: scale(1.1);
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}
`;

function Date({ timestamp }) {
	if (!timestamp) return null;

	const datetime = new DateTime.fromMillis(Number(timestamp.seconds + '000'));
	return <Time>{datetime.toLocaleString()}</Time>;
}

export default Date;

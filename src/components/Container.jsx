import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
	padding: 0 20px;
`;

export default function Container(props) {
	return (
		<ContainerDiv>{props.children}</ContainerDiv>
	);
}
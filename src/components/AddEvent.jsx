import React, { useState } from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import { tween } from 'popmotion';

const ButtonPose = posed.div({
	pressable: true,
	open: {
		width: '100vw',
		height: '100vh',
		position: 'absolute',
		background: '#fff',
		border: '0px solid #fff',
		top: 0,
		left: 0,
		flip: true,
		transition: {
			type: 'tween',
			duration: 300
		},
		staggerChildren: 100
	},
	closed: {
		width: '100%',
		height: 50,
		position: 'relative',
		top: 'auto',
		left: 'auto',
		background: '#ccc',
		border: '3px solid #aaa',
		flip: true,
		transition: {
			type: 'tween'
		}
	}
});

const Button = styled(ButtonPose)`
	cursor: ${(props) => (props.open ? 'default' : 'pointer')};
	overflow: hidden;
`;

const AppearingDivPose = posed.div({
	enter: {
		opacity: 1,
		transition: {
			delay: 300
		}
	},
	exit: {
		opacity: 0,
		transition: { duration: 0 }
	},
	flip: {
		transition: tween
	}
});

const CloseButtonPose = posed.button({
	enter: {
		opacity: 1,
		transition: {
			delay: 300
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0
		}
	}
});

const AppearingDiv = styled(AppearingDivPose)`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CloseButton = styled(CloseButtonPose)`
	position: absolute;
	top: 20px;
	right: 20px;
	background-color: #ccc;
	border: 3px solid #aaa;
	border-radius: 1000px;
	width: 50px;
	height: 50px;
	font-size: 40px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Form = styled.form`
	display: block;
`;

const Input = styled.input`
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 10px;
	width: 200px;
	font-size: 16px;
`;

const SaveButton = styled.button`
	background-color: #10b40c;
	border: none;
	border-radius: 5px;
	display: block;
	font-size: 16px;
	color: #fff;
	width: 100%;
	padding: 10px;
	margin-top: 10px;
	cursor: pointer;
`;

export default function AddEvent() {
	// const auth = useContext(Auth);
	const [modalOpen, setModalOpen] = useState(false);

	function toggle() {
		setModalOpen(!modalOpen);
	}

	return (
		<>
			<Button
				open={modalOpen}
				pose={modalOpen ? 'open' : 'closed'}
				onClick={() => (!modalOpen ? toggle() : null)}
			>
				<PoseGroup>
					{modalOpen && (
						<CloseButton key="close" onClick={toggle}>
							&times;
						</CloseButton>
					)}
					{modalOpen && (
						<AppearingDiv key="modal">
							<Form>
								<table>
									<tbody>
										<tr>
											<td>Name</td>
											<td>
												<Input
													type="text"
													name="name"
												/>
											</td>
										</tr>
										<tr>
											<td>Start date</td>
											<td>
												<Input
													type="date"
													name="start_date"
												/>
											</td>
										</tr>
										<tr>
											<td>End date</td>
											<td>
												<Input
													type="date"
													name="end_date"
												/>
											</td>
										</tr>
										<tr>
											<td>Registration closes</td>
											<td>
												<Input
													type="date"
													name="registration_closes"
												/>
											</td>
										</tr>
									</tbody>
								</table>
								<SaveButton>Save ✔</SaveButton>
							</Form>
						</AppearingDiv>
					)}
					{!modalOpen && (
						<AppearingDiv key="button">Add new</AppearingDiv>
					)}
				</PoseGroup>
			</Button>
		</>
	);
}

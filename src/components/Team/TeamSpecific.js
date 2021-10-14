import { Helmet } from 'react-helmet';
import { useState } from 'react';
import {
	Box,
	Card,
	CardContent,
	Grid,
	Hidden,
	Avatar,
	Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Modal2 from 'src/components/modal/Modal2';

const TeamSpecific = () => {
	const [chartData] = useState({
		id: '1',
		name: '진채연',
		date: '5',
		title: '창의 융합 종합 설계 1 프로젝트 인원 모집',
		tag: ['hi', 'my', 'name', 'is', 'door'],
		Maxpeople: '4',
		currentpeople: '2',
		content: '으아아아아아ㅏㅇ 나는 프로젝트하는 중이다..... 으아아아아아아아 배고파아아아아앙 키키키키키키키키 졸려어ㅓㅌ어어어어어라너미런아ㅣㅓㄹ민ㅇㄹ'
	});

	// const click() => {
	// 	<Chats />
	// };

	const List = chartData.tag.map((t) => (
		<Box
			key={t}
			value={t}
			sx={{
				backgroundColor: 'primary.smoothgreen',
				display: 'inline-block',
				textAlign: 'center',
				marginRight: 2,
				borderBottomRightRadius: 5,
				borderBottomLeftRadius: 5,
				borderTopRightRadius: 5,
				borderTopLeftRadius: 5,
				borderColor: 'primary.main',
				paddingLeft: 2,
				paddingRight: 2,
				boxShadow: 1
			}}
		>
			{t}
		</Box>
	));

	return (
		<>
			<Helmet>
				<title>teamSpecific</title>
			</Helmet>
			<Box
				sx={{
					minHeight: '100%',
					py: 3,
				}}
			>
				<Grid
					item
					lg={10}
					md={10}
					sm={12}
					xs={12}
				>
					<Card
						sx={{
							borderBottomRightRadius: 10,
							borderBottomLeftRadius: 10,
							borderTopRightRadius: 10,
							borderTopLeftRadius: 10,
							boxShadow: 5
						}}
					>
						<CardContent
							sx={{
								backgroundColor: '#81C147',
							}}
						>
							<Box
								sx={{
									minHeight: '100%',
									py: 7,
								}}
							>
								<Hidden lgDown>
									<h2 style={{
										color: 'red',
										float: 'right',
										marginRight: 2
									}}
									>
										마감까지 D-
										{chartData.date}
									</h2>
								</Hidden>
								<Hidden lgDown>
									<h1 style={{ color: '#ffffff', marginLeft: 25 }}>
										{chartData.title}
									</h1>
								</Hidden>
								<Hidden lgUp>
									<h3 style={{ color: '#ffffff', marginLeft: 20 }}>
										{chartData.title}
									</h3>
								</Hidden>
								<Box
									sx={{
										minHeight: '100%',
										py: 1,
									}}
								/>
								<Hidden lgDown>
									<Box
										sx={{
											marginLeft: 2,
										}}
									>
										<h3 style={{ color: '#006400' }}>
											#&nbsp;
											{List}
										</h3>
									</Box>
								</Hidden>
								<Box>
									<Hidden lgUp>
										<Link to="/chat/chat">
											<Button
												variant="contained"
												size="small"
												sx={{
													float: 'right',
													marginRight: 2,
													marginTop: 0.5,
													marginLeft: 2
												}}
											>
												<h3 style={{
													color: '#006400',
												}}
												>
													채팅하기
												</h3>
											</Button>
										</Link>
									</Hidden>
									<Hidden lgDown>
										<Modal2 />
									</Hidden>
									<h2 style={{
										color: '#ffffff',
										float: 'right',
										marginTop: 15,
										marginRight: 20,
									}}
									>
										{chartData.name}
									</h2>
									<Avatar
										sx={{
											cursor: 'pointer',
											width: 40,
											height: 40,
											float: 'right',
											marginRight: 2,
											marginTop: 1.5,
										}}
									/>
								</Box>
							</Box>
						</CardContent>
						<CardContent
							sx={{
								backgroundColor: '#ffffff',
							}}
						>
							<Box
								sx={{
									minHeight: '100%',
									py: 7,
								}}
							>
								<h3>
									{chartData.content}
								</h3>
							</Box>
							<Link to="/se/teamSpecificQuestion">
								<Button
									variant="contained"
									size="medium"
									color="success"
									sx={{
										float: 'right',
										marginRight: 2,
										marginTop: 0.5,
										marginLeft: 2
									}}
								>
									<h3 style={{
										color: '#ffffff',
									}}
									>
										신청하기
									</h3>
								</Button>
							</Link>
							<Box
								sx={{
									minHeight: '100%',
									py: 3,
								}}
							/>
						</CardContent>
					</Card>
				</Grid>
			</Box>
		</>
	);
};

export default TeamSpecific;
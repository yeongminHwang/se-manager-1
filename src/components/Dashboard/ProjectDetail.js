import { Helmet } from 'react-helmet';
import { useState } from 'react';
import {
	Box,
	Card,
	CardContent,
	Grid,
	Hidden,
	TextField,
	InputAdornment,
	SvgIcon,
	Avatar,
	Button
} from '@material-ui/core';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SimpleTabs from 'src/components/Dashboard/SimpleTabs';
import { Link } from 'react-router-dom';

const ProjectDetail = () => {
	const [chartData] = useState({
		id: '1',
		name: ['박건우', '이준영', '이창희', '최의준'],
		title: '무인 판매점 키오스크 SW',
		tag: ['창융1', '리액트', 'Node.js', 'AWS', '김선명교수님', '2021'],
		picture: '/static/picture.PNG',
		see: 50,
		good: 100,
	});
	const comment = [
		{
			id: 1,
			name: '현수',
			text: 'ㅋ'
		},
		{
			id: 2,
			name: '채연',
			text: 'ㅋㅋ'
		},
		{
			id: 3,
			name: '영민',
			text: 'ㅋㅋㅋ'
		},
		{
			id: 4,
			name: '지영',
			text: 'ㅋㅋㅋㅋ'
		},
		{
			id: 5,
			name: '현수찡',
			text: 'ㅋㅋㅋㅋㅋ'
		},
		{
			id: 6,
			name: '채연찡',
			text: 'ㅋㅋㅋㅋㅋㅋ'
		},
		{
			id: 7,
			name: '나는야 카와이 소졍쨩',
			text: '소정이는 귀여워 왜나 나는 귀엽기때문이야 키키키 소정이는 애기소졍짱 하와와와와~'
		}
	];
	const [postBody, setPostBody] = useState({
		content: ''
	});

	const handleTextChange = (event) => {
		setPostBody({
			content: event.currentTarget.value,
		});
	};
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
									py: 3,
								}}
							>
								<Hidden lgDown>
									<Box
										sx={{
											float: 'left',
											display: 'inline-block',
											marginRight: 2
										}}
									>
										<img
											src={chartData.picture}
											alt="profile"
											style={{
												width: 220,
												height: 180,
												borderBottomRightRadius: 10,
												borderBottomLeftRadius: 10,
												borderTopRightRadius: 10,
												borderTopLeftRadius: 10,
												display: 'inline-block'
											}}
										/>
									</Box>
								</Hidden>
								<Hidden lgDown>
									<Box
										sx={{
											display: 'inline-block',
										}}
									>
										<h1 style={{
											color: '#ffffff',
											marginTop: 10
										}}
										>
											{chartData.title}
										</h1>
										<Box
											sx={{
												minHeight: '100%',
												py: 1,
											}}
										/>
										<h3 style={{
											color: '#ffffff',
										}}
										>
											{chartData.name.join(', ')}
										</h3>
										<Box
											sx={{
												minHeight: '100%',
												py: 1,
											}}
										/>
										<h4 style={{ color: '#006400' }}>
											#&nbsp;
											{List}
										</h4>
										<Box
											sx={{
												minHeight: '100%',
												py: 1,
											}}
										/>
										<RemoveRedEyeIcon
											sx={{
												display: 'inline-block',
											}}
										/>
										<h4 style={{ display: 'inline-block' }}>
											&nbsp;
											{chartData.see}
										</h4>
										<FavoriteIcon
											sx={{
												display: 'inline-block',
											}}
										/>
										<h4 style={{ display: 'inline-block' }}>
											&nbsp;
											{chartData.good}
										</h4>

									</Box>
								</Hidden>
								<Hidden lgUp>
									<h3 style={{ color: '#ffffff', marginLeft: 20 }}>
										{chartData.title}
									</h3>
								</Hidden>
							</Box>
						</CardContent>
						<CardContent
							sx={{
								backgroundColor: '#ffffff',
							}}
						>
							<SimpleTabs />
							<Box
								sx={{
									minHeight: '100%',
									py: 3,
								}}
							/>
						</CardContent>
					</Card>
					<Box
						sx={{
							minHeight: '100%',
							py: 2,
						}}
					/>
					<Link to="/app/ProjectUpdate">
						<Button
							variant="contained"
							color="success"
							sx={{
								float: 'right'
							}}
						>
							<h3 style={{
								color: '#ffffff',
							}}
							>
								수정하기
							</h3>
						</Button>
					</Link>
					<Box
						sx={{
							minHeight: '100%',
							py: 4,
						}}
					/>
					<Box
						sx={{
							bgcolor: 'primary.darkgreen',
							width: '100%',
							height: 2,
						}}
					/>
					<Box
						sx={{
							minHeight: '100%',
							py: 2,
						}}
					/>
					<h3>
						댓글/피드백
					</h3>
					<Box
						sx={{
							minHeight: '100%',
							py: 1,
						}}
					/>
					{postBody.content}
					<TextField
						fullWidth
						sx={{
							flex: '1',
							flexDirection: 'row',
							boxShadow: 5,
							borderBottomRightRadius: 5,
							borderBottomLeftRadius: 5,
							borderTopRightRadius: 5,
							borderTopLeftRadius: 5,
							backgroundColor: 'primary.smoothgreen'
						}}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SvgIcon
										fontSize="small"
										color="action"
									/>
								</InputAdornment>
							)
						}}
						placeholder="댓글을 입력하세요!"
						variant="outlined"
						onChange={handleTextChange}
					/>
					<Box
						sx={{
							minHeight: '100%',
							py: 3,
						}}
					/>
					<Grid
						item
						lg={12}
						md={12}
						sm={12}
						xs={12}
					>
						{comment.map((comments) => (
							<Card
								key={comments.id}
								value={comments}
								sx={{
									borderBottomRightRadius: 10,
									borderBottomLeftRadius: 10,
									borderTopRightRadius: 10,
									borderTopLeftRadius: 10,
									boxShadow: 5,
									marginBottom: 3
								}}
							>
								<CardContent>
									<Box
										sx={{
											display: 'inline-block',
											marginRight: 2,
										}}
									>
										<Avatar
											sx={{
												cursor: 'pointer',
												width: 30,
												height: 30,
											}}
										/>
									</Box>
									<h4 style={{ display: 'inline-block' }}>
										{comments.name}
										&nbsp;:&nbsp;
										{comments.text}
									</h4>
								</CardContent>
							</Card>
						))}
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default ProjectDetail;
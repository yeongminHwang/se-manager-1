import 'date-fns';
import { Helmet } from 'react-helmet';
import { useState, React } from 'react';
import {
	Box,
	Card,
	CardContent,
	Grid,
	TextField,
	InputAdornment,
	SvgIcon,
	Button,
} from '@material-ui/core';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};
const stacks = [
	'React',
	'Java',
	'C++',
	'C',
	'Mysql',
	'MongoDB',
	'Python',
	'자연어처리',
	'영상처리',
	'딥러닝',
];
const subjects = [
	'창의융합종합설계1',
	'창의융합종합설계2',
	'일반 프로젝트'
];
const professors = [
	'김병만',
	'김시관',
	'김선명',
	'김성렬',
	'신윤식',
	'오득환',
	'이현아',
	'이해연',
	'이종열',
];
const years = [
	'2016',
	'2017',
	'2018',
	'2019',
	'2020',
	'2021',
];
const categorys = [
	'웹사이트',
	'모바일앱',
	'인공지능',
	'IoT',
	'블록체인',
	'보안',
	'VR/AR',
	'게임',
	'로봇',
	'자연어처리',
	'영상처리'
];
const ProjectUpdate = () => {
	const [postBody, setPostBody] = useState({
		id: '2',
		content: '나는 키오스크야',
		title: 'SE-Manager',
		member: '진채연, 김현수, 황영민, 김지영',
		picture: '/static/picture.PNG'
	});
	const [stack, setstack] = useState([]);
	const [subject, setsubject] = useState([]);
	const [professor, setprofessor] = useState([]);
	const [year, setyear] = useState([]);
	const [category, setcategory] = useState([]);
	const handlecategoryChange = (event) => {
		const {
			target: { value },
		} = event;
		setcategory(
			typeof value === 'string' ? value.split(',') : value,
		);
	};
	const handlesubjectChange = (event) => {
		const {
			target: { value },
		} = event;
		setsubject(
			typeof value === 'string' ? value.split(',') : value,
		);
	};
	const handleprofessorChange = (event) => {
		const {
			target: { value },
		} = event;
		setprofessor(
			typeof value === 'string' ? value.split(',') : value,
		);
	};
	const handleyearChange = (event) => {
		const {
			target: { value },
		} = event;
		setyear(
			typeof value === 'string' ? value.split(',') : value,
		);
	};
	const handlestackChange = (event) => {
		const {
			target: { value },
		} = event;
		setstack(
			typeof value === 'string' ? value.split(',') : value,
		);
	};
	const handletitleChange = (event) => {
		setPostBody({
			title: event.currentTarget.value,
		});
	};
	const handlecontentChange = (event) => {
		setPostBody({
			content: event.currentTarget.value,
		});
	};
	const handlememberChange = (event) => {
		setPostBody({
			member: event.currentTarget.value,
		});
	};
	return (
		<>
			<Helmet>
				<title>ProjectUpdate</title>
			</Helmet>
			<Box>
				<Box
					sx={{
						minHeight: '100%',
						py: 3,
					}}
				/>
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
						<CardContent>
							<h2 style={{ color: '#006400' }}>
								프로젝트 수정
							</h2>
							<Box
								sx={{
									minHeight: '100%',
									py: 2,
									borderBottom: '1px solid grey'
								}}
							/>
							<Box
								sx={{
									backgroundColor: '#ffffff',
									paddingLeft: 0.5
								}}
							>
								<Grid
									item
									lg={3}
									md={3}
									sm={6}
									xs={12}
								>
									<Box
										sx={{
											minHeight: '100%',
											py: 1.5,
										}}
									/>
									<h3>프로젝트 사진</h3>
									<Box
										sx={{
											minHeight: '100%',
											py: 0.5,
										}}
									/>
									<Card
										sx={{
											borderBottomRightRadius: 10,
											borderBottomLeftRadius: 10,
											borderTopRightRadius: 10,
											borderTopLeftRadius: 10,
											boxShadow: 5
										}}
									>
										<CardContent>
											<img
												src={postBody.picture}
												alt="profile"
												style={{
													width: 220,
													height: 120
												}}
											/>
										</CardContent>
									</Card>
								</Grid>
								<Box
									sx={{
										minHeight: '100%',
										py: 1.5,
									}}
								/>
								<h3>프로젝트 제목</h3>
								<Box
									sx={{
										minHeight: '100%',
										py: 0.5,
									}}
								/>
								<TextField
									halfwidth="true"
									sx={{
										flex: '1',
										flexDirection: 'row',
										boxShadow: 5,
										borderBottomRightRadius: 5,
										borderBottomLeftRadius: 5,
										borderTopRightRadius: 5,
										borderTopLeftRadius: 5,
										backgroundColor: 'primary.smoothgreen',
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
									value={postBody.title}
									variant="outlined"
									onChange={handletitleChange}
								/>
								<Box
									sx={{
										minHeight: '100%',
										py: 2,
									}}
								/>
								<h3>프로젝트 설명</h3>
								<Box
									sx={{
										minHeight: '100%',
										py: 0.5,
									}}
								/>
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
									value={postBody.content}
									multiline
									rows={4}
									variant="outlined"
									onChange={handlecontentChange}
								/>
								<Box
									sx={{
										minHeight: '100%',
										py: 2,
									}}
								/>
								<h3>프로젝트 팀원</h3>
								<Box
									sx={{
										minHeight: '100%',
										py: 0.5,
									}}
								/>
								<TextField
									halfwidth="true"
									sx={{
										flex: '1',
										flexDirection: 'row',
										boxShadow: 5,
										borderBottomRightRadius: 5,
										borderBottomLeftRadius: 5,
										borderTopRightRadius: 5,
										borderTopLeftRadius: 5,
										backgroundColor: 'primary.smoothgreen',
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
									value={postBody.member}
									placeholder="이메일을 입력해주세요"
									variant="outlined"
									onChange={handlememberChange}
								/>
								<Box
									sx={{
										minHeight: '100%',
										py: 2,
									}}
								/>
								<h3>프로젝트 과목</h3>
								<Box
									sx={{
										minHeight: '100%',
										py: 0.5,
									}}
								/>
								<FormControl
									sx={{
										width: 200,
										backgroundColor: 'primary.smoothgreen'
									}}
								>
									<InputLabel id="과목명">&nbsp; 과목명</InputLabel>
									<Select
										labelId="과목명"
										id="과목명"
										value={subject}
										onChange={handlesubjectChange}
										input={<OutlinedInput label="과목명" />}
										renderValue={(selected) => selected.join(', ')}
										MenuProps={MenuProps}
									>
										{subjects.map((s) => (
											<MenuItem key={s} value={s}>
												<Checkbox
													sx={{
														color: 'primary.darkgreen',
														'&.Mui-checked': {
															color: 'primary.darkgreen',
														},
													}}
													checked={subject.indexOf(s) > -1}
												/>
												<ListItemText primary={s} />
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<Box
									sx={{
										minHeight: '100%',
										py: 2,
									}}
								/>
								<h3>기술 스택</h3>
								<Box
									sx={{
										minHeight: '100%',
										py: 0.5,
									}}
								/>
								<FormControl
									sx={{
										width: 200
									}}
								>
									<InputLabel id="기술스택">&nbsp; 기술스택</InputLabel>
									<Select
										labelId="기술스택"
										id="기술스택"
										multiple
										value={stack}
										onChange={handlestackChange}
										input={<OutlinedInput label="기술스택" />}
										renderValue={(selected) => selected.join(', ')}
										MenuProps={MenuProps}
									>
										{stacks.map((s) => (
											<MenuItem key={s} value={s}>
												<Checkbox
													sx={{
														color: 'primary.darkgreen',
														'&.Mui-checked': {
															color: 'primary.darkgreen',
														},
													}}
													checked={stack.indexOf(s) > -1}
												/>
												<ListItemText primary={s} />
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<Box
									sx={{
										minHeight: '100%',
										py: 2,
									}}
								/>
								<h3>년도</h3>
								<Box
									sx={{
										minHeight: '100%',
										py: 0.5,
									}}
								/>
								<FormControl
									sx={{
										width: 200,
									}}
								>
									<InputLabel id="년도">&nbsp; 년도</InputLabel>
									<Select
										labelId="년도"
										id="년도"
										value={year}
										onChange={handleyearChange}
										input={<OutlinedInput label="년도" />}
										renderValue={(selected) => selected.join(', ')}
										MenuProps={MenuProps}
									>
										{years.map((s) => (
											<MenuItem key={s} value={s}>
												<Checkbox
													sx={{
														color: 'primary.darkgreen',
														'&.Mui-checked': {
															color: 'primary.darkgreen',
														},
													}}
													checked={year.indexOf(s) > -1}
												/>
												<ListItemText primary={s} />
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<Box
									sx={{
										minHeight: '100%',
										py: 2,
									}}
								/>
								<h3>프로젝트 지도 교수</h3>
								<Box
									sx={{
										minHeight: '100%',
										py: 0.5,
									}}
								/>
								<FormControl
									sx={{
										width: 200,
										backgroundColor: 'primary.smoothgreen'
									}}
								>
									<InputLabel id="지도교수">&nbsp; 지도교수</InputLabel>
									<Select
										labelId="지도교수"
										id="지도교수"
										value={professor}
										onChange={handleprofessorChange}
										input={<OutlinedInput label="지도교수" />}
										renderValue={(selected) => selected.join(', ')}
										MenuProps={MenuProps}
									>
										{professors.map((s) => (
											<MenuItem key={s} value={s}>
												<Checkbox
													sx={{
														color: 'primary.darkgreen',
														'&.Mui-checked': {
															color: 'primary.darkgreen',
														},
													}}
													checked={professor.indexOf(s) > -1}
												/>
												<ListItemText primary={s} />
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<Box
									sx={{
										minHeight: '100%',
										py: 2,
									}}
								/>
								<h3>프로젝트 카테고리</h3>
								<Box
									sx={{
										minHeight: '100%',
										py: 0.5,
									}}
								/>
								<FormControl
									sx={{
										width: 200,
										backgroundColor: 'primary.smoothgreen'
									}}
								>
									<InputLabel id="카테고리">&nbsp; 카테고리</InputLabel>
									<Select
										labelId="카테고리"
										id="카테고리"
										multiple
										value={category}
										onChange={handlecategoryChange}
										input={<OutlinedInput label="카테고리" />}
										renderValue={(selected) => selected.join(', ')}
										MenuProps={MenuProps}
									>
										{categorys.map((s) => (
											<MenuItem key={s} value={s}>
												<Checkbox
													sx={{
														color: 'primary.darkgreen',
														'&.Mui-checked': {
															color: 'primary.darkgreen',
														},
													}}
													checked={category.indexOf(s) > -1}
												/>
												<ListItemText primary={s} />
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<Box
									sx={{
										minHeight: '100%',
										py: 2,
									}}
								/>
								<Link to="/app/ProjectDetail">
									<Button
										variant="contained"
										color="success"
										onClick={() => {
											alert('수정되었습니다.');
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
								<Link to="/app/dashboard">
									<Button
										variant="contained"
										color="success"
										sx={{
											float: 'right'
										}}
										onClick={() => {
											alert('삭제되었습니다.');
										}}
									>
										<h3 style={{
											color: '#ffffff',
										}}
										>
											삭제하기
										</h3>
									</Button>
								</Link>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Box>
		</>
	);
};

export default ProjectUpdate;
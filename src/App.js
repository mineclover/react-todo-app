import './App.css';

import React, { useState } from 'react';
import Lists from './components/Lists';
import Form from './components/Form';

// 그냥 해보는 클래스 컴포넌트 todo
export default function App() {
	const [todoData, setTodoData] = useState([
		{
			id: 1,
			title: '공부하기',
			completed: true,
		},
		{
			id: 2,
			title: '청소하기',
			completed: false,
		},
	]);
	const [value, setValue] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const newTodoData = {
			id: todoData.length + 1,
			title: value,
			completed: false,
		};
		setTodoData(value => [...value, newTodoData]);
		setValue('');
	};

	return (
		<div className="container">
			<div className="todoBlock">
				<div className="title">
					<h1>Todo List</h1>
					<Lists todoData={todoData} setTodoData={setTodoData} />
				</div>
				<Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
			</div>
		</div>
	);
}

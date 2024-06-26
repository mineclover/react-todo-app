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
	const handleRemove = () => {
		setTodoData([]);
	};

	return (
		<div className="flex items-center justify-center w-screen h-screen bg-blue-100  ">
			<div className="w-full p-6 m-4 bg-white rounded shadow md:max-3/4 md:w-3/4 lg:w-3/4 lg:max-w-lg">
				<h1 className="font-bold underline">Todo List</h1>
				<button onClick={handleRemove}>Remove</button>
				<div className="flex justify-between mb-3 w-full">
					<Lists todoData={todoData} setTodoData={setTodoData} />
				</div>
				<Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
			</div>
		</div>
	);
}

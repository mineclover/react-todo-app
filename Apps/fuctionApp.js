import './App.css';

import React, { useState } from 'react';

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

	const btnStyle = {
		color: '#fff',
		border: 'none',
		padding: '5px 9px',
		borderRadius: '50%',
		cursor: 'pointer',
		float: 'right',
	};
	const listStyle = completed => {
		return {
			backgroundColor: '#fff',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: completed ? 'line-through' : 'none',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
		};
	};
	const handleClick = id => {
		let newTodoData = todoData.filter(data => data.id !== id);
		console.log(newTodoData);
		setTodoData(newTodoData);
	};
	const handleChange = e => {
		setValue(e.target.value);
	};
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

	const handleCompleteChange = id => {
		const newTodoData = todoData.map(data => {
			if (data.id === id) {
				data.completed = !data.completed;
			}
			return data;
		});
		setTodoData(newTodoData);
	};

	return (
		<div className="container">
			<div className="todoBlock">
				<div className="title">
					<h1>Todo List</h1>
				</div>
				{todoData.map(data => (
					<div style={listStyle(data.completed)} key={data.id}>
						<input type="checkbox" defaultChecked={data.completed} onChange={() => handleCompleteChange(data.id)} />
						{data.title}

						<button style={btnStyle} onClick={() => handleClick(data.id)}>
							X
						</button>
					</div>
				))}
				<form style={{ display: 'flex' }} onSubmit={e => handleSubmit(e)}>
					<input
						type="text"
						style={{ flex: '10', padding: '5px' }}
						placeholder="할 일을 입력하세요"
						//value={value}
						defaultValue={value}
						onChange={e => handleChange(e)}
					/>
					<input type="submit" value="Submit" className="btn" style={{ flex: '1' }} />
				</form>
			</div>
		</div>
	);
}

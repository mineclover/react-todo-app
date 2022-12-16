import React from 'react';

function Lists({ todoData, setTodoData }) {
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
		<div>
			{todoData.map(data => (
				<div style={listStyle(data.completed)} key={data.id}>
					<input type="checkbox" defaultChecked={data.completed} onChange={() => handleCompleteChange(data.id)} />
					{data.title}

					<button style={btnStyle} onClick={() => handleClick(data.id)}>
						X
					</button>
				</div>
			))}
		</div>
	);
}

export default Lists;

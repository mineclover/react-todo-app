import React from 'react';

function Lists({ todoData, setTodoData }) {
	const listStyle = completed => {
		return {
			textDecoration: completed ? 'line-through' : 'none',
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
		<div className="flex flex-col  items-center w-full">
			{todoData.map(data => (
				<div
					style={listStyle(data.completed)}
					key={data.id}
					className="w-full  text-gray-600 bg-gray-100 border rounded shadow mb-4"
				>
					<div className="flex items-center justify-between p-2">
						<input type="checkbox" defaultChecked={data.completed} onChange={() => handleCompleteChange(data.id)} />
						{data.title}

						<button onClick={() => handleClick(data.id)} className="">
							X
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default Lists;

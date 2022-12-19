import React from 'react';

const List = React.memo(({ data, todoData, setTodoData, provided, snapshot }) => {
	//const [Editing, setEditing] = useState(false);
	//const [first, setfirst] = useState(false);

	console.log('List Render');
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
		<div
			key={data.id}
			{...provided.draggableProps}
			ref={provided.innerRef}
			{...provided.dragHandleProps}
			className={`${
				snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'
			} flex items-center w-full justify-between px-4 py-1 my-2 text-gray-600  border rounded`}
		>
			<div className="items-center">
				<input type="checkbox" defaultChecked={data.completed} onChange={() => handleCompleteChange(data.id)} />{' '}
				<span className={data.completed ? 'line-through' : ''}>{data.title}</span>
			</div>
			<div className="items-center">
				<button className="float-right px-4 py-2" onClick={() => handleClick(data.id)}>
					X
				</button>
			</div>
		</div>
	);
});

export default List;

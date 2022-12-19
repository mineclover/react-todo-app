import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

	const handleEnd = result => {
		const newTodoData = [...todoData];
		const [reorderedItem] = newTodoData.splice(result.source.index, 1);
		newTodoData.splice(result.destination.index, 0, reorderedItem);
		setTodoData(newTodoData);
	};

	return (
		<div>
			<DragDropContext>
				<Droppable droppableId="to-dos">
					{provided => (
						<div ref={provided.innerRef} {...provided.droppableProps}>
							{todoData.map((data, index) => (
								<Draggable key={data.id} draggableId={data.id.toString()} index={index}>
									{(provided, snapshot) => (
										<div
											key={data.id}
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											style={listStyle(data.completed)}
										>
											<div className="flex items-center">
												<input
													type="checkbox"
													defaultChecked={data.completed}
													onChange={() => handleCompleteChange(data.id)}
												/>{' '}
												{data.title}
												<button onClick={() => handleClick(data.id)}>X </button>{' '}
											</div>{' '}
										</div>
									)}
								</Draggable>
							))}{' '}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
}

export default Lists;

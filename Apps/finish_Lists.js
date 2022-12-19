import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const Lists = ({ todoData, setTodoData }) => {
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
		console.log(result);

		if (!result.destination) return;

		const newTodoData = [...todoData];

		// 1. 변경시키는 아이템을 배열에서 지워줍니다.
		// 2. return 값으로 지워진 아이템을 잡아줍니다.
		const [reorderedItem] = newTodoData.splice(result.source.index, 1);

		// 원하는 자리에 reorderedItem을 insert 해줍니다.
		newTodoData.splice(result.destination.index, 0, reorderedItem);
		setTodoData(newTodoData);
	};

	return (
		<div>
			<DragDropContext onDragEnd={handleEnd}>
				<Droppable droppableId="to-dos">
					{provided => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							{todoData.map((data, index) => (
								<Draggable key={data.id} draggableId={data.id.toString()} index={index}>
									{(provided, snapshot) => (
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
												<input
													type="checkbox"
													defaultChecked={data.completed}
													onChange={() => handleCompleteChange(data.id)}
												/>{' '}
												<span className={data.completed ? 'line-through' : ''}>{data.title}</span>
											</div>
											<div className="items-center">
												<button onClick={() => handleClick(data.id)}>X</button>
											</div>
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};

export default Lists;

import './App.css';

import React, { Component } from 'react';

// 그냥 해보는 클래스 컴포넌트 todo
export default class App extends Component {
	state = {
		todoData: [
			{
				id: 1,
				title: '공부하기',
				completed: false,
			},
			{
				id: 2,
				title: '청소하기',
				completed: false,
			},
		],
		value: '',
	};

	btnStyle = {
		color: '#fff',
		border: 'none',
		padding: '5px 9px',
		borderRadius: '50%',
		cursor: 'pointer',
		float: 'right',
	};
	listStyle = completed => {
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
	handleClick = id => {
		let newTodoData = this.state.todoData.filter(data => data.id !== id);
		console.log(newTodoData);
		this.setState({ todoData: newTodoData });
	};
	handleChange = e => {
		this.setState({ value: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();
		const newTodoData = {
			id: this.state.todoData.length + 1,
			title: this.state.value,
			completed: false,
		};
		this.setState({ todoData: [...this.state.todoData, newTodoData], value: '' });
	};

	handleCompleteChange = id => {
		const newTodoData = this.state.todoData.map(data => {
			if (data.id === id) {
				data.completed = !data.completed;
			}
			return data;
		});
		this.setState({ todoData: newTodoData });
	};

	render() {
		return (
			<div className="container">
				<div className="todoBlock">
					<div className="title">
						<h1>Todo List</h1>
					</div>
					{this.state.todoData.map(data => (
						<div style={this.listStyle(data.completed)} key={data.id}>
							<input type="checkbox" defaultChecked={false} onChange={() => this.handleCompleteChange(data.id)} />
							{data.title}

							<button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>
								X
							</button>
						</div>
					))}
					<form style={{ display: 'flex' }} onSubmit={e => this.handleSubmit(e)}>
						<input
							type="text"
							style={{ flex: '10', padding: '5px' }}
							placeholder="할 일을 입력하세요"
							//value={this.state.value}
							defaultValue={this.state.value}
							onChange={e => this.handleChange(e)}
						/>
						<input type="submit" value="Submit" className="btn" style={{ flex: '1' }} />
					</form>
				</div>
			</div>
		);
	}
}

import React from 'react';

function Form({ value, setValue, handleSubmit }) {
	const handleChange = e => {
		console.log(e);
		setValue(e.target.value);
	};

	return (
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
	);
}

export default Form;

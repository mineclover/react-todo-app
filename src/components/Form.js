import React from 'react';

function Form({ value, setValue, handleSubmit }) {
	const handleChange = e => {
		console.log(e);
		setValue(e.target.value);
	};

	return (
		<form className="" onSubmit={e => handleSubmit(e)}>
			<input
				className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
				type="text"
				placeholder="할 일을 입력하세요"
				//value={value}
				defaultValue={value}
				onChange={e => handleChange(e)}
			/>
			<input
				type="submit"
				value="Submit"
				className="p-2 text-blue-200 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
			/>
		</form>
	);
}

export default Form;

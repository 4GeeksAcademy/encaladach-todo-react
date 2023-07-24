import React, {useState} from "react";

const Home =() => {
	const[ inputValue, setInputValue ] = useState("");
	const[ todos, setTodos ] = useState([]);



	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) =>  {
							if (e.key === "Enter"){
								setTodos(todos.concat(inputValue));
								setInputValue("");
							}
					}}
					placeholder="What do you need to do?"></input>
				</li>
				{todos.map((t) => (
					<li>
						{t} <i class="fas fa-trash-alt"></i>
					</li>
				))}				
			</ul>
			<div>13 tasks</div>
		</div>
	);
};

export default Home;

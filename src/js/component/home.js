import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//include images into your bundle

//create your first component
export function Home() {
	const [list, setlist] = useState([
		{ label: "walk the dog", done: false },
		{ label: "walk the dog", done: false }
	]);

	const [todo, setTodo] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
	};

	const handleKeyPress = e => {
		if (e.key === "Enter") {
			setlist(
				list.concat([
					{
						label: todo,
						done: false
					}
				])
			);
			setTodo("");
		}
	};

	const deleteToDo = index => {
		setlist(list.filter((item, i) => i !== index));
	};

	return (
		<div className="text-center mt-5">
			<div>
				<h1>To Do</h1>
				<form onSubmit={handleSubmit}>
					<ul className="list-unstyled">
						<li>
							{""}
							<input
								value={todo}
								type="text"
								placeholder="What do you need?"
								onChange={e => setTodo(e.target.value)}
								onKeyPress={e => handleKeyPress(e)}
							/>
						</li>
						{list.map((item, index) => {
							return (
								<li key={index}>
									{item.label}{" "}
									<span onClick={() => deleteToDo(index)}>
										<FontAwesomeIcon icon={faTrash} />
									</span>
								</li>
							);
						})}
						<li>
							{list.length} item
							{list.length > 1 || list.length === 0
								? "s"
								: null}{" "}
							left
						</li>
					</ul>
				</form>
			</div>
		</div>
	);
}

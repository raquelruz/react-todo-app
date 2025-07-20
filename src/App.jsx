import { use, useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Tabs } from "./components/Navigation/Tabs";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";

const INITIAL_TODOS = [
	{
		text: "Hacer la cama",
		completed: false,
		favorite: false,
		id: 1753037025640,
		done: false,
	},
	{
		text: "Programar React ",
		completed: false,
		favorite: false,
		id: 1753037030612,
		done: false,
	},
	{
		text: "Programar 2 horas diarias",
		completed: false,
		favorite: false,
		id: 1753037042631,
		done: false,
	},
	{
		text: "Hacer el proyecto de CV",
		completed: false,
		favorite: false,
		id: 1753037049031,
		done: false,
	},
];

export const App = () => {
	const [activeTab, setActiveTab] = useState(Tabs.TODOS);
	const [todos, setTodos] = useState(INITIAL_TODOS);

	const addTodo = (newTodo) => {
		setTodos((prev) => [...prev, newTodo]);
	};

	return (
		<div className="app-container">
			<Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
			<h1 className="app-title">📝 Mi lista de tareas</h1>

			{activeTab === Tabs.TODOS && <TodoList todos={todos} />}

			{activeTab === Tabs.FAVORITES && <h2>Pestaña: Favoritas</h2>}

			{activeTab === Tabs.NEW_TODO && <TodoForm addTodo={addTodo} />}
		</div>
	);
};

import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Tabs } from "./components/Navigation/Tabs";
import { TodoForm } from "./components/TodoForm/TodoForm";

export const App = () => {
	const [activeTab, setActiveTab] = useState(Tabs.TODOS);

	return (
		<div className="app-container">
			<Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
			<h1 className="app-title">📝 Mi lista de tareas</h1>

            {activeTab === Tabs.NEW_TODO && <TodoForm />}
		</div>
	);
};

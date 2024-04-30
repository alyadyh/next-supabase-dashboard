import React from "react";
import TodoTable from "./components/TodoTable";
import SearchTodo from "./components/SearchTodo";
import CreateTodo from "./components/CreateTodo";
import { IPermission, ITodo } from "@/lib/types";

export default function Todo({todo, member}: {todo: ITodo, member:IPermission}) {
	return (
		<div className="space-y-5 w-full overflow-y-auto px-3">
			<h1 className="text-3xl font-bold">Todo</h1>
			<div className="flex gap-2">
				<SearchTodo />
				<CreateTodo todo={todo} member={member} />
			</div>
			<TodoTable />
		</div>
	);
}
 
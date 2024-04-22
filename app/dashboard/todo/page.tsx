import React from "react";
import MemberTable from "./components/TodoTable";
import SearchTodo from "./components/SearchTodo";
import CreateTodo from "./components/CreateTodo";
import { ITodo } from "@/lib/types";

export default function Todo({todo}: {todo: ITodo}) {
	return (
		<div className="space-y-5 w-full overflow-y-auto px-3">
			<h1 className="text-3xl font-bold">Todo</h1>
			<div className="flex gap-2">
				<SearchTodo />
				<CreateTodo todo={todo} />
			</div>
			<MemberTable />
		</div>
	);
}

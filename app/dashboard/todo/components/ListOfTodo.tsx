import React from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import EditTodo from "./EditTodo";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { readTodos } from "../actions";
import { ITodo } from "@/lib/types";
import DeleteTodo from "./DeleteTodo";

export default async function ListOfTodo() {
	const { data: todos } = await readTodos();

	return (
		<div className="dark:bg-inherit bg-white mx-2 rounded-sm">
			{(todos as ITodo[])?.map((todo, index) => {
				return (
					<div
						className=" grid grid-cols-5  rounded-sm  p-3 align-middle font-normal "
						key={index}
						>
						<h1>{todo.title}</h1>

						<div>
						<span
							className={cn(
								" dark:bg-zinc-800 px-2 py-1 rounded-full shadow capitalize  border-[.5px] text-sm",
								{
									"border-green-500 text-green-600 bg-green-200":
										todo.completed == true,
									"border-zinc-300 dark:text-yellow-300 dark:border-yellow-700 px-4 bg-yellow-50":
										todo.completed == false,
								}
							)}
						>
							{todo.completed ? `completed` : `on progress`}
						</span>
						</div>
						<h1>{new Date(todo.created_at).toDateString()}</h1>

						<div>
							{todo.member ? <h1>{todo.member.name}</h1> : <h1>{` `}</h1>}
						</div>

						<div className="flex gap-2 items-center">
							<DeleteTodo id={todo.id} />
							<EditTodo todo={todo} />
						</div>
					</div>
				);
			})}
		</div>
	);
}

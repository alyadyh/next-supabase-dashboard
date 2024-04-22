import React from "react";
import DailogForm from "./DialogForm";
import { Button } from "@/components/ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import TodoForm from "./TodoForm";
import { ITodo } from "@/lib/types";

export default function EditTodo({todo}: {todo: ITodo}) {
	return (
		<DailogForm
			id="update-trigger"
			title="Edit Todo"
			Trigger={
				<Button variant="outline">
					<Pencil1Icon />
					Edit
				</Button>
			}
			form={<TodoForm isEdit={true} todo={todo} />}
		/>
	);
}

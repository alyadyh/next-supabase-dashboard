"use server";

import { readUserSession } from "@/lib/actions";
import { createSupbaseAdmin, createSupbaseServerClient } from "@/lib/supabase";
import { revalidatePath, unstable_noStore } from "next/cache";

export async function createTodo(
	data: {
		title: string;
		completed: Boolean;
	}
) {
	const supabase = await createSupbaseServerClient();

	const result = await supabase.from("daily-todo").insert(data).single()

	revalidatePath("/dashboard/todo");

	return JSON.stringify(result)
}

export async function updateTodoById(
	id: string, 
	data: {
		title: string;
		completed: Boolean;
	})
{
	const supabase = await createSupbaseServerClient();
	const result = await supabase.from("daily-todo").update(data).eq("id", id)

	// revalidatePath("/dashboard/todo");
	
	return JSON.stringify(result);
}

export async function deleteTodoById(id: string) {
	const supabase = await createSupbaseServerClient();
	const result = await supabase.from("daily-todo").delete().eq("id", id);
	console.log("deleteTodoById berhasil");
	
	revalidatePath("/dashboard/todo");
	
	return JSON.stringify(result);
}

export async function readTodos() {
	unstable_noStore();
	const supabase = await createSupbaseServerClient()

	return await supabase.from("daily-todo").select("*")
}

import { sql } from "@vercel/postgres";
import { Todo } from "./definitions";
import { OmitIdFromTodo } from "../todoItemList";

export async function fetchTodos() {
  try {
    const data = await sql<Todo>`SELECT * FROM todos`;

    return data.rows;
  } catch (error) {
    console.log("Failed to fetch Todos data", error);

    throw new Error("Failed to fetch Todos data");
  }
}

export async function fetchTodo(todoId: string) {
  try {
    const data = await sql<Todo>`SELECT * FROM todos WHERE id= ${todoId}`;

    return data.rows[0];
  } catch (error) {
    console.log("Failed to fetch Todos data", error);

    throw new Error("Failed to fetch Todos data");
  }
}

export async function createTodo(todo: OmitIdFromTodo) {
  try {
    const data = await sql<Todo>`INSERT INTO todos (id, item, status, createdAt)
        VALUES ( ${todo.item}, ${todo.status}, ${todo.createdAt.toISOString()})
        ON CONFLICT (id) DO NOTHING;
      `;

    return data.rows;
  } catch (error) {
    console.log("Failed to create Todos data", error);

    throw new Error("Failed to create Todos data");
  }
}

export async function deleteTodo(todoId: string) {
  try {
    const response =
      await sql<Todo>`DELETE FROM Todos WHERE todos.id=${todoId}`;
    return response.rows.length > 0
      ? "Your Todo Item has been deleted"
      : "Error deleting the item";
  } catch (error) {
    console.log("Failed to delete Todo data", error);

    throw new Error("Failed to delete Todo data");
  }
}

export async function updateTodo(todoId: string, field: string, value: string) {
  try {
    const data = await sql<Todo>`SELECT * FROM todos WHERE todos.id= ${todoId}`;
    if (data.rows.length > 0) {
      const todo =
        await sql<Todo>`UPDATE todos SET ${field} = ${value} WHERE todos.id = ${todoId}`;
      return Response.json({ data: todo.rows }, { status: 201 });
    }

    return "Couldn't find the data";
  } catch (error) {
    console.log("Unable to edit Todo data", error);

    return Response.json({ error }, { status: 500 });
  }
}

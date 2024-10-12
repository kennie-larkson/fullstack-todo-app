import { sql } from "@vercel/postgres";
import { Todo } from "./definitions";

export async function fetchTodos() {
  try {
    const data = await sql<Todo>`SELECT * FROM todos`;
    console.log({ data });

    return data.rows;
  } catch (error) {
    console.log("Failed to fetch Todos data", error);

    throw new Error("Failed to fetch Todos data");
  }
}

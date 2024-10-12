import { db } from "@vercel/postgres";
//import { todoItems } from "../todoItemList";

const client = await db.connect();

async function createTodosTable() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS todos (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      item VARCHAR(255) NOT NULL,
      status BOOLEAN NOT NULL,
      createdAt DATE NOT NULL
    );
  `;

  /*  const insertedTodos = await Promise.all(
    todoItems.map(async (todoItem) => {
      return client.sql`
        INSERT INTO todos (id, item, status, createdAt)
        VALUES (${todoItem.id}, ${todoItem.item}, ${
        todoItem.status
      }, ${todoItem.createdAt.toISOString()})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedTodos; */
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    console.log("Got here");

    await createTodosTable();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}

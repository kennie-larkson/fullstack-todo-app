import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { rows } = await pool.query("SELECT * FROM todos");
    res.status(200).json(rows);
  } else if (req.method === "POST") {
    const { item } = req.body;
    const result = await pool.query(
      "INSERT INTO todos (item, status, createdAt) VALUES ($1, $2, $3) RETURNING *",
      [item, false, new Date()]
    );
    res.status(201).json(result.rows[0]);
  }
  // Add more methods (PUT, DELETE) as needed
}

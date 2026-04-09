import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
// GET ALL USERS
export async function getUsers() {
  return await db.select().from(users);
}


// GET USER DATA BY EMAIL
export async function getUserByEmail(email: string) {
  return await db.select().from(users).where(eq(users.email, email)).limit(1);
}

// CREATE USER
export async function createUser(name: string, email: string) {
  return await db.insert(users).values({id: crypto.randomUUID(), name: name, email: email});
}
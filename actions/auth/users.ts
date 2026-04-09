'use server';
import { createUser } from "@/lib/queries/users";

export async function registerUser(email: string) {
  await createUser("", email);
}
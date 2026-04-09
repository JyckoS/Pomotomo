import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").default(""),
  picture: text("picture").default(""),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});
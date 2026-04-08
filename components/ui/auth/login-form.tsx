"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`Login with: ${email} and ${password}`);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-warm-white">
      <Card className="w-full max-w-md border-whisper shadow-card bg-white">
        <form onSubmit={handleSubmit}>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-notion font-bold tracking-tight text-foreground">
              Log in to Pomotomo
            </CardTitle>
            <CardDescription className="text-warm-gray">
              Enter your email & password or login with your social account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-whisper focus:ring-notion-blue"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-whisper focus:ring-notion-blue"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-notion-blue text-white hover:bg-notion-blueDark rounded-sm transition-transform active:scale-95"
            >
              Sign in
            </Button>
          </CardContent>
        </form>
      </Card>
    </main>
  );
}
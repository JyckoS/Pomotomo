'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import React from "react";
import { redirect } from "next/dist/server/api-utils";

export default function RegisterForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    let err = "";
    if (password !== confirmPassword) err = "Passwords do not match";
    else if (password.length < 6) err = "Password must be at least 6 characters";
    if (err) {
      setError(err);
      return;
    }
    setError("");
    console.log(`Register with: ${email} and ${password}`);
    redirect
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-warm-white p-4">
      <Card className="w-full max-w-md border-whisper shadow-card bg-white">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-notion font-bold tracking-tight text-foreground">
            Create an account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="email@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                required
                className="border-whisper focus:ring-notion-blue focus:border-notion-blue rounded-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                required
                className="border-whisper focus:ring-notion-blue focus:border-notion-blue rounded-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setError("");
                }}
                required
                className="border-whisper focus:ring-notion-blue focus:border-notion-blue rounded-sm"
              />
            </div>

            {error && (
              <Alert variant="destructive" className="border-whisper">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-notion-blue text-white hover:bg-notion-blue-dark rounded-sm transition-transform active:scale-95"
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
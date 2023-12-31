"use client";
import Image from "next/image";
import { createSignalRContext } from "react-signalr/signalr";
import Chat from "./chat/page";
import AppRouter from "next/dist/client/components/app-router";
import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user, isLoading } = useUser();
  const { push } = useRouter();

  useEffect(() => {
    if (user) {
      return redirect("/chat");
    }

    if (!user && !isLoading) {
      return redirect("/api/auth/login");
    }
  }, [user, push, isLoading]);

  return (
    //todo think of landing?
    <main className="flex min-h-screen flex-col items-center justify-between"></main>
  );
}

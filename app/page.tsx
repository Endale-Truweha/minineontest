"use client"
import TelegramAuth from '@/components/TelegramAuth';
import { getSession } from '@/utils/session';


export default async function Home() {
 

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <TelegramAuth />
    </main>
  )
}
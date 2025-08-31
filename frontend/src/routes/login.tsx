"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/hooks/usetoast"
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { FlickeringGrid } from "@/components/magicui/flickering-grid"
import axios from "axios"
import { useState } from "react"


export const Route = createFileRoute('/login')({
  component: LoginForm,
})

const LoginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

export function LoginForm() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  async function onSubmit(data: z.infer<typeof LoginSchema>) {
    setLoading(true)
    try {
      const response = await axios.post("http://127.0.0.1:8000/backend/accounts/login/jwt/", {
        username: data.email,
        password: data.password,
      })

      const { access, refresh } = response.data
      localStorage.setItem("access_token", access)
      localStorage.setItem("refresh_token", refresh)

      toast({
        title: "Login Successful",
        description: <>Welcome back!</>,
      })

      await navigate({ to: "/dashboard" })

    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: <>{error.response?.data?.detail || "Invalid credentials"}</>,
        // variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-indigo-950 flex items-center justify-center p-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="w-full h-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-900/60 to-transparent" />
      </div>

      {/* Foreground */}
      <div className="relative z-10 w-full max-w-md">
        <Card className="p-8 bg-[#4d148c]/50 border border-white rounded-xl shadow-lg w-3/4 mx-auto justify-center">
          <div className="flex justify-center mb-0">
            <img
              src="/vikacodes03.png"
              alt="VikaCodes Logo"
              className="h-45 w-auto"
            />
          </div>
          <h2 className="text-white text-3xl font-bold mb-3 mt-0 text-center">
            Welcome Back
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Password</FormLabel>
                    <FormControl>
                      <Input className="text-white" type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={loading} className="w-full bg-[#ff6600] hover:bg-[#4d148c]">
                {loading ? "Signing in..." : "Sign In"}
              </Button>

              <p className="text-white">Not registered ! <a href="/register" className="text-[#ff6600] m-2"> sign up here </a>  </p>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  )
}

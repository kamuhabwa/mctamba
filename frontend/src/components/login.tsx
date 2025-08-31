

"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/hooks/usetoast"

// import { createFileRoute } from '@tanstack/react-router'
import { FlickeringGrid } from "@/components/magicui/flickering-grid"

// export const Route = createFileRoute('/login')({
//   component: LoginForm,
// })

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

  function onSubmit(data: z.infer<typeof LoginSchema>) {
    toast({
      title: "Login Attempt",
      description: <span>Logging in as {data.email}</span>,
    })
    // You would usually call an API here.
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
        <Card className="p-8 bg-[#4d148c]/50 border border-white rounded-xl shadow-lg z-50">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">Login</h2>

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
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-[#ff6600] hover:bg-[#4d148c]">
                Sign In
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  )
}


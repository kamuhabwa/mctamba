

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { toast } from "@/hooks/usetoast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "./ui/card"
import { FlickeringGrid } from "./magicui/flickering-grid"

const FormSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  phone: z.string().min(10, { message: "Phone number is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  description: z.string().min(10, { message: "Please describe the work" }),
  file: z
    .any()
    .refine((file) => file instanceof FileList && file.length > 0, {
      message: "File is required",
    }),
})

export function WorkWithUsForm() {
  const { resolvedTheme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000")
  }, [resolvedTheme])

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      description: "",
      file: undefined,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Submitted Successfully",
      description: JSON.stringify(
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          description: data.description,
          fileName: data.file[0]?.name,
        },
        null,
        2
      ),
    })
  }

  return (
    <div className="relative min-h-screen p-6 flex items-center justify-center bg-indigo-900 overflow-hidden">
      {/* Background Flicker */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="w-full h-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Work With Us</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Our Vision Card */}
         <div className="w-full ">
          <img
            src="/workus.png"
            alt="VikaCodes Team"
            className="w-full h-auto rounded-xl shadow-lg object-cover border border-[#ffffff]" 
            
          />
        </div>

          {/* Form Card */}
          <Card className="p-6 bg-[#4d148c]/50 p-6 rounded-lg border border-[#ffffff]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white" >Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1234567890"  className="text-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white" >Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white" >Description of Work</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your project..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Attach File</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          onChange={(e) => field.onChange(e.target.files)}
                        />
                      </FormControl>
                      <FormDescription className="text-white">
                        Upload a project brief or related file.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-[#ff6600] hover:bg-[#4d148c]">
                  Submit
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  )
}

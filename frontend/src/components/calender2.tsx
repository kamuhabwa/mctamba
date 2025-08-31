"use client"

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"; // Make sure this file exists at src/components/ui/popover.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/usetoast";
import BookedCalendar from "./BookedCalendar";

const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone number is required"),
  date: z.date({ required_error: "A booking date is required." }),
});

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date());

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Booking Request Sent",
      description: `Booking submitted for ${format(data.date, "PPP")}`,
    });
  }

  return (
    <div className="flex flex-col min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[#584910] text-white items-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Book Here
      </h1>
      <p className="flex mb-6 text-center justify-center items-center max-w-2xl">
        Make your event unforgettable by booking our professional Master of Ceremony services! Whether it's a wedding, corporate event, or special celebration. Reserve your date now and let us help create lasting memories!
      </p>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-start w-full max-w-4xl">
        {/* Booking Form Card */}
        <Card className="w-full md:w-1/2 shadow-xl order-2 md:order-1 bg-white/90 text-[#584910] text-center">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-center text-[#584910]">Booking Form</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#584910] text-center w-full">Name</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          className="input border p-2 w-full rounded-md text-center"
                          placeholder="Your Name"
                        />
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
                      <FormLabel className="text-[#584910] text-center w-full">Phone number</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          className="input border p-2 w-full rounded-md text-center"
                          placeholder="Your Phone Number"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#584910] text-center w-full">Booking Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-center text-center font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Select date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-[#584910] text-white">
                  Submit Booking
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Calendar Card */}
        <BookedCalendar />
      </div>
    </div>
  );
}



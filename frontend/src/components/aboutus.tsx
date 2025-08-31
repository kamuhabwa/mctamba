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
      phone:"",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Booking Request Sent",
      description: `Booking submitted for ${format(data.date, "PPP")}`,
    });
  }

  return (
  <div
    className="flex flex-col min-h-screen py-16 px-4 sm:px-6 lg:px-8"
    style={{ backgroundImage: "url('/footer.png')" }}
  >
    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
         Book Here
        </h1>
  <p className="mb-6 text-center text-[#ffffff]">
            Make your event unforgettable by booking our professional Master of Ceremony services! Whether it's a wedding, corporate event, or special celebration, our experienced MC will ensure your occasion runs smoothly and keeps your guests engaged. Reserve your date now and let us help create lasting memories!
          </p>

    <div className="flex flex-col md:flex-row gap-8 justify-center items-start w-full">
      {/* Booking Form Card */}
      <Card className="w-full md:w-1/2 shadow-xl order-2 md:order-1">
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
                    <FormLabel className=" text-[#584910]">Name</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="input border p-2 w-full rounded-md"
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
                    <FormLabel className=" text-[#584910]">Phone number</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="input border p-2 w-full rounded-md"
                        placeholder="Your Name"
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
                    <FormLabel className=" text-[#584910]">Booking Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span >Select date</span>
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
              <Button type="submit" className="w-full bg-[#584910]">
                Submit Booking
              </Button>
            </form>
          </Form>
          {/* form here (unchanged) */}
        </CardContent>
      </Card>

      {/* Calendar Card */}
      <BookedCalendar/>
      {/* <Card className="w-full md:w-1/2 shadow-xl order-1 md:order-2">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center text-[#584910]">Booked Dates</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="flex rounded-md border w-full items-center justify-center text-[#584910]"
            disabled={(date) =>
              [new Date("2025-05-30"), new Date("2025-06-02"), new Date("2025-06-10")].some(
                (disabled) =>
                  date.getDate() === disabled.getDate() &&
                  date.getMonth() === disabled.getMonth() &&
                  date.getFullYear() === disabled.getFullYear()
              )
            }
          />
        </CardContent>
      </Card> */}
    </div>
  </div>
);
}



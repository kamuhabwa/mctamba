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
  // accept date strings from <input type="date"> by preprocessing into a Date
  date: z.preprocess(
    (arg) => {
      if (typeof arg === "string" && arg.length) return new Date(arg);
      if (arg instanceof Date) return arg;
      return arg;
    },
    z.date({ required_error: "A booking date is required." })
  ),
});

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date());

  const form = useForm<z.input<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: new Date(),
    },
  });

  // Replace with your WhatsApp number in international format without '+' (e.g. 255712345678)
  const WHATSAPP_NUMBER = "255760303600";

  function onSubmit(data: any) {
    // normalize date (handle date string from inputs)
    let dateStr = "";
    try {
      const dateObj = data.date instanceof Date ? data.date : new Date(data.date);
      dateStr = isNaN(dateObj.getTime()) ? String(data.date ?? "") : format(dateObj, "PPP");
    } catch {
      dateStr = String(data.date ?? "");
    }

    const message = `Booking request%0A%0AName: ${encodeURIComponent(
      String(data.name ?? "")
    )}%0AEmail: ${encodeURIComponent(String(data.email ?? ""))}%0APhone: ${encodeURIComponent(
      String(data.phone ?? "")
    )}%0ADate: ${encodeURIComponent(dateStr)}`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    // open WhatsApp in a new tab/window
    const win = window.open(waUrl, "_blank");

    if (win) {
      // success toast
      toast({
        title: "WhatsApp opened",
        description: "Your booking message is ready. Please complete sending in WhatsApp.",
      });
    } else {
      // popup blocked or failed
      toast({
        title: "Unable to open WhatsApp",
        description: "Popup blocked. Copy this link and open it manually: " + waUrl,
      });
    }
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  {...form.register("name")}
                  className="mt-1 block w-full rounded-md border px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  {...form.register("email")}
                  type="email"
                  className="mt-1 block w-full rounded-md border px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  {...form.register("phone")}
                  className="mt-1 block w-full rounded-md border px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Date</label>
                <input
                  {...form.register("date")}
                  type="date"
                  className="mt-1 block w-full rounded-md border px-3 py-2 bg-white text-black"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center rounded bg-[#584910] px-4 py-2 text-white"
                >
                  Send to WhatsApp
                </button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Calendar Card */}
        {/* <BookedCalendar /> */}
      </div>
    </div>
  );
}



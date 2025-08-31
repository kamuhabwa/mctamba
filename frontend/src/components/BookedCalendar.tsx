import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BookedCalendar() {
  // Example booked dates (replace with backend data later)
  const bookedDates = [
    new Date("2025-05-30"),
    new Date("2025-06-02"),
    new Date("2025-06-10"),
  ];

  // Helper to check if a date is booked
  const isBooked = (date: Date) =>
    bookedDates.some(
      (d) =>
        date.getDate() === d.getDate() &&
        date.getMonth() === d.getMonth() &&
        date.getFullYear() === d.getFullYear()
    );

  return (
    <>
      {/* <h6 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
        Booked Dates Calendar
      </h6> */}
      {/* <p className="text-white text-center mb-6 max-w-xl">
        Below you can see which dates are already booked. Please choose an available date for your event. Booked dates are highlighted and cannot be selected.
      </p> */}
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center text-[#584910]">
            Booked Dates
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <Calendar
            mode="single"
            disabled={isBooked}
            modifiers={{ booked: bookedDates }}
            modifiersClassNames={{ booked: "bg-[#584910] text-white" }}
            className="flex rounded-md border w-full items-center justify-center text-[#584910]"
          />
        </CardContent>
      </Card>
    </>
  );
}
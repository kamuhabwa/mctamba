// "use client"

// import * as React from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { format } from "date-fns";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import BookingCalendar from "./calender2";

// // safe notifier: use app toast if available, otherwise fallback to window.alert
// function notify(opts: { title: string; description?: string }) {
//   if (typeof window !== "undefined") {
//     const globalToast = (window as any).toast;
//     if (typeof globalToast === "function") {
//       try {
//         globalToast(opts);
//         return;
//       } catch {
//         /* ignore and fallback */
//       }
//     }
//   }
//   alert(`${opts.title}\n${opts.description ?? ""}`);
// }

// const FormSchema = z.object({
//   name: z.string().min(1, "Name is required"),
//   email: z.string().email("Invalid email"),
//   phone: z.string().min(1, "Phone number is required"),
//   // accept date strings from <input type="date"> by preprocessing into a Date
//   date: z.preprocess(
//     (arg) => {
//       if (typeof arg === "string" && arg.length) return new Date(arg);
//       if (arg instanceof Date) return arg;
//       return arg;
//     },
//     z.date({ required_error: "A booking date is required." })
//   ),
// });

// export default function BookingFormAbout() {
//   const form = useForm<z.input<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       date: new Date(),
//     },
//   });

//   // Put your WhatsApp number in international format without '+' (e.g. 255712345678)
//   const WHATSAPP_NUMBER = "255760303600";

//   function onSubmit(data: any) {
//     // normalize date (handle date string from inputs)
//     let dateStr = "";
//     try {
//       const dateObj = data.date instanceof Date ? data.date : new Date(data.date);
//       dateStr = isNaN(dateObj.getTime()) ? String(data.date ?? "") : format(dateObj, "PPP");
//     } catch {
//       dateStr = String(data.date ?? "");
//     }

//     const plainMessage = `Booking request\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nDate: ${dateStr}`;
//     // prefer wa.me, fallback to api.whatsapp.com
//     const waMe = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plainMessage)}`;
//     const waApi = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(plainMessage)}`;

//     // Try several ways to open WhatsApp so it works in more browsers/environments
//     let opened = false;

//     // 1) try window.open
//     try {
//       const win = window.open(waMe, "_blank");
//       if (win) {
//         opened = true;
//       }
//     } catch {
//       opened = false;
//     }

//     // 2) try programmatic anchor click
//     if (!opened) {
//       try {
//         const a = document.createElement("a");
//         a.href = waMe;
//         a.target = "_blank";
//         a.rel = "noopener noreferrer";
//         a.click();
//         opened = true;
//       } catch {
//         opened = false;
//       }
//     }

//     // 3) final fallback: navigate current tab to api.whatsapp.com
//     if (!opened) {
//       try {
//         window.location.assign(waApi);
//         opened = true;
//       } catch {
//         opened = false;
//       }
//     }

//     if (opened) {
//       notify({
//         title: "Sent to WhatsApp",
//         description: "WhatsApp opened — please complete sending the message.",
//       });
//       form.reset();
//     } else {
//       // all attempts failed — show link for manual copy
//       notify({
//         title: "Unable to open WhatsApp",
//         description: `All automatic attempts failed. Copy this link and open it manually:\n${waMe}`,
//       });
//     }
//   }

//   return (
//     <div
//       className="flex flex-col min-h-screen py-16 px-4 sm:px-6 lg:px-8"
//       style={{ backgroundImage: "url('/footer.png')" }} // keep aboutus background
//     >
//       <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
//         Book Here
//       </h1>

//       <p className="mb-6 text-center text-[#ffffff] max-w-2xl mx-auto">
//         Make your event unforgettable by booking our professional Master of Ceremony services! Whether it's a wedding,
//         corporate event, or special celebration, our experienced MC will ensure your occasion runs smoothly and keeps your
//         guests engaged. Reserve your date now and let us help create lasting memories!
//       </p>

//       <div className="flex flex-col md:flex-row gap-8 justify-center items-start w-full max-w-4xl mx-auto">
//         <Card className="w-full md:w-1/2 shadow-xl order-2 md:order-1 bg-white/90 text-[#584910]">
//           <CardHeader>
//             <CardTitle className="text-xl font-semibold text-center text-[#584910]">Booking Form</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-left">
//               <div>
//                 <label className="block text-sm font-medium text-[#584910]">Name</label>
//                 <input
//                   {...form.register("name")}
//                   className="mt-1 block w-full rounded-md border px-3 py-2"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-[#584910]">Email</label>
//                 <input
//                   {...form.register("email")}
//                   type="email"
//                   className="mt-1 block w-full rounded-md border px-3 py-2"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-[#584910]">Phone</label>
//                 <input
//                   {...form.register("phone")}
//                   className="mt-1 block w-full rounded-md border px-3 py-2"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-[#584910]">Date</label>
//                 <input
//                   {...form.register("date")}
//                   type="date"
//                   className="mt-1 block w-full rounded-md border px-3 py-2 bg-white text-black"
//                   required
//                 />
//               </div>

//               <div className="flex justify-center">
//                 <Button type="submit" className={cn("w-full bg-[#584910]")}>
//                   Send to WhatsApp
//                 </Button>
//               </div>
//             </form>
//           </CardContent>
//         </Card>

//         <BookingCalendar />

//         {/* optional calendar or booked dates card can go here */}
//       </div>
//     </div>
//   );
// }


"use client"

import React from "react";
import BookingCalendar from "./calender2";

export default function AboutUs() {
  return <BookingCalendar />;
}
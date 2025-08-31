import BookingCalendar from '@/components/calender2';
import Footer from '@/components/footer';
import OurPartners from '@/components/partener';
import { createFileRoute } from '@tanstack/react-router'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaWhatsapp, FaYoutube, FaXTwitter } from "react-icons/fa6";

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <><section
      className="min-h-screen w-full flex flex-col items-center justify-center py-16 px-2"
      style={{
        backgroundImage: "url('/contactbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center drop-shadow-lg">
        Contact Tamba
      </h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-stretch">
        {/* Email */}
        <div className="flex-1 bg-white/90 rounded-2xl shadow-xl flex flex-col items-center p-8 min-w-[220px]">
          <FaEnvelope className="text-3xl text-[#584910] mb-4" />
          <h2 className="text-xl font-semibold text-[#584910] mb-2">Email</h2>
          <a href="mailto:mctamba@email.com" className="text-[#584910]">
            tamba@mctamba.com
          </a>
        </div>
        {/* Phone */}
        <div className="flex-1 bg-white/90 rounded-2xl shadow-xl flex flex-col items-center p-8 min-w-[220px]">
          <FaPhone className="text-3xl text-[#584910] mb-4" />
          <h2 className="text-xl font-semibold text-[#584910] mb-2">Phone</h2>
          <a href="tel:+255700000000" className="text-[#584910] ">
            +255 719 021 577
          </a>
        </div>
        {/* Location */}
        <div className="flex-1 bg-white/90 rounded-2xl shadow-xl flex flex-col items-center p-8 min-w-[220px]">
          <FaMapMarkerAlt className="text-3xl text-[#584910] mb-4" />
          <h2 className="text-xl font-semibold text-[#584910] mb-2">Location</h2>
          <span className="text-[#584910] text-center">
            Dodoma - Tanzania
          </span>
        </div>
        {/* Social Media */}
        <div className="flex-1 bg-white/90 rounded-2xl shadow-xl flex flex-col items-center p-8 min-w-[220px]">
          <h2 className="text-xl font-semibold text-[#584910] mb-4">Social Media</h2>
          <div className="flex gap-4 mb-4">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-2xl text-[#584910] hover:text-pink-500 transition" />
            </a>
            <a href="https://wa.me/255700000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="text-2xl text-[#584910] hover:text-green-500 transition" />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-2xl text-[#584910] hover:text-red-600 transition" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
              <FaXTwitter className="text-2xl text-[#584910] hover:text-blue-400 transition" />
            </a>
          </div>
          <a href="mailto:mctamba@email.com " className="text-[#584910]">
            @mc_tamba
          </a>
        </div>
      </div>
    </section>
    <BookingCalendar />
    <OurPartners/>
    <Footer/>
    </>
  )
}

import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="relative bg-[#584910] text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Static footer image background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/footer.png"
          alt="Footer background"
          className="w-full h-full object-cover object-center opacity-100"
        />
        {/* <div className="absolute inset-0 bg-[#584910] opacity-80" /> */}
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand + Description */}
        <div>
          <Link to="/" className="flex items-center gap-2 shrink-0 mb-3">
            <img src="/logo.png" alt="McTamba Logo" className="h-14 w-auto" />
            <span className="text-2xl font-bold tracking-wide text-white">McTamba</span>
          </Link>
          <p className="text-sm text-yellow-100">
            Your trusted partner for memorable events, elegant venues, and stunning dress designs. Celebrate with style!
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">Quick Links</h3>
          <Link to="/services" className="text-sm hover:text-yellow-300 transition">Services</Link>
          <Link to="/about" className="text-sm hover:text-yellow-300 transition">About Us</Link>
          <Link to="/contact" className="text-sm hover:text-yellow-300 transition">Contact</Link>
          {/* <Link to="/gallery" className="text-sm hover:text-yellow-300 transition">Gallery</Link> */}
        </div>

        {/* Best Event Halls & Dress Designers */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">Top Recommendations</h3>
          <a
            href="https://www.serenahotels.com/dar-es-salaam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-yellow-300 transition"
          >
            Serena Hotel Hall
          </a>
          <a
            href="https://www.jnicc.co.tz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-yellow-300 transition"
          >
            Julius Nyerere Convention Centre
          </a>
          <a
            href="https://www.instagram.com/africanprintdress/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-yellow-300 transition"
          >
            African Print Dress Designers
          </a>
          <a
            href="https://www.instagram.com/bridalglowtz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-yellow-300 transition"
          >
            Bridal Glow Designers
          </a>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">FAQ</h3>
          <ul className="text-sm text-yellow-100 space-y-1">
            <li>
              <span className="font-semibold text-yellow-200">Q:</span> How do I book an event?
              <br />
              <span className="font-semibold text-yellow-200">A:</span> Visit our <Link to="/contact" className="underline hover:text-yellow-300">Contact</Link> page or call us directly.
            </li>
            <li>
              <span className="font-semibold text-yellow-200">Q:</span> Can you recommend a venue?
              <br />
              <span className="font-semibold text-yellow-200">A:</span> Yes! See our top recommendations above.
            </li>
            <li>
              <span className="font-semibold text-yellow-200">Q:</span> Do you offer dress design services?
              <br />
              <span className="font-semibold text-yellow-200">A:</span> Absolutely! We partner with the best designers in town.
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 mt-10 border-t border-white/20 pt-4 text-center text-sm text-yellow-200">
        © {new Date().getFullYear()} McTamba. All rights reserved.
      </div>
    </footer>
  );
}


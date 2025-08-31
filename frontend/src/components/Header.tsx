import { useState } from "react";
import { Link } from "@tanstack/react-router";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative flex items-center justify-between py-2 lg:py-4">      

          {/* Center logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img src="/logo.png" alt="logo" className="h-25 w-auto" />
            </Link>
          </div>
         
          {/* Desktop navigation */}
          {/* <div className="hidden lg:flex items-center space-x-6"> */}
          <div className="hidden lg:flex space-x-6 items-below gap-4 ml-auto">
            <Link to="/" className="text-sm font-medium text-[#584910] hover:text-black">Home</Link>
            <Link to="/about" className="text-sm font-medium text-[#584910] hover:text-black">About</Link>
            <Link to="/services" className="text-sm font-medium text-[#584910] hover:text-black">Services</Link>
            <Link to="/Gallery" className="text-sm font-medium text-[#584910] hover:text-black">Gallery</Link>
            <Link to="/contact" className="text-sm font-medium text-[#584910] hover:text-black">Contacts</Link>
          </div>
            {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center px-3 py-2 border  rounded text-[#584910] border-[#584910] focus:outline-none justify-end"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <nav className="lg:hidden flex flex-col space-y-2 mt-2 px-2">
            <Link to="/" className="text-sm font-medium text-[#584910] hover:text-black" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-sm font-medium text-[#584910] hover:text-black" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/services" className="text-sm font-medium text-[#584910] hover:text-black" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/Gallery" className="text-sm font-medium text-[#584910] hover:text-black" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link to="/contact" className="text-sm font-medium text-[#584910] hover:text-black" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}

// import React, { useState } from "react";
// import { cn } from "@/lib/utils";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import { Link } from "@tanstack/react-router";
// import { ChartNoAxesGantt, X } from "lucide-react";

// // Updated Services data
// const vikacodesServices = [
// 	{
// 		title: "Web Development",
// 		href: "/services/web-development",
// 		description: "Custom websites and web applications using modern technologies.",
// 	},
// 	{
// 		title: "Mobile App Development",
// 		href: "/services/mobile-app-development",
// 		description: "iOS and Android apps built with React Native or Flutter.",
// 	},
// 	{
// 		title: "Cybersecurity",
// 		href: "/services/cybersecurity",
// 		description: "Protect your business with robust cybersecurity solutions.",
// 	},
// 	{
// 		title: "Data Analysis",
// 		href: "/services/data-analysis",
// 		description: "Unlock insights and drive decisions with data analytics.",
// 	},
// 	{
// 		title: "Brand Development",
// 		href: "/services/brand-development",
// 		description: "Build and grow your brand identity.",
// 	},
// 	{
// 		title: "Internet of Things",
// 		href: "/services/internet-of-things",
// 		description: "Connect devices and automate with IoT solutions.",
// 	},
// 	{
// 		title: "Marketing Strategy",
// 		href: "/services/marketing-strategy",
// 		description: "Effective strategies to grow your business.",
// 	},
// 	{
// 		title: "AI and Consultation",
// 		href: "/services/ai-consultation",
// 		description: "Leverage AI and expert advice for your projects.",
// 	},
// ];

// // Products data
// const products = [
// 	{
// 		name: "Karisma",
// 		image: "/karisma.png",
// 		href: "/products/karisma",
// 		description: "Comprehensive talent growing software",
// 	},
// 	{
// 		name: "Vikabusiness",
// 		image: "/vikaPOS.png",
// 		href: "/products/vikabusiness",
// 		description: "All-in-one solution for managing small and medium businesses.",
// 	},
// 	{
// 		name: "e-Soko",
// 		image: "/e-soko.png",
// 		href: "/products/e-soko",
// 		description: "Marketplace connecting software.",
// 	},
// 	{
// 		name: "Progress",
// 		image: "/progress.png",
// 		href: "/products/progress",
// 		description: "Day-to-day growth tracking software.",
// 	},
// ];

// export function Header() {
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//     return (
//         <header className="border-b bg-white shadow-sm">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
//                 <div className="flex items-center justify-between py-4 lg:py-6 relative">
//                     {/* Left: Logo */}
//                     <Link to="/"
//                         className="flex items-center gap-2 shrink-0 cursor-pointer"
//                         onClick={() => setMobileMenuOpen(false)}
//                     >
//                         <img
//                             src="/vikacodes.png"
//                             alt="Vikacodes Logo"
//                             className="h-15 w-auto"
//                         />
//                     </Link>

//                     {/* Center: Navigation (desktop) */}
//                     <div className="hidden lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:flex z-50">
//                         <NavigationMenu>
//                             <NavigationMenuList className="gap-6">
//                                 {/* Home */}
//                                 <NavigationMenuItem>
//                                     <Link to="/">
//                                         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                                             Home
//                                         </NavigationMenuLink>
//                                     </Link>
//                                 </NavigationMenuItem>
//                                 {/* Products */}
//                                 <NavigationMenuItem>
//                                     <NavigationMenuTrigger>Products</NavigationMenuTrigger>
//                                     <NavigationMenuContent>
//                                         <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2 ">
//                                             {products.map((product) => (
//                                                 <ProductItem
//                                                   key={product.name}
//                                                   title={product.name}
//                                                   image={product.image}
//                                                   href={product.href}
//                                                 >
//                                                   {product.description}
//                                                 </ProductItem>
//                                             ))}
//                                         </ul>
//                                     </NavigationMenuContent>
//                                 </NavigationMenuItem>
//                                 {/* Services */}
//                                 <NavigationMenuItem>
//                                     <NavigationMenuTrigger>Services</NavigationMenuTrigger>
//                                     <NavigationMenuContent>
//                                         <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
//                                             {vikacodesServices.map((service) => (
//                                                 <ListItem
//                                                   key={service.title}
//                                                   title={service.title}
//                                                   href={service.href}
//                                                 >
//                                                   {service.description}
//                                                 </ListItem>
//                                             ))}
//                                         </ul>
//                                     </NavigationMenuContent>
//                                 </NavigationMenuItem>
//                                 {/* About */}
//                                 <NavigationMenuItem>
//                                     <Link to="/about">
//                                         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                                             About Us
//                                         </NavigationMenuLink>
//                                     </Link>
//                                 </NavigationMenuItem>
//                                 {/* Contact */}
//                                 <NavigationMenuItem>
//                                     <Link to="/contact">
//                                         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                                             Contact
//                                         </NavigationMenuLink>
//                                     </Link>
//                                 </NavigationMenuItem>
//                             </NavigationMenuList>
//                         </NavigationMenu>
//                     </div>

//                     {/* Right: Login & mobile menu toggle */}
//                     <div className="flex items-center gap-4">
//                         <Link
//                           to="/login"
//                           className={cn(
//                             "hidden lg:inline-block",
//                             navigationMenuTriggerStyle(),
//                             "bg-[#4d148c] text-white hover:bg-[#3a0f6a] transition-colors"
//                           )}
//                         >
//                           Login
//                         </Link>

//                         <button
//                             className="lg:hidden text-gray-700"
//                             onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//                         >
//                           {isMobileMenuOpen ? <X className="h-6 w-6" /> : <ChartNoAxesGantt className="h-6 w-6" />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMobileMenuOpen && (
//                     <div className="lg:hidden flex flex-col space-y-3 pb-4">
//                         <Link to="/" className="block py-2 text-gray-700">
//                             Home
//                         </Link>
//                         <Link to="/about" className="block py-2 text-gray-700">
//                             About Us
//                         </Link>
//                         <Link to="/contact" className="block py-2 text-gray-700">
//                             Contact
//                         </Link>

//                         <div>
//                             <p className="font-semibold text-gray-800 mt-2">Services</p>
//                             {vikacodesServices.map((s) => (
//                                 <Link
//                                     key={s.title}
//                                     to={s.href}
//                                     className="block py-1 text-sm text-gray-600 hover:text-purple-700"
//                                 >
//                                     {s.title}
//                                 </Link>
//                             ))}
//                         </div>

//                         <div>
//                             <p className="font-semibold text-gray-800 mt-2">Products</p>
//                             {products.map((p) => (
//                                 <Link
//                                     key={p.name}
//                                     to={p.href}
//                                     className="block py-1 text-sm text-gray-600 hover:text-purple-700"
//                                 >
//                                     {p.name}
//                                 </Link>
//                             ))}
//                         </div>

//                         <Link
//                             to="/login"
//                             className="mt-2 w-full text-center py-2 bg-[#4d148c] text-white rounded"
//                         >
//                             work with us
//                         </Link>
//                     </div>
//                 )}
//             </div>
//         </header>
//     );
// }

// // ProductItem: Only use inside <NavigationMenu>
// interface ProductItemProps extends React.ComponentPropsWithoutRef<"a"> {
//   title: string;
//   image: string;
// }

// const ProductItem = React.forwardRef<HTMLAnchorElement, ProductItemProps>(
//   ({ className, title, image, children, ...props }, ref) => {
//     return (
//       <li>
//         <NavigationMenuLink asChild>
//           <a
//             ref={ref}
//             className={cn(
//               "flex items-start gap-3 p-3 rounded-md no-underline outline-none",
//               "transition-colors hover:bg-accent hover:text-accent-foreground",
//               "focus:bg-accent focus:text-accent-foreground",
//               className
//             )}
//             {...props}
//           >
//             <img
//               src={image}
//               alt={title}
//               className="h-16 w-16 object-contain rounded-md"
//             />
//             <div className="space-y-1">
//               <div className="text-sm font-medium leading-none">{title}</div>
//               <p className="text-sm leading-snug text-muted-foreground">
//                 {children}
//               </p>
//             </div>
//           </a>
//         </NavigationMenuLink>
//       </li>
//     );
//   }
// );
// ProductItem.displayName = "ProductItem";

// // ListItem: Only use inside <NavigationMenu>
// interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
//   title: string;
// }

// const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
//   ({ className, title, children, ...props }, ref) => {
//     return (
//       <li>
//         <NavigationMenuLink asChild>
//           <a
//             ref={ref}
//             className={cn(
//               "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none",
//               "transition-colors hover:bg-accent hover:text-accent-foreground",
//               "focus:bg-accent focus:text-accent-foreground",
//               className
//             )}
//             {...props}
//           >
//             <div className="text-sm font-medium leading-none">{title}</div>
//             <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//               {children}
//             </p>
//           </a>
//         </NavigationMenuLink>
//       </li>
//     );
//   }
// );
// ListItem.displayName = "ListItem";


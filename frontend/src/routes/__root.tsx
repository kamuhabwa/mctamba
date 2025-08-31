import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useLocation,
} from "@tanstack/react-router";

import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "../components/Header";
import { ContactNav } from "@/components/contact";
import TanstackQueryLayout from "../integrations/tanstack-query/layout";

import appCss from "../styles.css?url";
import type { QueryClient } from "@tanstack/react-query";
import type { TRPCRouter } from "@/integrations/trpc/router";
import type { TRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { SocialMediaNav } from "@/components/social";

// Context definition
interface MyRouterContext {
  queryClient: QueryClient;
  trpc: TRPCOptionsProxy<TRPCRouter>;
}

// Route setup
export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "vikacodes" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootLayout,
});

// Root layout
function RootLayout() {
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/register","/dashboard"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {!shouldHideHeader && <ContactNav/>}
        {!shouldHideHeader && <Header />}
        {/* {!shouldHideHeader && <SocialMediaNav />} */}
        <Outlet />
        <TanstackQueryLayout />
        <TanStackRouterDevtools />
        <Scripts />
      </body>
    </html>
  );
}

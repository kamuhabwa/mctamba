import type { JSX } from "react";



  export function toast({ title, description }: { title: string; description?: string }) {
  window.alert(`${title}${description ? "\n" + description : ""}`);
}
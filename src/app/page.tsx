import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-7xl container mx-auto my-12 space-y-10">
      <aside className="space-y-2">
        <span className="block text-4xl font-bold bg-gradient-to-r from-foreground/80 via-foreground/70 to-foreground/90 text-transparent bg-clip-text">
          Welcome to this{" "}
          <span className="bg-gradient-to-r from-sky-400 to-violet-500 text-transparent bg-clip-text">
            NextAuth V5
          </span>
        </span>
        <span className="block text-5xl font-bold bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground text-transparent bg-clip-text">
          starter template
        </span>
      </aside>
      <Button asChild>
        <Link className="flex items-center gap-1" target="_blank" href={`https://www.youtube.com/@webdevjan`}>
          <GraduationCap/>
          Learn more about this project
        </Link>
      </Button>
    </main>
  );
}

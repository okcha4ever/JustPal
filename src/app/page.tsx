import Hero from "@/components/Hero";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="overflow-y-hidden py-10">
      <Hero />
      <Link
        href="/more"
        className="flex items-center justify-center text-lg font-light text-blue-600 underline"
      >
        Check some people's stories...
      </Link>
    </main>
  );
}

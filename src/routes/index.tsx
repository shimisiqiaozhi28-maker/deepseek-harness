import { createFileRoute } from "@tanstack/react-router";
import { BootSequence } from "@/components/harness/boot-sequence";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <BootSequence />;
}

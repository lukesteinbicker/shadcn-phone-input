"use client";

import { StandaloneFormExample } from "@/components/examples/standalone-form-dialog-example";

export default function Home() {
  return (
    <>
      <div className="container flex max-w-5xl justify-between py-40">
        <main className="flex min-h-screen w-full flex-col items-center justify-between scroll-smooth">
          <StandaloneFormExample />
        </main>
      </div>
    </>
  );
}

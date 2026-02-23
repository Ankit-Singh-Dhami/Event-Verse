import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        All Your College Events.
        <br />
        <PointerHighlight>
          <span>One Platform.</span>
        </PointerHighlight>
      </h1>

      {/* Subheading */}
      <p className="mt-6 text-lg text-neutral-500 md:text-xl max-w-2xl">
        Discover upcoming events, register instantly, and earn verified
        certificates — all in one seamless experience.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex gap-4">
        <SignInButton>
          <button className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90">
            Explore Events
          </button>
        </SignInButton>
        <SignUpButton>
          <button className="rounded-xl border border-neutral-300 px-6 py-3 transition hover:bg-neutral-100">
            Get Started
          </button>
        </SignUpButton>
      </div>
    </section>
  );
}

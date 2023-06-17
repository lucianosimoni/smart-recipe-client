import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-24 overflow-hidden">
      {/* ✉️ Title */}
      <div className="flex place-items-center after:duration-[12000ms] after:animate-[pulse_5s_ease-in-out_infinite] before:pointer-events-none after:pointer-events-none before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:bg-green-300 after:via-green-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 before:dark:opacity-10 after:dark:from-green-900 after:dark:via-green-400 after:dark:opacity-40 before:lg:h-[360px]">
        <Link href="/">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mb-8"
            src="/smart-recipe.svg"
            alt="Smart Recipe Logo"
            width={180}
            height={37}
            priority
          />
        </Link>
      </div>

      {/* ✅ Form & Buttons */}
      <div className="mb-32 flex flex-col gap-4 text-center lg:mb-0">
        {/* 📝 Form */}
        <form className="flex flex-col text-left">
          <label htmlFor="input-username">Username</label>
          <input
            className="bg-transparent rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            id="input-username"
            type="text"
            placeholder="Joseph"
          />

          <label className="mt-4" htmlFor="input-email">
            Email
          </label>
          <input
            className="bg-transparent rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            id="input-email"
            type="email"
            placeholder="joseph@email.com"
          />

          <label className="mt-4" htmlFor="input-password">
            Password
          </label>
          <input
            className="mb-4 bg-transparent rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            id="input-password"
            type="password"
            placeholder="●●●●●●●"
          />

          {/* ▶️ SignUp / Send Form */}
          <button
            type="submit"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          >
            <h2 className="text-2xl font-semibold">
              SignUp{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </button>
        </form>

        {/* 🆕 Login */}
        <Link
          href="/login"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        >
          <h2 className="text-xl font-semibold">Already an user?</h2>
          <span className="m-0 max-w-[30ch] text-sm opacity-50">
            Click to Login back!
          </span>
        </Link>
      </div>

      {/* 🦶 Footer */}
      <div className="z-10 w-full max-w-5xl flex items-center justify-center font-mono text-sm lg:h-48">
        <a
          className="flex justify-center"
          href="https://lucianosimoni.dev"
          target="_blank"
        >
          By Luciano Simoni
        </a>
      </div>
    </main>
  );
}

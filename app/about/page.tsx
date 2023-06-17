import Image from "next/image";
import Link from "next/link";

export default function About() {
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

      {/* 📦 Middle Grid */}
      <div className="w-full max-w-5xl flex flex-col text-center gap-16 lg:flex-row lg:text-left lg:place-items-center">
        {/* 🥬 Text */}
        <div className="flex flex-col items-center w-full lg:w-2/3">
          <h1 className="m-0 max-w-[30ch] text-2xl font-bold mb-4 lg: text-center">
            Welcome to our Recipe App! 😄
          </h1>
          <p className="m-0 max-w-[30ch] text-sm mb-8">
            By harnessing the power of AI-driven recipe recommendations, we
            strive to bring you a diverse selection of delicious recipes
            tailored to your preferences and <i>dietary restrictions</i>.
          </p>
          <p className="m-0 max-w-[30ch] text-sm mb-8">
            Our app utilizes the flexibility of <b>MongoDB</b> to store and
            retrieve recipe data, ensuring that you have access to a
            comprehensive database of culinary delights.
          </p>
          <p className="m-0 max-w-[30ch] text-sm mb-4">
            Whether {"you're"} a seasoned chef or an aspiring home cook, our app
            is designed to cater to your needs. Explore a world of flavors,
            <b>customize your profile</b>, and embark on a culinary journey like
            no other.
          </p>
          <h2 className="m-0 max-w-[30ch] text-md font-bold lg:text-center">
            Join us and elevate your cooking game with our AI-powered recipe
            app.
          </h2>
        </div>

        {/* ✅ Buttons */}
        <div className="mb-32 flex flex-col gap-4 text-center lg:mb-0">
          {/* 🏠 Home */}
          <Link
            href="/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          >
            <h2 className="text-2xl font-semibold">
              <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                &lt;-
              </span>{" "}
              Home
            </h2>
          </Link>

          {/* ▶️ Start now */}
          <Link
            href="/login"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          >
            <h2 className="text-2xl font-semibold">
              Start now{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>
        </div>
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

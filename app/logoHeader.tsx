import Image from "next/image";
import Link from "next/link";

export default function LogoHeader() {
  return (
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
  );
}

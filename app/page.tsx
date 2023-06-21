import LogoHeader from "@/app/_components/logoHeader";
import Button from "@/app/_components/button";
import Footer from "@/app/_components/footer";
import PageWrapper from "@/app/_components/pageWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full h-[100dvh] flex-col items-center justify-between p-8 sm:p-24 overflow-x-hidden overflow-y-auto">
      {/* ✉️ Title */}
      <LogoHeader />

      <PageWrapper>
        {/* 📦 Middle Grid */}
        <div className="w-full max-w-5xl flex flex-col items-center text-center gap-16 lg:flex-row lg:text-left lg:place-items-center">
          {/* 🥬 Text */}
          <div className="relative w-fit lg:w-2/3">
            <p className="m-0 max-w-[30ch] text-3xl">
              Enhanced Cooking Experience: Personalized{" "}
              <b className=" dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
                Recipes with AI
              </b>{" "}
              🧠
            </p>

            {/* 🥕🍅 Floating Images */}
            <Image
              className="dark:opacity-50 absolute left-0 lg:-left-28 lg:top-20 dark:drop-shadow-[0_0_0.3rem_#65656550] animate-[spin_40s_linear_infinite]"
              src="/carrot.svg"
              alt="Carrot"
              width={90}
              height={18.5}
              priority
            />
            <Image
              className="dark:opacity-50 absolute -right-10 -top-20 lg:-right-96 dark:drop-shadow-[0_0_0.3rem_#65656550]  animate-[spin_60s_linear_infinite]"
              src="/tomato.svg"
              alt="Tomato"
              width={90}
              height={18.5}
              priority
            />
          </div>

          {/* ✅ Buttons */}
          <div className="mb-32 flex flex-col gap-4 text-center lg:mb-0">
            {/* ❔ About */}
            <Button href="/about" text="About" />

            {/* TODO: Should not go to the Login! It must go to the dashboard, and have
              a check before it reaches the Dashboard validating the User Authentication.
              Logged or not. */}
            {/* ▶️ Start now */}
            <Button href="/login" text="My Account" mainActionStyle />
          </div>
        </div>
      </PageWrapper>

      {/* 🦶 Footer */}
      <Footer />
    </main>
  );
}

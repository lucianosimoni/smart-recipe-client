import LogoHeader from "@/app/_components/logoHeader";
import Button from "@/app/_components/button";
import PageWrapper from "@/app/_components/pageWrapper";
import Footer from "@/app/_components/footer";

export default function About() {
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-between p-8 sm:p-24 overflow-x-hidden overflow-y-auto">
      {/* ✉️ Title */}
      <LogoHeader />

      <PageWrapper>
        {/* 📦 Middle Grid */}
        <div className="w-full max-w-5xl flex flex-col text-center items-center gap-16 lg:flex-row lg:text-left lg:place-items-center">
          {/* 🥬 Text */}
          <div className="flex flex-col items-center w-full lg:w-2/3 z-20">
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
              Whether {"you're"} a seasoned chef or an aspiring home cook, our
              app is designed to cater to your needs. Explore a world of
              flavors,
              <b>customize your profile</b>, and embark on a culinary journey
              like no other.
            </p>
            <h2 className="m-0 max-w-[30ch] text-md font-bold lg:text-center">
              Join us and elevate your cooking game with our AI-powered recipe
              app.
            </h2>
          </div>

          {/* ✅ Buttons */}
          <div className="mb-32 flex flex-col w-fit gap-4 text-center lg:mb-0">
            {/* 🏠 Home */}
            <Button href="/" text="Home" arrowPosition="left" />

            {/* ▶️ Start now */}
            <Button href="/login" text="Start now" mainActionStyle />
          </div>
        </div>
      </PageWrapper>

      {/* 🦶 Footer */}
      <Footer />
    </main>
  );
}

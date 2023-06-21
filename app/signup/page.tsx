import LogoHeader from "@/app/_components/logoHeader";
import Button from "@/app/_components/button";
import Footer from "@/app/_components/footer";
import PageWrapper from "@/app/_components/pageWrapper";

export default function SignUp() {
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-between p-8 sm:p-24 overflow-x-hidden overflow-y-auto">
      {/* ✉️ Title */}
      <LogoHeader />

      <PageWrapper>
        {/* ✅ Form & Buttons */}
        <div className="mb-32 flex flex-col gap-4 text-center lg:mb-0 z-20">
          {/* 📝 Form */}
          <form className="flex flex-col text-left">
            <label htmlFor="input-username">Username</label>
            <input
              className="bg-transparent rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
              id="input-username"
              type="text"
              placeholder="Joseph"
              minLength={3}
              required
            />

            <label className="mt-4" htmlFor="input-email">
              Email
            </label>
            <input
              className="bg-transparent rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
              id="input-email"
              type="email"
              placeholder="joseph@email.com"
              required
            />

            <label className="mt-4" htmlFor="input-password">
              Password
            </label>
            <input
              className="mb-4 bg-transparent rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
              id="input-password"
              type="password"
              placeholder="●●●●●●●"
              minLength={6}
              required
            />

            {/* ▶️ SignUp / Send Form */}
            <Button
              href="#"
              htmlType="submit"
              text="SignUp"
              actionButton
              mainActionStyle
            />
          </form>

          {/* 🆕 Login */}
          <Button
            href="/login"
            arrowPosition="none"
            text="Already an user?"
            subtext="Click to Login back!"
            textSize="small"
          />
        </div>
      </PageWrapper>

      {/* 🦶 Footer */}
      <Footer />
    </main>
  );
}

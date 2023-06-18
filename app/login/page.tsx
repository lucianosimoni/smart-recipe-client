import LogoHeader from "../logoHeader";
import Button from "../button";
import Footer from "../footer";

export default function Login() {
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-between p-8 sm:p-24 overflow-x-hidden overflow-y-auto">
      {/* ✉️ Title */}
      <LogoHeader />

      {/* ✅ Form & Buttons */}
      <div className="mb-32 flex flex-col gap-4 text-center lg:mb-0">
        {/* 📝 Form */}
        <form className="flex flex-col text-left">
          <label htmlFor="input-email">Email or Username</label>
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

          {/* ▶️ Login / Send Form */}
          <Button
            href="#"
            htmlType="submit"
            text="Login"
            actionButton
            mainActionStyle
          />
        </form>

        {/* 🆕 Register */}
        <Button
          href="/signup"
          text="New here?"
          subtext="Click to Sign up now!"
          arrowPosition="none"
          textSize="small"
        />
      </div>

      {/* 🦶 Footer */}
      <Footer />
    </main>
  );
}

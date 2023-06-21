import LogoHeader from "@/app/_components/logoHeader";
import Button from "@/app/_components/button";
import Footer from "@/app/_components/footer";
import PageWrapper from "@/app/_components/pageWrapper";
import LoginForm from "@/app/_components/loginForm";

export default function Login() {
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-between p-8 sm:p-24 overflow-x-hidden overflow-y-auto">
      {/* ✉️ Title */}
      <LogoHeader />

      <PageWrapper>
        {/* ✅ Form & Buttons */}
        <div className="mb-32 flex flex-col gap-4 text-center lg:mb-0 z-20">
          {/* 📝 Form */}
          <LoginForm />

          {/* 🆕 Register */}
          <Button
            href="/signup"
            text="New here?"
            subtext="Click to Sign up now!"
            arrowPosition="none"
            textSize="small"
          />
        </div>
      </PageWrapper>

      {/* 🦶 Footer */}
      <Footer />
    </main>
  );
}

import LogoHeader from "@/app/_components/logoHeader";
import Button from "@/app/_components/button";
import PageWrapper from "@/app/_components/pageWrapper";
import NavigationBar from "@/app/_components/navigationBar";

export default function Explore() {
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-between p-8 sm:p-24 overflow-x-hidden overflow-y-auto">
      {/* ✉️ Title */}
      <LogoHeader />

      <PageWrapper>
        {/* ✅ Form & Buttons */}
        <h1 className="text-center">Explore other Recipes</h1>

        <div className="mb-32 flex flex-col gap-4 text-center lg:mb-0 z-20">
          <Button
            href="/dashboard"
            text="Dashboard"
            arrowPosition="left"
            mainActionStyle
          />
        </div>
      </PageWrapper>

      {/* ⚒️ Navigation Bar */}
      <NavigationBar />
    </main>
  );
}

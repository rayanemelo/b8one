import { Footer } from "@/layout/public/footer/footer";
import { Header } from "@/layout/public/header/header";
import { TopBar } from "@/layout/public/topbar/topbar";
import { Suspense } from "react";



export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 max-h-28 h-full">
        <TopBar />
        <Header />
      </div>
      <main className="flex flex-col w-full min-h-screen bg-[#F9F9F9] mt-[115px]">
        {children}
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}

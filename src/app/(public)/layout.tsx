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
      <div className="fixed left-0 right-0 top-0 z-50 h-full max-h-28">
        <TopBar />
        <Header />
      </div>
      <main className="mt-[115px] flex min-h-screen w-full flex-col bg-[#F9F9F9]">{children}</main>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}

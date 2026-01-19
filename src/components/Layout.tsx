import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import FloatingNav from "./FloatingNav";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <FloatingNav />
      <main className="flex-1 pt-28 md:pt-32">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;

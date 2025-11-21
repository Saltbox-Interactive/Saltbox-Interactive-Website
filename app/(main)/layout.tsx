import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import BackToTop from "@/components/ui/BackToTop";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <main className="relative" style={{ minHeight: "100vh" }}>
        <div className="bg-black">{children}</div>
      </main>
      <Footer />
      <BackToTop />
    </SmoothScroll>
  );
}

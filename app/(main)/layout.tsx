import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <main className="relative" style={{ minHeight: "100vh" }}>
        <div className="bg-black">{children}</div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}

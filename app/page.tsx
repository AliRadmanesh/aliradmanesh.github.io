import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolios from "@/components/Portfolios";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f2efe8]">
      <Header />
      <Hero />
      <Banner />
      <Portfolios />
      <Footer />
    </main>
  );
}

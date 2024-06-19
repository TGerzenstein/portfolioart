import AboutMe from "./components/AboutMe";
import EmailSection from "./components/EmailSection";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Test from "./components/Test";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="container mt-24 mx-auto px-16 py-6">
        <Hero />
        <AboutMe />
        <EmailSection />
      </div>
        <Test></Test>
        <Footer />           
    </main>
  );
}

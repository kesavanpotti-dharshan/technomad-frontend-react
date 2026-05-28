import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to TechNomad</h1>
        <p className="text-xl text-gray-600 mb-8">
          .NET Core, AI, and Clean Architecture tutorials for builders
        </p>
        <Link
          href="/blog"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Read Blog →
        </Link>
      </main>
      <Footer />
    </>
  );
}

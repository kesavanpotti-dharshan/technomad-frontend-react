import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          TechNomad
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <Link href="/" className="hover:text-blue-600">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

import { getAllBlogPosts } from "../utils/blogLoader";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogIndex() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Blog(s)</h1>
        <div className="grid gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

import { getBlogPostBySlug, getAllBlogPosts } from "../../utils/blogLoader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ArchitectureDiagram from "../../components/ArchitectureDiagram";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ImgHTMLAttributes } from "react";

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const posts = getAllBlogPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch {
    return [];
  }
}

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-600 mb-8">
          {new Date(post.date).toLocaleDateString()} by {post.author}
        </p>

        {post.slug === "clean-architecture-intro" && <ArchitectureDiagram />}

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              code: ({ inline, className, children }: CodeProps) => {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={nord}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className}>{children}</code>
                );
              },
              img: (props: ImgHTMLAttributes<HTMLImageElement>) => (
                <img {...props} className="my-4 rounded-lg max-w-full h-auto" />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </main>
      <Footer />
    </>
  );
}
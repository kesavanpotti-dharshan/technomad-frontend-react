import { BlogPost } from '../types/blog';
import Link from 'next/link';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 hover:text-blue-600">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <div className="flex gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import Image from 'next/image';
import Link from 'next/link';
import type { Components } from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const components: Components = {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-[#223382] mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-[#223382] mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-[#223382] mt-6 mb-2">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-[#111144]/80 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-[#111144]/80">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-[#111144]/80">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    a: ({ href, children }) => {
      const isExternal = href?.startsWith('http');
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F98513] hover:underline"
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href || '#'} className="text-[#F98513] hover:underline">
          {children}
        </Link>
      );
    },
    img: ({ src, alt }) => {
      if (!src || typeof src !== 'string') return null;
      return (
        <span className="block my-6">
          <Image
            src={src}
            alt={alt || ''}
            width={800}
            height={450}
            className="rounded-lg w-full h-auto"
          />
        </span>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#F98513] pl-4 my-6 italic text-[#111144]/70">
        {children}
      </blockquote>
    ),
    code: ({ className, children }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code className="bg-[#F4F1EC] px-1.5 py-0.5 rounded text-[#223382] text-sm font-mono">
            {children}
          </code>
        );
      }
      return (
        <code className={className}>
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre className="bg-[#1a1a2e] text-white p-4 rounded-lg overflow-x-auto my-6 text-sm">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-[#223382]/20">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-[#F4F1EC]">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="border border-[#223382]/20 px-4 py-2 text-left font-bold text-[#223382]">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-[#223382]/20 px-4 py-2 text-[#111144]/80">
        {children}
      </td>
    ),
    hr: () => <hr className="my-8 border-[#223382]/20" />,
    strong: ({ children }) => (
      <strong className="font-bold text-[#223382]">{children}</strong>
    ),
  };

  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

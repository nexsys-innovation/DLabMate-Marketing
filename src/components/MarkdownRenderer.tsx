import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  if (!content || !content.trim()) {
    return null;
  }

  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children, ...props }) => (
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mt-8 mb-4 leading-tight border-b border-border pb-3" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mt-8 mb-3 leading-snug" {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 className="text-lg font-bold text-text-primary mt-6 mb-2" {...props}>
              {children}
            </h3>
          ),
          p: ({ children, ...props }) => (
            <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-4" {...props}>
              {children}
            </p>
          ),
          ul: ({ children, ...props }) => (
            <ul className="space-y-2 text-sm sm:text-base text-text-muted list-disc list-inside mb-6 pl-2" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="space-y-2 text-sm sm:text-base text-text-muted list-decimal list-inside mb-6 pl-2" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="leading-relaxed" {...props}>
              {children}
            </li>
          ),
          a: ({ children, href, ...props }) => (
            <a href={href} className="text-primary font-medium hover:underline inline-flex items-center gap-1" {...props}>
              {children}
            </a>
          ),
          hr: () => <hr className="my-8 border-border" />,
          blockquote: ({ children, ...props }) => (
            <blockquote className="border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg my-6 text-sm text-text-muted italic" {...props}>
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

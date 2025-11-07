import { ClipboardIcon } from "lucide-react";
import React, { type ComponentProps } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownRendererProps {
	content: string;
	className?: string;
	components?: React.ComponentProps<typeof ReactMarkdown>["components"];
}

type SyntaxHighlighterProps = ComponentProps<typeof SyntaxHighlighter>;

export function MarkdownRenderer({ content, className = "", components = {} }: MarkdownRendererProps) {
	const defaultComponents: MarkdownRendererProps["components"] = {
		// Kod blokları için özelleştirme
		code({ className, children, ...props }) {
			const match = /language-(\w+)/.exec(className || "");
			const language = match ? match[1] : "";
			const codeContent = String(children).replace(/\n$/, "");

			function copyCodeContent() {
				navigator.clipboard.writeText(codeContent);
			}

			if (language) {
				return (
					<div className="relative">
						<button className="icon absolute top-2 right-2" onClick={copyCodeContent}>
							<ClipboardIcon />
						</button>
						<SyntaxHighlighter
							style={oneDark as SyntaxHighlighterProps["style"]}
							language={language}
							PreTag="div"
							className="rounded-lg"
						>
							{codeContent}
						</SyntaxHighlighter>
					</div>
				);
			}

			return (
				<code className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800" {...props}>
					{children}
				</code>
			);
		},

		// Başlıklar için özelleştirme
		h1: ({ children }) => <h1 className="mt-6 mb-4 text-3xl font-bold text-gray-900 dark:text-white">{children}</h1>,
		h2: ({ children }) => <h2 className="mt-5 mb-3 text-2xl font-bold text-gray-800 dark:text-gray-100">{children}</h2>,
		h3: ({ children }) => <h3 className="mt-4 mb-2 text-xl font-bold text-gray-700 dark:text-gray-200">{children}</h3>,

		// Paragraf
		p: ({ children }) => <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">{children}</p>,

		// Listeler
		ul: ({ children }) => <ul className="mb-4 list-inside list-disc space-y-1">{children}</ul>,
		ol: ({ children }) => <ol className="mb-4 list-inside list-decimal space-y-1">{children}</ol>,
		li: ({ children }) => <li className="text-gray-700 dark:text-gray-300">{children}</li>,

		// Linkler
		a: ({ href, children }) => (
			<a
				href={href}
				className="text-blue-600 underline transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
				target="_blank"
				rel="noopener noreferrer"
			>
				{children}
			</a>
		),

		// Blokquote
		blockquote: ({ children }) => (
			<blockquote className="my-4 border-l-4 border-gray-300 pl-4 text-gray-600 italic dark:border-gray-600 dark:text-gray-400">
				{children}
			</blockquote>
		),

		// Tablo
		table: ({ children }) => (
			<div className="my-4 overflow-x-auto">
				<table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">{children}</table>
			</div>
		),
		th: ({ children }) => (
			<th className="border border-gray-300 bg-gray-100 px-4 py-2 font-semibold dark:border-gray-600 dark:bg-gray-700">
				{children}
			</th>
		),
		td: ({ children }) => <td className="border border-gray-300 px-4 py-2 dark:border-gray-600">{children}</td>,
	};

	const mergedComponents = { ...defaultComponents, ...components };

	return (
		<div className={`markdown-body ${className}`}>
			<ReactMarkdown components={mergedComponents}>{content}</ReactMarkdown>
		</div>
	);
}

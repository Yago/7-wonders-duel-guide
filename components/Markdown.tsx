import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export type Props = {
  children: string;
};

const Markdown = ({ children }: Props): JSX.Element => (
  <ReactMarkdown
    className="prose prose-headings:mt-4 prose-headings:mb-1 prose-headings:font-bold prose-h1:text-3xl"
    remarkPlugins={[remarkGfm]}
  >
    {children}
  </ReactMarkdown>
);

Markdown.defaultProps = {};

export default Markdown;

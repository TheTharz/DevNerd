import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy, FaCheck } from 'react-icons/fa'; // Assuming you are using Font Awesome icons

interface CodeHighlighterProps {
  codeSnippet: string;
  language: string;
}

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({
  codeSnippet,
  language,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  // Ensure codeSnippet is always a string before rendering
  const formattedCodeSnippet =
    typeof codeSnippet === 'string' ? codeSnippet.trim() : '';

  return (
    <div className='relative w-full'>
      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        showLineNumbers
      >
        {formattedCodeSnippet}
      </SyntaxHighlighter>

      <button
        onClick={handleCopy}
        className='absolute top-4 right-2 p-2 bg-yellow-400 rounded-tr text-white hover:bg-yellow-500 focus:outline-none rounded-lg'
      >
        {copied ? <FaCheck /> : <FaCopy />}
      </button>
    </div>
  );
};

export default CodeHighlighter;

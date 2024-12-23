import React from 'react';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';
import './style.css';

async function getMarkdownContent() {
  const filePath = path.join(process.cwd(), 'pages', 'about.md');
  const fileContents = await fs.promises.readFile(filePath, 'utf-8');
  return fileContents;
}

export default async function AboutPage() {
  const content = await getMarkdownContent();

  return (
    <div className="content">
      <div className='md'>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
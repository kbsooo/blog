import React from 'react';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import './style.css';

export default async function PostDetailPage({ params }: { params: { post: string } }) {
  const postName = params.post;
  const filePath = path.join(process.cwd(), 'pages', 'posts', `${postName}.md`);

  try {
    const fileContents = await fs.promises.readFile(filePath, 'utf-8');
    return (
      <div className='content'>
        <Link className='cd' href='/posts'>$ cd..</Link>
        <h2 className='postName'>{postName}</h2>
        <ReactMarkdown>
          {fileContents}
        </ReactMarkdown>
      </div>
    );
  } catch (err) {
    console.log(err);
    notFound();
  }
}
import React from 'react';
import fs from 'fs';
import path from 'path';
import PostLink from './PostLink'; // Adjust the import path if necessary
import './style.css';

export default function PostsPage() {
  const postsDirectory = path.join(process.cwd(), 'pages', 'posts');
  const fileNames = fs.readdirSync(postsDirectory).filter((fileName) => fileName.endsWith('.md'));

  const posts = fileNames.map((fileName) => path.parse(fileName).name);

  return (
    <div className='content'>
      <p>$ ls</p>
      <ul className='list'>
        {posts.map((post) => (
          <li key={post}>
            <PostLink post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
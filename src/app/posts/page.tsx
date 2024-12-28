// import React from 'react';
// import ReactMarkdown from 'react-markdown';
// import fs from 'fs';
// import path from 'path';
// import './style.css';

// async function getMarkdownContent() {
//   const filePath = path.join(process.cwd(), 'pages', 'about.md');
//   const fileContents = await fs.promises.readFile(filePath, 'utf-8');
//   return fileContents;
// }

// export default async function Page() {
//   const content = await getMarkdownContent();

//   return (
//     <div className="content">
//       <div className='md'>
//         <ReactMarkdown>{content}</ReactMarkdown>
//       </div>
//     </div>
//   );
// }





// import React from 'react';
// import fs from 'fs';
// import path from 'path';
// import Link from 'next/link';
// import './style.css';
// import PostLink from './PostLink';

// export default function PostsPage() {
//   const postsDirectory = path.join(process.cwd(), 'pages', 'posts');
//   const fileNames = fs.readdirSync(postsDirectory).filter((fileName) => fileName.endsWith('.md'));

//   const posts = fileNames.map((fileName) => {
//     const postName = path.parse(fileName).name;
//     return postName;
//   });

//   return (
//     <div className='content'>
//       <h3>~/posts $ ls</h3>
//       <ul className='list'>
//         {posts.map((post) => (
//           <li key={post}>
//             <Link className='posts' href={`/posts/${post}`}>
//               {post}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

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
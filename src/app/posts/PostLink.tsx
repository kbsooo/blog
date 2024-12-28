'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface PostLinkProps {
  post: string;
}

const PostLink: React.FC<PostLinkProps> = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link className='posts' href={`/posts/${post}`}>
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? `$ cd ${post}` : post}
      </span>
    </Link>
  );
};

export default PostLink;
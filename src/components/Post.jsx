import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="border-b border-gray-200 p-4">
      <div className="flex items-center mb-2">
        <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full mr-2" />
        <div>
          <p className="font-bold">{post.author.name}</p>
          <p className="text-sm text-gray-500">@{post.author.username} · {post.timestamp}</p>
        </div>
      </div>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt="Post image" className="mt-2 rounded-lg" />}
      <div className="flex justify-between mt-2 text-gray-500">
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <span className="material-symbols-outlined">chat_bubble_outline</span>
          <span>{post.comments}</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-green-500">
          <span className="material-symbols-outlined">repeat</span>
          <span>{post.retweets}</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-red-500">
          <span className="material-symbols-outlined">favorite_border</span>
          <span>{post.likes}</span>
        </button>
        <button className="hover:text-blue-500">
          <span className="material-symbols-outlined">ios_share</span>
        </button>
      </div>
    </div>
  );
};

export default Post;

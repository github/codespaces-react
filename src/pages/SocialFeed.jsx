import React, { useState } from 'react';
import './SocialFeed.css';

const SocialFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Jane Smith',
      avatar: '👩',
      timestamp: '2 hours ago',
      content: 'Just attended an amazing climate march! The energy was incredible. #ClimateAction',
      likes: 124,
      comments: 18,
      shares: 32
    },
    {
      id: 2,
      author: 'John Doe',
      avatar: '👨',
      timestamp: '5 hours ago',
      content: 'Education reform petition just hit 10,000 signatures! Keep sharing everyone.',
      likes: 89,
      comments: 12,
      shares: 45
    },
    {
      id: 3,
      author: 'Alex Johnson',
      avatar: '🧑',
      timestamp: '1 day ago',
      content: 'Virtual town hall tonight at 7 PM. Let\'s discuss local housing issues together.',
      likes: 56,
      comments: 23,
      shares: 19
    }
  ]);

  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: 'You',
        avatar: '😊',
        timestamp: 'Just now',
        content: newPost,
        likes: 0,
        comments: 0,
        shares: 0
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="social-feed">
      <div className="feed-header">
        <h1>Social Feed</h1>
        <p>Connect, share, and amplify causes that matter</p>
      </div>

      <div className="create-post">
        <form onSubmit={handlePostSubmit}>
          <textarea
            placeholder="What's on your mind? Share an update, event, or call to action..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            rows="3"
          />
          <button type="submit" className="post-button">Post</button>
        </form>
      </div>

      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <div className="author-info">
                <span className="avatar">{post.avatar}</span>
                <div>
                  <h3>{post.author}</h3>
                  <span className="timestamp">{post.timestamp}</span>
                </div>
              </div>
            </div>
            <div className="post-content">
              <p>{post.content}</p>
            </div>
            <div className="post-actions">
              <button onClick={() => handleLike(post.id)} className="action-btn">
                ❤️ {post.likes}
              </button>
              <button className="action-btn">💬 {post.comments}</button>
              <button className="action-btn">🔄 {post.shares}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialFeed;
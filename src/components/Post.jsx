import React from 'react';

const Post = ({ avatar, name, handle, time, location, content, image, stats }) => {
  return (
    <article className="p-4 flex gap-4 hover:bg-gray-50 dark:hover:bg-surface-dark/50 transition-colors duration-200">
      <div className="shrink-0">
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: `url("${avatar}")`}}></div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-2">
          <p className="text-secondary dark:text-gray-100 text-base font-bold leading-tight">{name}</p>
          <p className="text-accent-gray dark:text-gray-400 text-sm font-normal">{handle} • {time}</p>
        </div>
        {location && (
          <p className="text-accent-gray dark:text-gray-400 text-sm font-normal leading-normal mb-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">location_on</span> {location}
          </p>
        )}
        <p className="text-[#111418] dark:text-gray-200 text-base leading-relaxed my-2" dangerouslySetInnerHTML={{ __html: content.replace(/#\w+/g, '<span class="text-primary">$&</span>') }}></p>
        {image && <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mb-2" style={{backgroundImage: `url("${image}")`}}></div>}
        <div className="flex flex-wrap gap-x-8 -ml-2">
          <div className="flex items-center justify-center gap-1 px-2 py-2 rounded-full hover:bg-primary/20 group">
            <span className="material-symbols-outlined text-accent-gray dark:text-gray-400 text-xl group-hover:text-primary">volunteer_activism</span>
            <p className="text-accent-gray dark:text-gray-400 text-[13px] font-bold group-hover:text-primary">{stats.likes}</p>
          </div>
          <div className="flex items-center justify-center gap-1 px-2 py-2 rounded-full hover:bg-primary/20 group">
            <span className="material-symbols-outlined text-accent-gray dark:text-gray-400 text-xl group-hover:text-primary">chat_bubble_outline</span>
            <p className="text-accent-gray dark:text-gray-400 text-[13px] font-bold group-hover:text-primary">{stats.comments}</p>
          </div>
          <div className="flex items-center justify-center gap-1 px-2 py-2 rounded-full hover:bg-primary/20 group">
            <span className="material-symbols-outlined text-accent-gray dark:text-gray-400 text-xl group-hover:text-primary">repeat</span>
            <p className="text-accent-gray dark:text-gray-400 text-[13px] font-bold group-hover:text-primary">{stats.shares}</p>
          </div>
          <div className="flex items-center justify-center gap-1 px-2 py-2 rounded-full hover:bg-primary/20 group">
            <span className="material-symbols-outlined text-accent-gray dark:text-gray-400 text-xl group-hover:text-primary">ios_share</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;

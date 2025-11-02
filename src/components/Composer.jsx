import React from 'react';

const Composer = () => {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1miwEl0pkxz8KHYFc-VWzae0a2BkSrI6Aa4GtFano86mVGWgpfpAv_18ikkcaDG8cElxfQ5X5NZbsuRYv1VhyAlAIPkcY8tEdsCGFV5H9vYKrP67I81rTnqfWCwVd9nQOFXqGA79emOMAhS9k71G3se7RqhPHJIilG8Yi9hBC3yF-HPBxAicxsh8sxYRoAN3UhzWKBtakjDj-7tfWTpTMlP3Gh_gkh00rAyr5sCU7_y85mtVr5tfRhT7pVR6jpepizcbV6SyDuA"
          alt="User avatar"
          className="w-10 h-10 rounded-full mr-2"
        />
        <textarea
          className="w-full p-2 border-none focus:ring-0"
          placeholder="What's happening?"
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex space-x-2 text-primary">
          <button className="hover:bg-primary/20 p-1 rounded-full">
            <span className="material-symbols-outlined">image</span>
          </button>
          <button className="hover:bg-primary/20 p-1 rounded-full">
            <span className="material-symbols-outlined">videocam</span>
          </button>
          <button className="hover:bg-primary/20 p-1 rounded-full">
            <span className="material-symbols-outlined">location_on</span>
          </button>
          <button className="hover:bg-primary/20 p-1 rounded-full">
            <span className="material-symbols-outlined">ballot</span>
          </button>
        </div>
        <button className="bg-primary text-white px-4 py-1 rounded-full font-bold">
          Post
        </button>
      </div>
    </div>
  );
};

export default Composer;

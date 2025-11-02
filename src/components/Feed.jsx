import React from 'react';
import Post from './Post';

const Feed = () => {
  return (
    <div>
      <div className="sticky top-0 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm z-10 px-4 py-3 border-b border-border-light dark:border-border-dark">
        <div className="flex items-start gap-3 @container">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0 mt-2" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1miwEl0pkxz8KHYFc-VWzae0a2BkSrI6Aa4GtFano86mVGWgpfpAv_18ikkcaDG8cElxfQ5X5NZbsuRYv1VhyAlAIPkcY8tEdsCGFV5H9vYKrP67I81rTnqfWCwVd9nQOFXqGA79emOMAhS9k71G3se7RqhPHJIilG8Yi9hBC3yF-HPBxAicxsh8sxYRoAN3UhzWKBtakjDj-7tfWTpTMlP3Gh_gkh00rAyr5sCU7_y85mtVr5tfRhT7pVR6jpepizcbV6SyDuA")'}}></div>
          <div className="flex flex-1 flex-col">
            <textarea className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden bg-transparent text-[#111418] dark:text-gray-200 focus:outline-0 focus:ring-0 border-0 h-auto placeholder:text-gray-500 dark:placeholder:text-gray-400 text-lg font-normal leading-normal py-3 px-0" placeholder="What's happening?"></textarea>
            <div className="flex justify-between items-center pt-2">
              <div className="flex items-center gap-1">
                <button className="flex items-center justify-center p-1.5 rounded-full hover:bg-primary/20">
                  <span className="material-symbols-outlined text-primary text-lg">image</span>
                </button>
                <button className="flex items-center justify-center p-1.5 rounded-full hover:bg-primary/20">
                  <span className="material-symbols-outlined text-primary text-lg">videocam</span>
                </button>
                <button className="flex items-center justify-center p-1.5 rounded-full hover:bg-primary/20">
                  <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                </button>
                <button className="flex items-center justify-center p-1.5 rounded-full hover:bg-primary/20">
                  <span className="material-symbols-outlined text-primary text-lg">ballot</span>
                </button>
              </div>
              <button className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-primary text-secondary dark:text-background-dark text-sm font-bold leading-normal">
                <span className="truncate">Post</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-border-light dark:border-border-dark">
        <div className="flex justify-around gap-8">
          <a className="flex flex-col grow items-center justify-center border-b-[3px] border-b-transparent text-accent-gray dark:text-gray-400 pb-[13px] pt-4 hover:bg-gray-100 dark:hover:bg-surface-dark/50" href="#">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Following</p>
          </a>
          <a className="flex flex-col grow items-center justify-center border-b-[3px] border-b-primary text-secondary dark:text-gray-100 pb-[13px] pt-4" href="#">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">For You</p>
          </a>
          <a className="flex flex-col grow items-center justify-center border-b-[3px] border-b-transparent text-accent-gray dark:text-gray-400 pb-[13px] pt-4 hover:bg-gray-100 dark:hover:bg-surface-dark/50" href="#">
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Local Issues</p>
          </a>
        </div>
      </div>
      <div className="divide-y divide-border-light dark:divide-border-dark">
        <Post
            avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuC8TOtLGjiTUwhY6FsnHWqjRevfdgcgpB34ZP2jr7vUhxdKIJ0ols6VO1mZIHWqfCNkNAf2fn6zNjFkl0UOp1bRBmdSMC7In3GarYijrzQI8-ap7kRFC1hamGkILuhRTPvSoMez6w5UAXQzLoHpnD6cGyN-_cGtY5MzDEcdJk8WIIrgkuQFE36PL2C-RwlZqMr1Ds2fNACma29_w2Wjpc9AnkBlx_3fb2Fr3mRT0sK8ApP2MExfYq4hEB5ceCHvNU6w-Mo6pClTPQ"
            name="Priya Singh"
            handle="@priya_activist"
            time="2h"
            location="Mumbai"
            content="Urgent: Need volunteers for the Juhu Beach cleanup this Sunday. Let's reclaim our public spaces! #CleanJuhu #MumbaiCleanUp"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAg37-9yDIB53Tw7UwUmakoxxZHP5z2a4RBbWeeuob99oT7apoLvcoiuzhVzr9B6vlgnXIdJRSVnsyAgn4IjAiMrkAdOoHGmrOZvmITzpcANr-AeyzpR24mirURezqBLl5AB7g36eCz4vt3Q_IuswOWHPvtp-6Ht6f0JuHd7W-a3pmvWUbzBFvHzLlJjDtTiK2UwCX14Gy1Z8duLc2DSB6Ux64ccgLBd0KtkMY2aCHphfoZL2SeTqa0fyfg0Bfkb75ZdbwN_aXPxg"
            stats={{ likes: 256, comments: 82, shares: 109 }}
        />
        <Post
            avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuB-YAep8k4BbsMzgi7kB8euLb47LEUtrPkq5PI7ljfmYn3Tk6ZYX-GvxLPo30dE851QXeT-RVbLFNlOxylZeujDdsTkq2-D5b4V7-xPpK2vOwJvxeYeW_Y4iGTefa5WnlK_7d_YIe3rZ2a76MBAS3aOSPWhhwL4WTXYQhaQsU95d7cW3yjdWgRx5pkPRYQfdBonfx_9l4eWF087jQBhFBonPzg5Q5_8z81AH6Qa9TRJvFl-4pTNUQYh5lptqSI5LKHJeukz319cGQ"
            name="Rohan Verma"
            handle="@rohanverma_rti"
            time="5h"
            content="Filed an RTI regarding the municipal budget for road repairs in Bengaluru. The lack of transparency is appalling. Public funds must have public accountability. #RightToInformation #BengaluruRoads"
            stats={{ likes: 512, comments: 153, shares: 278 }}
        />
      </div>
    </div>
  );
};

export default Feed;

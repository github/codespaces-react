import React from 'react';
import Post from './Post';
import Composer from './Composer';

const samplePosts = [
  {
    author: {
      name: 'Priya Singh',
      username: 'priya_activist',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8TOtLGjiTUwhY6FsnHWqjRevfdgcgpB34ZP2jr7vUhxdKIJ0ols6VO1mZIHWqfCNkNAf2fn6zNjFkl0UOp1bRBmdSMC7In3GarYijrzQI8-ap7kRFC1hamGkILuhRTPvSoMez6w5UAXQzLoHpnD6cGyN-_cGtY5MzDEcdJk8WIIrgkuQFE36PL2C-RwlZqMr1Ds2fNACma29_w2Wjpc9AnkBlx_3fb2Fr3mRT0sK8ApP2MExfYq4hEB5ceCHvNU6w-Mo6pClTPQ',
    },
    content: 'Urgent: Need volunteers for the Juhu Beach cleanup this Sunday. Let\'s reclaim our public spaces! #CleanJuhu #MumbaiCleanUp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg37-9yDIB53Tw7UwUmakoxxZHP5z2a4RBbWeeuob99oT7apoLvcoiuzhVzr9B6vlgnXIdJRSVnsyAgn4IjAiMrkAdOoHGmrOZvmITzpcANr-AeyzpR24mirURezqBLl5AB7g36eCz4vt3Q_IuswOWHPvtp-6Ht6f0JuHd7W-a3pmvWUbzBFvHzLlJjDtTiK2UwCX14Gy1Z8duLc2DSB6Ux64ccgLBd0KtkMY2aCHphfoZL2SeTqa0fyfg0Bfkb75ZdbwN_aXPxg',
    timestamp: '2h',
    comments: 82,
    retweets: 109,
    likes: 256,
  },
  {
    author: {
      name: 'Rohan Verma',
      username: 'rohanverma_rti',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-YAep8k4BbsMzgi7kB8euLb47LEUtrPkq5PI7ljfmYn3Tk6ZYX-GvxLPo30dE851QXeT-RVbLFNlOxylZeujDdsTkq2-D5b4V7-xPpK2vOwJvxeYeW_Y4iGTefa5WnlK_7d_YIe3rZ2a76MBAS3aOSPWhhwL4WTXYQhaQsU95d7cW3yjdWgRx5pkPRYQfdBonfx_9l4eWF087jQBhFBonPzg5Q5_8z81AH6Qa9TRJvFl-4pTNUQYh5lptqSI5LKHJeukz319cGQ',
    },
    content: 'Filed an RTI regarding the municipal budget for road repairs in Bengaluru. The lack of transparency is appalling. Public funds must have public accountability. #RightToInformation #BengaluruRoads',
    timestamp: '5h',
    comments: 153,
    retweets: 278,
    likes: 512,
  },
];

const SocialFeed = () => {
  return (
    <div>
      <Composer />
      {samplePosts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default SocialFeed;

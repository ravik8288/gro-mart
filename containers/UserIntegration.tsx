import UserHighlightCard from '@/components/UserHighlightCard';
import React from 'react';
import userHighlight1 from '@/assets/UserHighlighImages/userhighlight-1.svg';
import userHighlight2 from '@/assets/UserHighlighImages/userhighlight-2.svg';

const data = [
  {
    title: 'Find your calling',
    desc: `Shop the biggest brands you know and love. Discover independent brands making waves and the creators behind them. Whatever you're into, find the item and the seller for you on Gromart.`,
    button: 'Shop Now',
    leftTextIndent: true,
    image: userHighlight1,
  },
  {
    title: 'Sell your way',
    desc: `Sell a few items or build your empire. Whatever your vibe we’ll share our pro tips to help you get there. It's simple to get started.`,
    button: 'Sell on Gromart',
    leftTextIndent: false,
    image: userHighlight2,
  },
];
function UserIntegration() {
  return (
    <div>
      {data.map((item, i) => (
        <UserHighlightCard {...item} key={`highlight-${i}`} />
      ))}
    </div>
  );
}

export default UserIntegration;

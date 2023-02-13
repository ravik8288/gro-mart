import React from 'react';
import top1 from 'assets/TopSearchImages/top-1.svg';
import top2 from 'assets/TopSearchImages/top-2.svg';
import top3 from 'assets/TopSearchImages/top-3.svg';
import top4 from 'assets/TopSearchImages/top-4.svg';
import top5 from 'assets/TopSearchImages/top-5.svg';
import top6 from 'assets/TopSearchImages/top-6.svg';

import CategoryCard from '@/components/CategoryCard';
const categoryList = [
  {
    image: top6,
    title: 'Bonnsi',
  },
  {
    image: top4,
    title: 'Monstrea',
  },

  {
    image: top3,
    title: 'Chocolate',
  },
  {
    image: top5,
    title: 'Terriuam',
  },
  {
    image: top2,
    title: 'Moss Wall',
  },
  {
    image: top1,
    title: 'Hydroponics',
  },
];
function TopSearch() {
  return (
    <section className="my-2">
      <span className="title text-base font-bold text-gray-700 block my-2">
        TopSearch
      </span>
      <div className="flex justify-start">
        {categoryList.map(({ image, title }, i) => (
          <CategoryCard
            imageClass=""
            key={`cat-${i}`}
            image={image}
            title={title}
          />
        ))}
      </div>
    </section>
  );
}

export default TopSearch;

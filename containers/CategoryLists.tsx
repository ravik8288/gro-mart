import React from 'react';
import cat1 from 'assets/CatrgoryImages/cat-1.svg';
import cat2 from 'assets/CatrgoryImages/cat-2.svg';
import cat3 from 'assets/CatrgoryImages/cat-3.svg';
import cat4 from 'assets/CatrgoryImages/cat-4.svg';

import CategoryCard from '@/components/CategoryCard';
const categoryList = [
  {
    image: cat1,
    title: 'Foods & Beverages',
  },
  {
    image: cat2,
    title: 'Flowers',
  },
  {
    image: cat3,
    title: 'Pets',
  },
  {
    image: cat4,
    title: 'Plants',
  },
];
function CategoryLists() {
  return (
    <section className="my-2">
      <span className="title text-base font-bold my-2 block text-gray-700">
        CategoryLists
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

export default CategoryLists;

import CategoryCard from '@/components/CategoryCard';
import React from 'react';
import item1 from 'assets/ProductImages/item1.svg';
import item2 from 'assets/ProductImages/item2.svg';
import item3 from 'assets/ProductImages/item3.svg';
import item4 from 'assets/ProductImages/item4.svg';
import item5 from 'assets/ProductImages/item5.svg';
import item6 from 'assets/ProductImages/item6.svg';
import item7 from 'assets/ProductImages/item7.svg';
import item8 from 'assets/ProductImages/item8.svg';
import item9 from 'assets/ProductImages/item9.svg';
import item10 from 'assets/ProductImages/item10.svg';
import item11 from 'assets/ProductImages/item11.svg';
import item12 from 'assets/ProductImages/item12.svg';

const categoryList = [
  {
    image: item1,
    title: 'A$87.00 A$47.00',
  },
  {
    image: item2,
    title: 'A$87.00 A$47.00',
  },
  {
    image: item3,
    title: 'A$87.00 A$47.00',
  },
  {
    image: item4,
    title: 'A$87.00 A$47.00',
  },
  {
    image: item5,
    title: 'A$87.00 A$47.00',
  },
  {
    image: item6,
    title: 'A$87.00 A$47.00',
  },
  {
    image: item7,
    title: 'A$87.00 A$47.00',
  },
  {
    image: item8,
    title: 'A$87.00 A$47.00',
  },
  {
    image: item9,
    title: 'A$87.00 A$47.00',
  },
  {
    image: item10,
    title: 'A$87.00 A$47.00',
  },
  {
    image: item11,
    title: 'A$87.00 A$47.00',
  },
  {
    image: item12,
    title: 'A$87.00 A$47.00',
  },
];
function BestSeller() {
  return (
    <section className="my-2">
      <span className="title text-base font-bold text-gray-700 block my-2">
        BestSeller
      </span>
      <div className=" grid  grid-cols-4 md:grid-cols-6 justify-start">
        {categoryList.map(({ image, title }, i) => (
          <CategoryCard
            imageClass=""
            key={`cat-${i}`}
            image={image}
            title={title}
            titleClass="text-sm"
          />
        ))}
      </div>
    </section>
  );
}

export default BestSeller;

import React from 'react';
import cat1 from 'assets/DomainImages/domain1.svg';
import cat2 from 'assets/DomainImages/domain2.svg';
import cat3 from 'assets/DomainImages/domain3.svg';
import cat4 from 'assets/DomainImages/domain4.svg';

import CategoryCard from '@/components/CategoryCard';
const categoryList = [
  {
    image: cat1,
    title: '@gromart.au',
  },
  {
    image: cat2,
    title: '@gromart.au',
  },
  {
    image: cat3,
    title: '@honeyflow',
  },
  {
    image: cat4,
    title: '@gromart.au',
  },
];
function OurDomains() {
  return (
    <section className="my-10">
      <div className="flex justify-start">
        {categoryList.map(({ image, title }, i) => (
          <CategoryCard
            imageClass=""
            key={`cat-${i}`}
            image={image}
            title={title}
            titleClass="font-semibold"
          />
        ))}
      </div>
    </section>
  );
}

export default OurDomains;

import React from 'react';

const categoryData = [
  { title: 'Plants' },
  { title: 'Flowers' },
  { title: 'Pets' },
  { title: 'Foods & Beverages' },
  { title: 'Gardening & Farming' },
  { title: 'Home & Living' },
  { title: 'Accessories & Gifts' },
  { title: 'Services' },
];

function CategoryList() {
  return (
    <div className="flex justify-between py-6">
      {categoryData.map(({ title }, i) => (
        <span className="" key={`catergory-${i}`}>
          {title}
        </span>
      ))}
    </div>
  );
}

export default CategoryList;

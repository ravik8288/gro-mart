import Image from 'next/image';
import React from 'react';
type CategoryCardProps = {
  image: string;
  title: string;
  imageClass?: string;
  titleClass?: string;
};

function CategoryCard({
  image,
  title,
  imageClass,
  titleClass,
}: CategoryCardProps) {
  return (
    <div className="mx-4">
      <Image className={imageClass} src={image} alt={image} />
      <span className={`capitalize text-center block my-2 ${titleClass}`}>
        {title}
      </span>
    </div>
  );
}

export default CategoryCard;

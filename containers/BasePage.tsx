import React from 'react';
import leftImage from 'assets/main-page.svg';
import Image from 'next/image';
import Button from '@/components/Button';

function BasePage() {
  return (
    <div className="w-full flex py-8">
      <div className="w-1/2 flex justify-center flex-col ">
        <span className="text-x-large font-bold my-2">
          <span className="block">The Marketplace</span>
          <span className="block">for all things</span>
          <span className="block">Nature</span>
        </span>
        <span className="text-large block my-3 font-custom-bold">
          The Largest online community for Nature
        </span>
        <Button className="button my-3">Browse Nature</Button>
      </div>
      <div className="w-1/2">
        <Image src={leftImage} alt="left-image" />
      </div>
    </div>
  );
}

export default BasePage;

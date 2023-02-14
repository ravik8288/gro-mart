import Image from 'next/image';
import React from 'react';
import Button from './Button';
type HighlightCardProps = {
  title: string;
  desc: string;
  button: string;
  leftTextIndent: boolean;
  image: string;
};
function UserHighlightCard(props: HighlightCardProps) {
  return (
    <div
      className={`flex py-10 ${
        !props.leftTextIndent ? 'flex-row-reverse' : ''
      }`}
    >
      <div className="w-50">
        <Image
          className={`w-3/4 ${!props.leftTextIndent ? 'ml-auto' : 'mr-auto'}`}
          src={props.image}
          alt={'highlighter'}
        />
      </div>
      <div className="flex flex-col justify-center w-1/2">
        <span className="py-2 text-3xl text-gray-600 font-bold block">
          {props.title}
        </span>
        <span className="py-2 text-base text-gray-600 block">{props.desc}</span>
        <Button className="button text-xl py-2 my-3">{props.button}</Button>
      </div>
    </div>
  );
}

export default UserHighlightCard;

import React from "react";
import Image from "next/image";

type Item = {
  image: string;
  title: string;
  description: string;
  updated: string;
};

export default function Item({ image, title, description, updated }: Item) {
  return (
    <div className=" bg-white mx-5 my-2 max-h-6/12 w-50">
      <div>
        <Image src={image} alt="" height={30} width={30} className="mx-auto py-4" />
        {/* <p className=" btn-inactive text-xs text-center pt-3">{icon}</p> */}
        <h3 className=" text-[var(--black)] text-sm font-bold text-center py-3">
          {title}
        </h3>
        <p className=" text-[var(--secondary-text-color)] text-xs text-center py-3 pb-4">
          {description}
        </p>
      </div>

      <div className=" flex justify-between shadow-inherit border border-stone-100 h-full w-full p-2">
        <div>
          <p className="paragraph ml-4">updated 2 hr ago</p>
        </div>
        <div>
          <p className="paragraph mr-4">updated 2 hr aago</p>
        </div>
      </div>
    </div>
  );
}

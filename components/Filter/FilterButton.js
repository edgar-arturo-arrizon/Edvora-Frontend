import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FilterButton = () => {
  return (
    <div className="w-[168px] bg-edvora-greyCard mt-11 text-edvora-greyFont">
      <button className="flex justify-between w-full h-[37.5px]  ">
        <span className="bg-rose-500 h-full ">product</span>
        <span className="bg-green-500 h-full">Icon</span>
      </button>
    </div>
  )
}

export default FilterButton;

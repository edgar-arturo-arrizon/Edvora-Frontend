import React, { useState } from 'react';
import DropDownBtnWithCard from './DropDownBtnWithCard';

const FilterContainer = ({ products, states, cities, productFilter, setProductFilter, stateFilter, setStateFilter, cityFilter, setCityFilter, handleProductFilter  }) => {

  return (
    <div className="flex-row bg-edvora-black lg:min-h-[275px] lg:max-h-[300px] w-[228px] md:mx-10 mt-11 rounded-2xl">
      <p className="pt-6 pl-7  top-[8.72%] left-[12.2%] right-[91.22%] bottom-[88.15%] text-[22px] text-edvora-greyFont leading-6 ">Filters
      </p>
      <hr className="relative top-3 left-6 text-edvora-hr w-[160px]"></hr>
      <div className="flex-row flex-wrap space-y-4">
        <DropDownBtnWithCard data={products} name={'Product'} filter={productFilter} setFilter={setProductFilter} />
        <DropDownBtnWithCard data={states} name={'State'} filter={stateFilter} setFilter={setStateFilter} />
        <DropDownBtnWithCard data={cities} name={'City'} filter={cityFilter} setFilter={setCityFilter}  />
      </div>
    </div>
  )
}

export default FilterContainer;

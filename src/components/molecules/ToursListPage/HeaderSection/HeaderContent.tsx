import React from 'react';
import { HeaderTitle } from '../../../atoms/ToursListPage/HeaderSection/HeaderTitle';
import { HeaderSubtitle } from '../../../atoms/ToursListPage/HeaderSection/HeaderSubtitle';

export const HeaderContent = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <HeaderTitle>Explore The Worlds</HeaderTitle>
      <HeaderSubtitle>People Don’t Take, Trips People</HeaderSubtitle>
    </div>
  );
};
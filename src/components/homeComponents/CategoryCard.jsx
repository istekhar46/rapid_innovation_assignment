import React from "react";
import styled from "styled-components";

const GridBlocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  h6 {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

const CategoryCard = ({ svg, title, subtitle }) => {
  return (
    <GridBlocks>
      <figure>
        {svg}
      </figure>
      <h4>{title}</h4>
      <h6>{subtitle}</h6>
    </GridBlocks>
  );
};

export default CategoryCard;

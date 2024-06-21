import styled, { css }from 'styled-components';
import CategoryCard from './CategoryCard';
import categoryData from '../../utils/categoryData';
import { useSelector } from "react-redux";

const CategoryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 4rem 12rem;
  gap: 3rem;
  background-image: linear-gradient(
    90deg,
    hsl(240deg 4% 84%) 0%,
    hsl(239deg 4% 84%) 12%,
    hsl(238deg 4% 84%) 22%,
    hsl(238deg 4% 84%) 31%,
    hsl(237deg 4% 84%) 38%,
    hsl(236deg 4% 84%) 44%,
    hsl(236deg 4% 84%) 49%,
    hsl(235deg 4% 83%) 53%,
    hsl(234deg 4% 83%) 56%,
    hsl(234deg 5% 83%) 58%,
    hsl(233deg 5% 83%) 61%,
    hsl(232deg 5% 83%) 63%,
    hsl(232deg 5% 83%) 66%,
    hsl(231deg 5% 83%) 69%,
    hsl(231deg 5% 83%) 72%,
    hsl(230deg 5% 83%) 77%,
    hsl(230deg 5% 82%) 81%,
    hsl(229deg 5% 82%) 87%,
    hsl(229deg 5% 82%) 93%,
    hsl(228deg 5% 82%) 100%
  );
  ${(props) => props.theme === "light" && css`
    background-image: none;
    background-color: #FFDFA;
    `
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Category = () => {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <CategoryContainer theme={theme}>
      {categoryData.map((item) => (
        <CategoryCard key={item.id} title={item.title} subtitle={item.subtitle} svg={item.svg} />
      ))}
    </CategoryContainer>
  );
};

export default Category;

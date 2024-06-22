import styled, { css } from 'styled-components';
import ServiceCards from './SeviceCards';
import serviceData from '../../utils/services'; 
import { useSelector } from "react-redux";


const ServicesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 3fr));
  gap: 3rem;
  padding: 4rem 12rem;
  background: #202124a1;
  ${(props) => props.theme === "light" && css`
    background: #FFFDFA;
    `}

  

  @media (max-width: 768px) {
    display: flex;
    overflow-x: scroll;
    padding: 4rem 2rem;
    gap: 2rem;
  }
`;

const Services = () => {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <ServicesContainer theme={theme}>
      {serviceData.map((service) => (
        <ServiceCards key={service.id} data={service} />
      ))}
    </ServicesContainer>
  );
};

export default Services;

import styled from 'styled-components';

const ServiceCardContainer = styled.div`
  position: relative;
  .card-image {
    width: 100%;
  }
  h3 {
    font-size: 2.4rem;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    color: #24211D;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    flex: 0 0 calc(100% - 10rem);
  }
`;

const ServiceCards = ({ data }) => {
  return (
    <ServiceCardContainer>
      <figure>
        <img src={data.imageSrc} alt={data.title} style={{"width":"100%"}}/>
      </figure>
      <h3>{data.title}</h3>
    </ServiceCardContainer>
  );
};

export default ServiceCards;

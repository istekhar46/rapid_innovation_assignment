import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import heroImage from "../../assets/hero-img.svg";


const Section = styled.section`
  background: linear-gradient(
    35deg,
    rgb(6, 0, 151) 0%,
    rgb(130, 4, 255) 73%,
    rgb(193, 15, 255) 100%
  );
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: 8rem 12rem;
  color: #fffdfa;

  ${(props) =>
    props.theme === "light" &&
    css`
      background-image: linear-gradient(
        90deg,
        hsl(240deg 82% 81%) 0%,
        hsl(238deg 82% 82%) 25%,
        hsl(235deg 82% 83%) 39%,
        hsl(231deg 82% 85%) 50%,
        hsl(227deg 82% 86%) 60%,
        hsl(222deg 82% 87%) 70%,
        hsl(215deg 81% 88%) 79%,
        hsl(207deg 81% 89%) 89%,
        hsl(196deg 80% 90%) 100%
      );
    `}

  @media (max-width: 768px) {
    padding: 8rem 2rem;
    grid-template-columns: 1fr;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;

  @media (max-width: 635px) {
    gap: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 400;
  color: ${(props) => (props.theme === "light" ? "#24211D" : "#fffdfa")};

  @media (max-width: 635px) {
    font-size: 4rem;
    margin-top: 2rem;
  }
`;

const Subtitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 300;
  color: ${(props) => (props.theme === "light" ? "#24211D" : "#fffdfa")};

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Button = styled.button`
  background-color: #f3b412;
  border: none;
  padding: 2rem 3rem;
  border-radius: 3rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0a20c;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    border-radius: 3rem;
    font-size: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem 0 0 0;

  @media (max-width: 768px) {
    order: -1;
    padding: 2rem 0 0 0;
  }
`;

const HeroImage = styled.img
`
  width: 100%;
  max-width: 40rem;
`;

const Hero = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <Section theme={theme} className="gradient">
      <TextContainer>
        <Title theme={theme}>Your Idea Matters!</Title>
        <Subtitle theme={theme}>
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
          Necessitatibus
        </Subtitle>
        <Button>Make a Website</Button>
      </TextContainer>
      <ImageContainer>
        <figure>
            <HeroImage src={heroImage} alt="" />
        </figure>
      </ImageContainer>
    </Section>
  );
};

export default Hero;

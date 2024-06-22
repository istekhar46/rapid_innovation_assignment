import styled, { css } from "styled-components";

const StyledPopup = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #24211d6e;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1px);
  z-index: 4;

  ${(props) =>
    props.theme === "light" &&
    css`
      color: #fffdfa;
    `}
`;

const PopupWrapper = styled.div`
  width: 80%;
  background: #24211d;
  border-radius: 0.5rem;
  overflow: hidden;

  ${(props) =>
    props.theme === "light" &&
    css`
      background: #fffdfa;
      color: #24211d;
    `}
    @media (max-width: 768px) {
        width: 90%;
       }
`;

const ProfileBannerImgContainer = styled.div`
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 24rem;
  padding: 2rem;
  margin-bottom: 10rem;

  ${(props) =>
    props.theme === "light" &&
    css`
      background-color: #fffdfa;
      color: #24211d;
    `}
    @media (max-width: 768px) {
        height: 14rem;
        margin-bottom: 3rem;
       }
`;

const ProfileImage = styled.img`
  width: 20rem;
  aspect-ratio: 1;
  border-radius: 50%;
  margin-bottom: -30rem;

  @media (max-width: 768px) {
    width: 10rem;
    margin-bottom: -15rem;
}
`;

const DetailsContainer = styled.div`
  padding: 2rem;
  color: #fffdfa;

  ${(props) =>
    props.theme === "light" &&
    css`
      color: #24211d;
    `}
`;

const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: 400;

    @media (max-width: 768px) {
     font-size: 2.4rem;
    }
`;


const Text = styled.p`
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
   }
`;

const ButtonContainer = styled.div`
  padding: 0 2rem 2rem;
`;

const CloseButton = styled.button`
  background-color: #fdfdfde6;
  color: #24211d;
  border: none;
  padding: 1rem 1.5rem;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-top: 1rem;

  ${(props) =>
    props.theme === "light" &&
    css`
      background-color: #24211d;
      color: #fffdfa;
    `}
    @media (max-width: 768px) {
        font-size: 1.4rem;
        padding: 0.75rem 1rem;
        margin-top: 0;
       }
`;

const PopupContainer = ({ formData, profileImageUrl, bannerImageUrl, handleClosePopup, theme }) => {
  const { name, email, address, dob, bio } = formData;

  return (
    <StyledPopup className="Popup" theme={theme}>
      <PopupWrapper className="popup-wrapper" theme={theme}>
        <ProfileBannerImgContainer style={{ backgroundImage: `url(${bannerImageUrl})` }} theme={theme}>
          <ProfileImage src={profileImageUrl} alt="Profile" />
        </ProfileBannerImgContainer>
        <DetailsContainer className="details-container" theme={theme}>
          <Title>Name: {name}</Title>
          <Text>Email: {email}</Text>
          <Text>Address: {address}</Text>
          <Text>Date of Birth: {dob}</Text>
          <Text>Bio: {bio}</Text>
        </DetailsContainer>
        <ButtonContainer className="button-container">
          <CloseButton onClick={handleClosePopup} theme={theme}>Close</CloseButton>
        </ButtonContainer>
      </PopupWrapper>
    </StyledPopup>
  );
};

export default PopupContainer;

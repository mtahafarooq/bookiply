import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
`

export const BackGroundImage = styled.div.attrs(props => ({
  backgroundImage: props.backgroundImage
}))`
  background-image: linear-gradient(180deg, rgba(23,55,83,0.1) 0%, rgba(4,21,35,0.87) 100%), url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 50% 100%, 0 90%);
  height: 535px;
  margin: 0 auto;
  width: 1444px;
`
export const ContentContainer = styled.div`
  color: #FFFFFF;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 55px;
  width: 962px;
  
  .propertyId {
    font-family: 'SF Pro Display Medium';
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 22px;
    margin-bottom: 14px;
  }
  
  .propertyName {
    font-family: "SF Pro Display Semibold";
    font-size: 32px;
    margin-bottom: 63px;
    line-height: 22px;
  }
`

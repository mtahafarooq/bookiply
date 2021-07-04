import React, { FC } from 'react';
import { ContentContainer, BackGroundImage, MainContainer } from "./styles";
import img from 'assets/images/background.png'
import ReviewsContainer from "./containers/reviews-container";

const Reviews: FC<any> = () => {

  return (
    <MainContainer>
      <BackGroundImage backgroundImage={img} />
      <ContentContainer>
        <div className={'propertyId'}>ID: 091021</div>
        <div className={'propertyName'}>La Casa de las Flores</div>
        <ReviewsContainer />
      </ContentContainer>
    </MainContainer>
  );
}

export default Reviews;

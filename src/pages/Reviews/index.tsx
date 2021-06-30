import React, { FC } from 'react';
import { ContentContainer, BackGroundImage, MainContainer } from "./styles";
import ReviewsList from 'pages/Reviews/containers/reviews-list';
import img from 'assets/images/background.png'

const Reviews: FC<any> = () => {

  return (
    <MainContainer>
      <BackGroundImage backgroundImage={img} />
      <ContentContainer>
        <div className={'propertyId'}>ID: 091021</div>
        <div className={'propertyName'}>La Casa de las Flores</div>
        <ReviewsList />
      </ContentContainer>
    </MainContainer>
  );
}

export default Reviews;

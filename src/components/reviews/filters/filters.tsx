import { FC, memo, useState, useEffect } from "react";
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { ReviewFilters } from "models/interfaces/review-filters";
import { MainContainer } from './styles';

interface FiltersProps {
  fetchReviews: (filters?: ReviewFilters) => void;
  page: number;
}

const options = [
  { name: 'Airbnb', value: ReviewFilters.ChannelFilterEnum.Airbnb },
  { name: 'Booking.com', value: ReviewFilters.ChannelFilterEnum.BookingCom },
  { name: 'Holidu', value: ReviewFilters.ChannelFilterEnum.Holidu },
]

const Filters: FC<FiltersProps> = ({ fetchReviews, page }) => {

  const [ score, setScore ] = useState(0.0);
  const [ channels, setChannels ] = useState([]);
  const [ sliderScore, setSliderScore ] = useState(0.0);

  useEffect(() => {
      const filters: ReviewFilters = {
        _page: [ page ]
      }

      if (channels.length > 0) {
        filters['channel'] = channels
      }

      if (score > 0) {
        filters['score'] = [score]
      }

      fetchReviews(filters);

  }, [ channels, score, fetchReviews, page ])

  return (
    <MainContainer>
      <MultiSelect
        display="chip"
        placeholder="Select Channel"
        optionLabel="name"
        value={ channels }
        options={ options }
        onChange={event => setChannels(event.value) }
      />

      <div className='sliderContainer'>
        <span className={'scoreLabel'}>Score: { sliderScore }</span>
        <Slider
          value={ sliderScore }
          min={ 0 }
          max={ 5 }
          onSlideEnd={event => setScore((Number(event.value))) }
          onChange={ event => setSliderScore(Number(event.value)) }
          style={{ width: 162 }}
          step={ 0.1 }
        />
      </div>
    </MainContainer>
  );
}

export default memo(Filters);

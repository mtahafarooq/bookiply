export interface ReviewFilters {
  channel?: ReviewFilters.ChannelFilterEnum[];
  score?: number[];
  _page?: number[];
}

export namespace ReviewFilters {
  export type ChannelFilterEnum = 'AIRBNB' | 'BOOKINGCOM' | 'HOLIDU';
  export const ChannelFilterEnum = {
    Airbnb: 'AIRBNB' as ChannelFilterEnum,
    BookingCom: 'BOOKINGCOM' as ChannelFilterEnum,
    Holidu: 'HOLIDU' as ChannelFilterEnum,
  }
}

export default ReviewFilters.ChannelFilterEnum;

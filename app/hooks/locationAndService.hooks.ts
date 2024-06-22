import {useContext} from 'react'

import {LocationAndServiceContext} from '../contexts/location-and-service/LocationAndService.context';

export const useLocationAndService = () => {
  return useContext(LocationAndServiceContext);
};
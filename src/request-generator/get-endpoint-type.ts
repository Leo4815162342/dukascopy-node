import { HistoryConfig } from '../config/types';

import { EndpointType } from './types';

function getEndpointType(timeframe: HistoryConfig['timeframe']): EndpointType {
  if (timeframe === 'tick') {
    return 'tick';
  } else if (timeframe === 'm1' || timeframe === 'm30') {
    return 'min';
  } else {
    return 'hour';
  }
}

export default getEndpointType;

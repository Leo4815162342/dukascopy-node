import { ProcessDataInput, ProcessDataOutput } from './types';
declare function processData({ instrument, requestedTimeframe, bufferObjects, priceType, volumes, ignoreFlats }: ProcessDataInput): ProcessDataOutput;
export { processData };

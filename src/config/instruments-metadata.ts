import metaData from '../utils/instrument-meta-data/generated/instrument-meta-data.json';
import { InstrumentMetaData } from '../utils/instrument-meta-data/generate-meta';
import { InstrumentType } from '../utils/instrument-meta-data/generated/instrument-enum';

export const instrumentMetaData: Record<InstrumentType, InstrumentMetaData> = metaData;

// import { HistoryConfig } from '../config/types';
// import { instruments } from '../config/instruments';

// import { getStarOfUtc, getUTCDateFromString } from './../utils/date';

// function normalizeDates(
//   instrument: HistoryConfig['instrument'],
//   from: HistoryConfig['dates']['from'],
//   to: HistoryConfig['dates']['to'],
//   timeframe: HistoryConfig['timeframe'],
//   utcOffset: HistoryConfig['utcOffset']
// ): [Date, Date] {
//   const [parsedFromDate, parsedToDate] = [from, to]
//     .map(d => getUTCDateFromString(d) || new Date())
//     .sort((a, b) => +a - +b);

//   const minFromDate = new Date(instruments[instrument].minStartDate);

//   const maxToDate = new Date();

//   // TODO: use min max
//   // TODO: maxToDate = getStarOfUtc(toLimit, getDateRange(timeframe), -1);

//   // let adjustedFromDate = adjustDate(parsedFromDate, minFromDate, maxToDate, timeframe, utcOffset);
//   // let adjustedToDate = adjustDate(parsedToDate, minFromDate, maxToDate, timeframe, utcOffset);

//   return [adjustedFromDate, adjustedToDate];
// }

// export { normalizeDates };

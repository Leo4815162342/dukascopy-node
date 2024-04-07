import { getHistoricalRates } from './getHistoricalRates';

const printMemory = () => {
  const formatMemoryUsage = (data: number) => `${Math.round((data / 1024 / 1024) * 100) / 100} MB`;

  const memoryData = process.memoryUsage();

  const memoryUsage = {
    rss: `${formatMemoryUsage(memoryData.rss)} -> Resident Set Size - total memory allocated for the process execution`,
    heapTotal: `${formatMemoryUsage(memoryData.heapTotal)} -> total size of the allocated heap`,
    heapUsed: `${formatMemoryUsage(memoryData.heapUsed)} -> actual memory used during the execution`,
    external: `${formatMemoryUsage(memoryData.external)} -> V8 external memory`
  };

  console.log(memoryUsage);
};

(async () => {
  try {
    printMemory();

    const data = await getHistoricalRates({
      instrument: 'eurusd',
      dates: {
        from: new Date('2021-02-01'),
        to: new Date('2021-02-03')
      },
      timeframe: 'm1',
      format: 'csv'
    });

    process.stdout.write(data);

    printMemory();
  } catch (error) {
    console.log('error', error);
  }
})();

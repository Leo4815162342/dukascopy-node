function pad(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

function roundNum(value: number, decimal = 4): number {
  return Number(value.toFixed(decimal));
}

function splitArrayInChunks<T>(array: T[], chunkSize: number): T[][] {
  if (chunkSize >= array.length) {
    return [array];
  }

  let result = [];

  for (let i = 0, n = array.length; i < n; i++) {
    const chunkIndex = Math.floor(i / chunkSize);
    if (!result[chunkIndex]) {
      result[chunkIndex] = [] as T[];
    }

    result[chunkIndex].push(array[i]);
  }

  return result;
}

function wait(ms: number): Promise<void> {
  return new Promise(res => {
    setTimeout(function () {
      res();
    }, ms);
  });
}

export { pad, roundNum, splitArrayInChunks, wait };

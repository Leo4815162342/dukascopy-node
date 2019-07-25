function pad(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

function roundNum(value: number, decimal = 4): number {
  return Number(value.toFixed(decimal));
}

function splitArrayInChunks<T>(array: T[], chunkSize: number): T[][] {
  // TODO: check if we really need this case

  // chunkSize >= array.length ?????

  if (chunkSize === 1) {
    return [array];
  }

  let result = [];

  for (let i = 0, n = array.length; i < n; i++) {
    const chunkIndex = Math.floor(i / chunkSize);
    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }

    result[chunkIndex].push(array[i]);
  }

  return result;
}

function wait(ms: number) {
  return new Promise(res => {
    setTimeout(function() {
      res();
    }, ms);
  });
}

export { pad, roundNum, splitArrayInChunks, wait };

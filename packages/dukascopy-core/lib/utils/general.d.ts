declare function pad(num: number): string;
declare function roundNum(value: number, decimal?: number): number;
declare function splitArrayInChunks<T>(array: T[], chunkSize: number): T[][];
declare function wait(ms: number): Promise<any>;
export { pad, roundNum, splitArrayInChunks, wait };

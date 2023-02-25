export function formatTimeDuration(durationMs: number) {
  if (durationMs < 1000) {
    return `${durationMs}ms`;
  } else if (durationMs < 60000) {
    return `${(durationMs / 1000).toFixed(1)}s`;
  } else if (durationMs < 3600000) {
    const min = Math.floor(durationMs / 60000);
    const sec = Math.floor((durationMs - min * 60000) / 1000);
    return `${min}m ${sec}s`;
  } else {
    const hours = Math.floor(durationMs / 3600000);
    const min = Math.floor((durationMs - hours * 3600000) / 60000);
    const sec = Math.floor((durationMs - hours * 3600000 - min * 60000) / 1000);
    return `${hours}h ${min}m ${sec}s`;
  }
}

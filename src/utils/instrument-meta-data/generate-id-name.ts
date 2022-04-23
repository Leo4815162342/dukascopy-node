export function generateIdName(historicalName: string, key: string): string {
  return (historicalName || key.replace(/\W/g, '')).toLowerCase();
}

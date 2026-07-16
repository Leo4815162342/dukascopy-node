export function generateIdName(historicalName: string, key: string): string {
  return (historicalName || key).replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

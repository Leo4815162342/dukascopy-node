export function getSafeVal(func: () => string): string {
  let val = '';

  try {
    val = func();
  } catch (err) {
    val = '';
  }

  return val;
}

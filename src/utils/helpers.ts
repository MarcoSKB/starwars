export const arrayRangeNumber = (min: number, max: number) =>
  Array.from({ length: max - min + 1 }, (_, i) => min + i)

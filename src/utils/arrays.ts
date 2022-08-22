export const areArraysEqual = (arr1: number[], arr2: number[]): boolean => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

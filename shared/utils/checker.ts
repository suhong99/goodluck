export function isValidPattern(value: string, reg: RegExp) {
  return reg.test(value);
}

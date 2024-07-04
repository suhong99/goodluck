export const isValidPattern = (value: string, reg: RegExp) => {
  return reg.test(value);
};

export const checkSuccess = (percent: number) => {
  const random = Math.random();
  const isSuccess = random * 100 < Number(percent) ? true : false;
  return isSuccess;
};

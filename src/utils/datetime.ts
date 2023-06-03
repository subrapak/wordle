export const getTodaysDateCode = () => {
  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const todaysDateCode = `${date}-${month}-${year}`;
  return todaysDateCode;
};

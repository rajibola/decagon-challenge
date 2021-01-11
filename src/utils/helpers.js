export const handleDate = (date) => {
  const newDate = new Date(date);
  return newDate.toDateString();
};

export const getTime = (date) => {
  const time = new Date(date);
  return `${time.getHours()} : ${time.getMinutes()}`;
};

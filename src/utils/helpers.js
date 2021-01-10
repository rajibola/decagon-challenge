export const handleDate = (date) => {
  const newDate = new Date(date);
  return newDate.toDateString();
};

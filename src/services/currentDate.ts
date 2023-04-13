export const getTodayDate = () => {
  let months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  let newDate = new Date();
  let currentDate = newDate.getDate();
  let currentDay = days[newDate.getDay()];
  let currentMonth = months[newDate.getMonth()];
  return {
    currentDate,
    currentDay,
    currentMonth,
  };
};

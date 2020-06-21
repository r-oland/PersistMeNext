export const today = () => {
  const todayDate = new Date().getDay();
  const weekday = new Array(7);
  weekday[0] = "sunday";
  weekday[1] = "monday";
  weekday[2] = "tuesday";
  weekday[3] = "wednesday";
  weekday[4] = "thursday";
  weekday[5] = "friday";
  weekday[6] = "saturday";

  return weekday[todayDate];
};

export const weekNumber = () => {
  Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    var today = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    var dayOfYear = (today - onejan + 1) / 86400000;
    return Math.ceil(dayOfYear / 7);
  };

  return new Date().getWeek();
};

export const year = () => {
  const todayDate = new Date();
  return todayDate.getFullYear();
};

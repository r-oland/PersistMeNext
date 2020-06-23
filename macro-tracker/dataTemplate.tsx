const dayTemplate = {
  dayType: "unset",
};

export const dataTemplate = (week: number) => {
  return {
    week,
    monday: dayTemplate,
    tuesday: dayTemplate,
    wednesday: dayTemplate,
    thursday: dayTemplate,
    friday: dayTemplate,
    saturday: dayTemplate,
    sunday: dayTemplate,
  };
};

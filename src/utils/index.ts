const DAY_IN_MS = 864e5;

// TODO: Your utility/helper functions could go here

export function dayOfYear(date = new Date): number {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const then = noon(year, month, day).getTime();
  const first = noon(year, 0, 0).getTime();

  return Math.round((then - first) / DAY_IN_MS);
};

function noon(year: number, month: number, day: number) {
  return new Date(year, month, day, 12, 0, 0);
}

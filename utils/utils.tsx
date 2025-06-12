export const formatedDate = (date: Readonly<string> = "") => {
  if (!date) return 'invalid date'
  const isoDate = new Date(date)
  const format = isoDate.toLocaleString("en-US", {
    // weekday: "short",
    year: "numeric",
    month: "short",
    day: 'numeric',
    // dayPeriod: "short"
    // hour: 'numeric',
    // minute: 'numeric',
    // second: 'numeric'
  })
  return format
}
/**
 * Returns a string with the month and year of a date object
 * @param dateObject Date Object
 * @param language
 * @returns a string with the month and year of a date object
 */

const es_ES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const en_EN = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

function monthYearString(dateObject: Date, language: "es_ES" | "en_EN"): string {
  const monthsNames = language === "es_ES" ? es_ES : en_EN;
  return `${monthsNames[dateObject.getMonth()]} ${dateObject.getFullYear()}`;
}

export default monthYearString;

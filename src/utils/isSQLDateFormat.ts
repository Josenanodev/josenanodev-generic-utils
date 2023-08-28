/**
 * Validates if a string is a valid SQL date format
 * @param dateString string to validate 
 * @returns a boolean
 */
function isSQLDateFormat(dateString: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(dateString)
}

export default isSQLDateFormat
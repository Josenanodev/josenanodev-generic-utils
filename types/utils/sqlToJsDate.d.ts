/**
 * Convert a sql date format to a js date format. For invalid SQL date format throws an error
 * @param sqlDate sql date format, for example 1993-03-29
 * @returns Date Object
 */
declare function sqlToJsDate(sqlDate: string): Date;
export default sqlToJsDate;

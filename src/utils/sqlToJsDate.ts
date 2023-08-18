/**
 * Convert a sql date format to a js date format
 * @param sqlDate sql date format, for example 1993-03-29
 * @returns Date Object
 */

function sqlToJsDate(sqlDate: string) {
  let dateArray = sqlDate.split("-");
  //Es necesario restar 1 al mes ya que el mes de Enero comienza con el valor 0
  let jsDate = new Date(
    Number(dateArray[0]),
    Number(dateArray[1]) - 1,
    Number(dateArray[2])
  );
  return jsDate;
}
export default sqlToJsDate;

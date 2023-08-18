/**
 * Converts a Date Object to a string of sql date format
 * @param jsDate Date Object
 * @returns string of sql date format, for example 1993-03-29
 */

function jsToSqlDate(jsDate: Date): string {
  const islowerThanTen = (numero: number) => {
    return Number(numero) < 10 ? "-0" : "-";
  };
  let sqlDate = jsDate
    .getFullYear()
    .toString()
    .concat(
      islowerThanTen(jsDate.getMonth() + 1),
      (jsDate.getMonth() + 1)
        .toString()
        .concat(islowerThanTen(jsDate.getDate()), jsDate.getDate().toString())
    );
  return sqlDate;
}

export default jsToSqlDate;

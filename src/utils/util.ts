import { access } from "fs";

/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== "number" && value === "") {
    return true;
  } else if (typeof value === "undefined" || value === undefined) {
    return true;
  } else if (
    value !== null &&
    typeof value === "object" &&
    !Object.keys(value).length
  ) {
    return true;
  } else {
    return false;
  }
};

const objectValueArrayToJson = (object: any) => {
  return Object.keys(object).reduce(
    (acc: any, key: string) =>
      Object.assign({
        ...acc,
        [key]: Array.isArray(object[key])
          ? JSON.stringify(object[key])
          : object[key],
      }),
    {}
  );
};

export const elementsAsArrayToJson = (array: any[]) => {
  return array.map((elem) => objectValueArrayToJson(elem));
};

//*============ Problem 1 ============*//

function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

// console.log(multiplyValue(10, 5));

//*============ Problem 2 ============*//

type InputValue = string | number | boolean;

function processInput(value: InputValue): string | number {
  if (typeof value === "string") {
    const result = value.toLowerCase().trim();
    return result;
  } else if (typeof value === "number") {
    const result = value * 10;
    return Number(result);
  } else if (value === true) {
    return "Active";
  } else {
    return "Inactive";
  }
}

// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));

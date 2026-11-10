//*============ Problem 1 ============*//

function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

// console.log(multiplyValue(10, 5));

//*============ Problem 2 ============*//

type InputValue = string | number | boolean;

function processInput(value: InputValue): string | number {
  if (typeof value === "string") {
    return value.toLowerCase().trim();
  } else if (typeof value === "number") {
    return Number(value * 10);
  } else {
    return value ? "Active" : "Inactive";
  }
}

// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));

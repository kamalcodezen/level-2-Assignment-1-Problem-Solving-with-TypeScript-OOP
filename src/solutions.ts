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

//*============ Problem 3 ============*//

type Coordinate = readonly [number, number, string];

function formatCoordinate(value: Coordinate): string {
  const latitude = value[0];
  const longitude = value[1];
  const locationName = value[2];

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

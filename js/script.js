const inputA = document.querySelector("#inputA");
const inputB = document.querySelector("#inputB");
const calculateButton = document.querySelector("#calculate");

calculateButton.addEventListener("click", function() {
  const a = parseFloat(inputA.value);
  const b = parseFloat(inputB.value);

  const sum = a + b;
  const subtractionA = a - b;
  const subtractionB = b - a;
  const divisionA = a / b;
  const divisionB = b / a;
  const multiplication = a * b;
  const powerA = Math.pow(a, b);
  const powerB = Math.pow(b, a);
  const sqrtA = Math.sqrt(a);
  const sqrtB = Math.sqrt(b);
  const factorialA = factorial(a);
  const factorialB = factorial(b);
  const percentageA = (a / b) * 100;
  const percentageB = (b / a) * 100;
  const average = (a + b) / 2;

  document.querySelector("#sum").textContent = "Sum: " + sum;
  document.querySelector("#subtractionA").textContent = "Subtraction (A - B): " + subtractionA;
  document.querySelector("#subtractionB").textContent = "Subtraction (B - A): " + subtractionB;
  document.querySelector("#divisionA").textContent = "Division (A / B): " + divisionA;
  document.querySelector("#divisionB").textContent = "Division (B / A): " + divisionB;
  document.querySelector("#multiplication").textContent = "Multiplication: " + multiplication;
  document.querySelector("#powerA").textContent = "Power (A^B): " + powerA;
  document.querySelector("#powerB").textContent = "Power (B^A): " + powerB;
  document.querySelector("#sqrtA").textContent = "Square Root (√A): " + sqrtA;
  document.querySelector("#sqrtB").textContent = "Square Root (√B): " + sqrtB;
  document.querySelector("#factorialA").textContent = "Factorial (A!): " + factorialA;
  document.querySelector("#factorialB").textContent = "Factorial (B!): " + factorialB;
  document.querySelector("#percentageA").textContent = "Percentage (A% of B): " + percentageA + "%";
  document.querySelector("#percentageB").textContent = "Percentage (B% of A): " + percentageB + "%";
  document.querySelector("#average").textContent = "Average: " + average;
});

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
document.getElementById("budgetForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const initialBudget = parseFloat(
    document.getElementById("initialBudget").value
  );
  const years = parseInt(document.getElementById("years").value);
  const inflationRate =
    parseFloat(document.getElementById("inflationRate").value) / 100;

  let finalBudget = initialBudget;
  let totalBudget = 0;

  for (let i = 0; i < years; i++) {
    finalBudget *= 1 + inflationRate;
    totalBudget += finalBudget;
  }

  const totalBudgetFormatted = totalBudget.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

  document.getElementById(
    "result"
  ).innerHTML = `Total budget after ${years} weeks: ${totalBudgetFormatted}`;
});

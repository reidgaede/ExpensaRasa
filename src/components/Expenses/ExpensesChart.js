/* Data Flow ("Expense Chart" Branch of Component Tree): `<ChartBar />` -> `<Chart />` 
-> `<ExpensesChart />` -> `<Expenses />` -> `<App />` -> "index.js" -> "index.html" */

import Chart from "../Chart/Chart";

/* Initializing `ExpensesChart()` function, which builds `<ExpensesChart />` component; 
note passage of "props" as function parameter, which allows function/component to make 
use of "filteredExpenses" array passed as value of `expenses` prop in `<ExpensesChart />` 
invocation in "Expenses.js": */
const ExpensesChart = (props) => {

    /* Initializing "chartDataPoints" array, which contains 12 JavaScript objects - each 
    representing one month of year - that will each ultimately contain summed value of 
    expenses incurred in that month for user's selected "filter year": */
    const chartDataPoints = [
        {label: "Jan", value: 0},
        {label: "Feb", value: 0},
        {label: "Mar", value: 0},
        {label: "Apr", value: 0},
        {label: "May", value: 0},
        {label: "Jun", value: 0},
        {label: "Jul", value: 0},
        {label: "Aug", value: 0},
        {label: "Sep", value: 0},
        {label: "Oct", value: 0},
        {label: "Nov", value: 0},
        {label: "Dec", value: 0},
    ];

    /* For each expense in "filteredExpenses" array passed to "ExpensesChart.js" as 
    `props.expenses`, store month (as numeric value (i.e., January represented as 0; 
    February represented as 1; March represented as 2; April represented as 3; etc.)) of 
    expense's incurring in "expenseMonth" variable. Then, using numeric value contained 
    in "expenseMonth" as index value, index "chartDataPoints" array and add said "expense" 
    object's value for `amount` property to value contained in `value` property for that 
    month in "chartDataPoints" array: */
    for(const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    /* Render one `<Chart />` component; use `dataPoints` prop within said `<Chart />` 
    component to ensure that "chartDataPoints" array within "ExpensesChart.js" made 
    available for use within "Chart.js" as `props.dataPoints()`: */
    return <Chart dataPoints={chartDataPoints}/>
};

export default ExpensesChart;
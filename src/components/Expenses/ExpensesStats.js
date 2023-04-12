import YearNumberOfExpenses from "./ExpensesStats/YearNumberOfExpenses";
import TopExpenseCategory from "./ExpensesStats/TopExpenseCategory";
import YearBiggestSingleExpense from "./ExpensesStats/YearBiggestSingleExpense";
import "./ExpensesStats.css";

/* Initializing `ExpensesStats()` function, which builds `<ExpensesStats />` component; 
note passage of "props" as function parameter, which allows function/component to make 
use of "filteredExpenses" array passed as value of `expenseItems` prop in 
`<ExpensesStats />` invocation in "Expenses.js": */
const ExpensesStats = (props) => {

    /* Return one invocation each of `<YearNumberOfExpenses />`, `<TopExpenseCategory />`, 
    and `<YearBiggestSingleExpense />` components; passing each component 
    `{props.expenseItems}` as prop value so that the JavaScript files constructing each 
    component may have access to contents of "filteredExpenses" array from "Expenses.js": */
    return (
        <div className="expense-stats-row">
            <YearNumberOfExpenses expenseItems={props.expenseItems} />
            <TopExpenseCategory expenseItemsNoCatNums={props.expenseItems} />
            <YearBiggestSingleExpense expenseItems={props.expenseItems} />
        </div>
    )
}
export default ExpensesStats;
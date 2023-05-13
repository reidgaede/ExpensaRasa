/* Data Flow ("Expenses Stats" Branch of Component Tree): `<YearBiggestSingleExpense />` -> 
`<ExpenseStats />` -> `<Expenses />` -> `<App />` -> "index.js" -> "index.html" */

import "./YearBiggestSingleExpense.css";

const YearBiggestSingleExpense = (props) => {

    const expenseAmountArray = [];

    /* For every "expense object" contained in filtered expense array obtained from "Expense-
    Stats.js" as `props.expenseItems`, obtain each object's `amount` value and append it to 
    "expenseAmountArray": */
    for(const expense of props.expenseItems) {
        const expenseAmount = expense.amount;
        expenseAmountArray.push(expenseAmount);
    };

    /* If "expenseAmountArray" has `length` value of 0, then no expenses "on file" for that 
    given year. As such, `return` `<div>` element structured to indicate such information on 
    front-end: */
    if(expenseAmountArray.length === 0) {
        return (
            <div className="year-biggest-single-expense">
                <h4>Largest Single Expense</h4>
                <hr className="horizontal-line"/>
                <h5>N/A</h5>
            </div>
        )
    }else{
        /* Note usage of "spread" operator to obtain values from "expenseAmountArray" so 
        that those individual values - rather than "expenseAmountArray" array itself - are 
        passed as arguments to `.max()`: */
        const yearLargestExpenseAmount = Math.max(...expenseAmountArray);

        let yearLargestExpense = "";
        for(const expenseItem of props.expenseItems) {
            if(expenseItem.amount === yearLargestExpenseAmount) {
                yearLargestExpense = expenseItem.title
            }
        };

        return (
            <div className="year-biggest-single-expense">
                <h4>Largest Single Expense</h4>
                <hr className="horizontal-line"/>
                <h5>{yearLargestExpense}</h5>
            </div>
        )
    };
};

export default YearBiggestSingleExpense;
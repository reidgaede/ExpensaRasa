import React, {useState} from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import ExpensesStats from './ExpensesStats';
import Card from "../UI/Card";
import "./Expenses.css";

/* Initializing `Expenses()` function, which builds `<Expenses />` component; note 
passage of "props" as function parameter, which allows function/component to make use of 
value(s), function(s), etc. passed as prop value(s) into `<Expenses />` invocation in 
"App.js": */
function Expenses(props) {

    /* Initializing "filteredYear" state variable as well as corresponding "setFilteredYear" 
    "state-updating function" to facilitate storage of user-selected "filter year" and 
    ultimate passage of said filter year up expense tracker's component tree to `<App />`; 
    "filteredYear" contains initial string value of "2019": */
    const [filteredYear, setFilteredYear] = useState("2019");

    /* When user selects new/different value in "Filter by Year" drop-down menu on front-
    end (defined/declared as `<select>` element in "ExpensesFilter.js"), assign "filtered-
    Year" state variable "selectedYear" value from said drop-down menu for use in "filtering" 
    expense items available for visualization via components stored in app's/project's "Chart" 
    directory: */
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    /* Upon execution of above-defined `filterChangeHandler()` function, filter "expenses" 
    array in "App.js" such that only those expense objects containing a string-structured 
    year value equivalent to "filteredYear" value selected by user be made available for 
    visualization via components stored in app's/project's "Chart" directory: */
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    /* Render `<Card>` component within which `<ExpensesFilter />`, `<ExpensesChart />`, and 
    `<ExpensesList />` are also rendered; use `className` prop within `<Card>` component to 
    ensure that "expenses" class within "Expenses.css" applied to this specific `<Card>` 
    invocation for styling purposes; use `selected` prop within `<ExpensesFilter />` component 
    to ensure that "default value" shown for "Filter by Year" drop-down menu is initially (upon 
    first loading/rendering of app's front-end) "2019" and then, following explicit user selection 
    of "filter year" via said drop-down menu, whichever "filter year" value (stored within 
    "filteredYear") said user has chosen; use `onSelectYear` prop to make `filterChangeHandler()` 
    function available for use within "ExpensesFilter.js" as `props.onSelectYear()`; use `expenses` 
    prop within `<ExpensesChart />` invocation to make "filteredExpenses" array available to 
    `<ExpensesChart />` component for purposes of expense visualization; use `expenseItems` prop 
    within `<ExpensesStats />` invocation to make "filteredExpenses" array available within 
    "ExpensesStats.js" and therein-invoked sub-components so as to output high-level expense 
    metrics/stats to front-end; use `items` prop within `<ExpensesList />` invocation to make 
    "filteredExpenses" array available to `<ExpensesList />` component for purposes of listing, 
    one-by-one, each expense incurred within user-selected "filter year" on front-end beneath expense 
    chart visualization: */
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear} 
                    onSelectYear={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesStats expenseItems={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
};

export default Expenses;
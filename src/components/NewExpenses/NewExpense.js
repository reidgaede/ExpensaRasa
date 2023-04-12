/* Data Flow ("New Expense" Branch of Component Tree): `<ExpenseForm />` -> 
`<NewExpense />` -> `<App />` -> "index.js" -> "index.html" */

/* Importing `<ExpenseForm />` element for use in "NewExpense.js" (i.e., in `<NewExpense />` 
component): */
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

/* Initializing `NewExpense()` function, which builds `<NewExpense />` component; note 
passage of "props" as function parameter, which allows function/component to make use of 
value(s), function(s), etc. passed as prop value(s) into `<NewExpense />` invocation in 
"App.js": */
const NewExpense = (props) => {

    /* `saveExpenseDataHandler()` accepts "expenseData" object generated within `<ExpenseForm />` 
    as its argument, appends new property, `id`, to end of said object, and uses `addExpense-
    Handler()` function, which is passed as value to `onAddExpense` prop in invocation of 
    `<NewExpense />` component in "App.js", to transfer complete "expense object" to `<App />` 
    for rendering on front-end: */
    const saveExpenseDataHandler = (enteredExpenseData) => {

        /* `Math.random().toString()` generates random floating-point value between 0 and 1 and 
        subsequently converts said value to string (uniqueness of said value when compared to 
        such values generated as `id` property values for other new expense items not guaranteed, 
        but so long as number of expenses entered into expense tracker remains relatively low, 
        odds of repeat/duplicate `id` values remains similarly low): */
        const expenseData = {
            ...enteredExpenseData,
            id: "eID_" + (Math.floor(Math.random() * 1000) + 1).toString(),
        };
        props.onAddExpense(expenseData);
    };

    /* Render one `<ExpenseForm />` component; use `onSaveExpenseData` prop to make 
    `saveExpenseDataHandler()` function available for use within "ExpenseForm.js" as 
    `props.onSaveExpenseData()`: */
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
};

export default NewExpense;
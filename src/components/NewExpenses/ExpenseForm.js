/* Data Flow ("New Expense" Branch of Component Tree): `<ExpenseForm />` -> 
`<NewExpense />` -> `<App />` -> "index.js" -> "index.html" */

import React, {useState} from "react";
import "./ExpenseForm.css";

/* Initializing `ExpenseForm()` function, which builds `<ExpenseForm />` component; note 
passage of "props" as function parameter, which allows function/component to make use of 
value(s), function(s), etc. passed as prop value(s) into `<ExpenseForm />` invocation in 
"NewExpense.js": */
const ExpenseForm = (props) => {

    /* Initializing "enteredTitle", "enteredAmount", "enteredDate", and "enteredCategory" 
    state variables as well as corresponding "state-updating functions" to facilitate 
    storage of new user-submitted "expense items" and ultimate passage of said expense 
    objects up expense tracker's component tree to `<App />`; all state variables shown 
    immediately below (excepting "enteredCategory") contain empty string as initial value: */
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [enteredCategory, setEnteredCategory] = useState("Miscellaneous");
    
    /* Initializing "addNewExpenseClick" state variable and `setAddNewExpenseClick()` 
    "state-updating function" to dynamically determine whether or not "new expense form" 
    should render on front-end; "addNewExpenseClick" value of `false` (which is also 
    initial value of "addNewExpenseClick") will prevent said form from rendering whereas 
    "addNewExpenseClick" value of `true` will cause said form to render: */
    const [addNewExpenseClick, setAddNewExpenseClick] = useState(false);

    /* When click of "Add New Expense" button detected on front-end, assign 
    "addNewExpenseClick" state variable new value of `true` so as to render "new expense 
    form" on front-end: */
    const addNewExpenseClickHandler = (event) => {
        setAddNewExpenseClick(true);
    };

    /* When click of "Cancel" button detected on front-end, assign "addNewExpenseClick" 
    state variable new value of `false` so as to "hide" "new expense form" on front-end: */
    const cancelClickHandler = (event) => {
        setAddNewExpenseClick(false);
    };

    /* Whenever any new keystroke is detected in `<input>` element preceded by `<label>` 
    element containing "Title" as its content, update value of "enteredTitle" state vari-
    able with whatever value is contained in said `<input>` element: */
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    /* Whenever any new keystroke is detected in `<input>` element preceded by `<label>` 
    element containing "Amount" as its content, update value of "enteredAmount" state vari-
    able with whatever value is contained in said `<input>` element: */
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    /* Whenever any new keystroke is detected in `<input>` element preceded by `<label>` 
    element containing "Date" as its content, update value of "enteredDate" state vari-
    able with whatever value is contained in said `<input>` element: */
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    /* Whenever new `<option>` value is selected within sole `<select>` element in 
    "ExpenseForm.js", invoke `categoryChangeHandler()` function so that value contained 
    within "enteredCategory" state variable is updated with new, user-selected value: */
    const categoryChangeHandler = (event) => {
        setEnteredCategory(event.target.value);
    };

    /* `submitHandler()` executes whenever "Add Expense" button within sole `<form>` element 
    in "ExpenseForm.js" is clicked: */
    const submitHandler = (event) => {

        /* Using `event.preventDefault()` to prevent front-end from reloading whenever "new expense" 
        form's "Add Expense" button is clicked (if `event.preventDefault();` were not declared here, 
        data input into `<input>` fields in sole `<form>` element in "ExpenseForm.js" would be lost 
        via page reload every time "Add Expense" button were clicked): */
        event.preventDefault();

        /* Packaging expense data submitted via "new expense form" into JavaScript object (note use 
        of "unary plus operator" (i.e., `+`), which is because "enteredAmount" is inherently string-
        structured, and therefore must be converted to a number to enable summation with (any other) 
        expenses incurred in that same month and year for visualizing `<ChartBar>` elements in 
        "expense chart" on front-end): */
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            /* Adding `.split('-')` in effort to prevent `Date` objects from having day values one 
            less than that chosen/selected by user (i.e., "off-by-one" errors): */
            date: new Date(enteredDate.split('-')),
            category: enteredCategory,
        };

        /* `saveExpenseDataHandler()` function, which is passed as value to `onSaveExpenseData` 
        prop in invocation of `<ExpenseForm />` component in "NewExpense.js", transfers user-
        submitted "expenseData" object to "NewExpense.js" for further processing/transformation 
        prior to transfer to/rendering on front-end via `<App />`: */
        props.onSaveExpenseData(expenseData);

        /* Post-transfer of "expenseData" object to "NewExpense.js", resetting values displayed 
        via each `<input>` field on front-end to original empty string values: */
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    /* If user has not clicked "Add New Expense" button on front-end, render "Add New Expense" 
    button on front-end: */
    if(addNewExpenseClick === false){
        return (
            <button onClick={addNewExpenseClickHandler}>Add New Expense</button>
        );
    }else{
        /* Otherwise (i.e., if "addNewExpenseClick" contains value of `true`), render "new 
        expense form" on front-end: */
        return (
            /* Note invocation of `submitHandler()` function upon submission of "new expense 
            form": */
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title (Maximum 40 Characters)</label>
                        <input 
                            type="text" 
                            maxLength="40" 
                            value={enteredTitle} 
                            onChange={titleChangeHandler} 
                            required
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount (Must be Less Than $10 Million)</label>
                        <input 
                            type="number" 
                            min="0.01" 
                            step="0.01" 
                            max="10000000"
                            value={enteredAmount} 
                            onChange={amountChangeHandler}
                            required
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input 
                            type="date" 
                            min="2019-01-01" 
                            max="2023-12-31" 
                            value={enteredDate} 
                            onChange={dateChangeHandler}
                            required
                        />
                    </div>
                    {/* Budget/expense cateogry list obtained from 
                    https://www.quicken.com/blog/budget-categories/: */}
                    <div className="new-expense__control">
                        <label>Category</label>
                        <select value={enteredCategory} onChange={categoryChangeHandler} required>
                            <option value='Miscellaneous'>Miscellaneous</option>
                            <option value='Housing'>Housing</option>
                            <option value='Transportation'>Transportation</option>
                            <option value='Food'>Food</option>
                            <option value='Utilities'>Utlities</option>
                            <option value='Insurance'>Insurance</option>
                            <option value='Medical & Healthcare'>Medical & Healthcare</option>
                            <option value='Saving, Investing, & Debt Payments'>Saving, Investing, & Debt Payments</option>
                            <option value='Personal Spending'>Personal Spending</option>
                            <option value='Recreation & Entertainment'>Recreation & Entertainment</option>
                        </select>
                    </div>
                </div>
                <div className="new-expense__actions">
                    {/* Note invocation of `cancelClickHandler()` function upon click of 
                    "Cancel" button: */}
                    <button id="new-expense__cancel-button" onClick={cancelClickHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        );
    };
};

export default ExpenseForm;
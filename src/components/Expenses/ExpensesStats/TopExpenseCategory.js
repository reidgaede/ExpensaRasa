/* Data Flow ("Expenses Stats" Branch of Component Tree): `<TopExpenseCategory />` -> 
`<ExpenseStats />` -> `<Expenses />` -> `<App />` -> "index.js" -> "index.html" */

import "./TopExpenseCategory.css";

const TopExpenseCategory = (props) => {

    /* Initializing "expenseItemsWithCategoryNums" as empty array: */
    const expenseItemsWithCategoryNums = []

    /* Via `switch` statement nested within `for`-loop, evaluating `category` property 
    for each JavaScript object-structured expense item passed from "ExpensesStats.js" 
    via `props.expenseItemsNoCatNums`; looking to "match" `category` value for each 
    particular "expense object" with single `case` value; once "match" found, `case` 
    appends that "expense item" - with new property, `categoryNum`, and its cor-
    responding value - to "expenseItemsWithCategoryNums" array defined above; doing so 
    to provide each "expense item" with expense category-dependent "index value": */
    for(const item of props.expenseItemsNoCatNums){
        switch(item.category){
            default:
                expenseItemsWithCategoryNums.push({...item, categoryNum: 0});
                break;
            case "Housing":
                expenseItemsWithCategoryNums.push({...item, categoryNum: 1});
                break;
            case "Transportation":
                expenseItemsWithCategoryNums.push({...item, categoryNum: 2});
                break;
            case "Food":
                expenseItemsWithCategoryNums.push({...item, categoryNum: 3});
                break;
            case "Utilities":
                expenseItemsWithCategoryNums.push({...item, categoryNum: 4});
                break;
            case "Insurance":
                expenseItemsWithCategoryNums.push({...item, categoryNum: 5});
                break;
            case "Medical & Healthcare":
                expenseItemsWithCategoryNums.push({...item, categoryNum: 6});
                break;
            case "Saving, Investing, & Debt Payments":
                expenseItemsWithCategoryNums.push({...item, categoryNum: 7});
                break;
            case "Personal Spending":
                expenseItemsWithCategoryNums.push({...item, categoryNum: 8});
                break;
            case "Recreation & Entertainment":
                expenseItemsWithCategoryNums.push({...item, categoryNum: 9});
        };
    };

    /* Initializing "expenseCategoryDataPoints" array, which contains 10 JavaScript 
    objects - each representing one unique expense category - that will each ultimately 
    contain summed value of expenses incurred within that expense category for user's 
    selected "filter year": */
    const expenseCategoryDataPoints = [
        {category: "Miscellaneous", sumExpenses: 0},
        {category: "Housing", sumExpenses: 0},
        {category: "Transportation", sumExpenses: 0},
        {category: "Food", sumExpenses: 0},
        {category: "Utlities", sumExpenses: 0},
        {category: "Insurance", sumExpenses: 0},
        {category: "Medical & Healthcare", sumExpenses: 0},
        {category: "Saving, Investing, & Debt Payments", sumExpenses: 0},
        {category: "Personal Spending", sumExpenses: 0},
        {category: "Recreation & Entertainment", sumExpenses: 0},
    ];

    /* For each "expense object" - now with numeric values indicative of single, 
    specific expense category assigned to each such object's `categoryNum` property - 
    in "expenseItemsWithCategoryNums" array, obtain said object's `categoryNum` value, 
    store it in "expenseCategory" variable, and use said numeric value to index 
    "expenseCategoryDataPoints" array of objects such that `sumExpenses` property 
    within the object located at that index within "expenseCategoryDataPoints" is 
    summatively updated with `amount` value contained within each object passed to 
    "TopExpenseCategory.js" via `props.expenseItemsNoCatNums`: */
    for(const item of expenseItemsWithCategoryNums) {
        const expenseCategory = item.categoryNum;
        expenseCategoryDataPoints[expenseCategory].sumExpenses += item.amount;
    }

    /* Initializing "expenseCategoryValues" array by mapping cumulative (within each 
    expense category) amounts - contained within "expenseCategoryDataPoints" array 
    - for user-selected "filter year" to single elements to be held within 
    "expenseCategoryValues": */
    const expenseCategoryValues = expenseCategoryDataPoints.map(
        (dataPoint) => dataPoint.sumExpenses
    );

    /* Obtaining maximum numeric value (i.e., of dollars cumulatively incurred within 
    each expense category across all expense categories in user-selected "filter year") 
    in "expenseCategoryValues" array and storing it in "topExpenseCategoryValue": */
    const topExpenseCategoryValue = Math.max(...expenseCategoryValues);

    /* If "topExpenseCategoryValue" less than or equal to zero, then no expenses "on 
    file" for that given year. As such, `return` `<div>` element structured to output 
    message indicating such information on front-end: */
    if(topExpenseCategoryValue <= 0){
        return (
            <div className="top-expense-category">
                <h4>Largest Expense Category</h4>
                <hr className="horizontal-line"/>
                <h5>N/A</h5>
            </div>
        );
    /* Otherwise, "grab" expense category for which most expenses were incurred for 
    selected "filter year", store said expense category in "topExpenseCategory" variable, 
    and then `return` `<div>` element structured to output such information on front-end: */
    }else{
        let topExpenseCategory = "";
        for(const i of expenseCategoryDataPoints){
            if(i.sumExpenses === topExpenseCategoryValue){
                topExpenseCategory = i.category;
            };
        };
        /* Commented-out `console.log()` statement following this comment was originally used 
        for testing purposes, but has been maintained as documentation: */
        //console.log(topExpenseCategory);

        return (
            <div className="top-expense-category">
                <h4>Largest Expense Category</h4>
                <hr className="horizontal-line"/>
                <h5>{topExpenseCategory}</h5>
            </div>
        )
    }
};

export default TopExpenseCategory;
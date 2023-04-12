import "./Card.css";

/* Initializing `Card()` function, which builds `<Card>` component; note passage of 
"props" as function parameter, which allows function/component to make use of `className` 
prop values passed into `<Card>` invocations in "Expenses.js" and "ExpenseItem.js": */
function Card(props) {

    /* `"card " + props.className`, for any given `<Card>` invocation, establishes that 
    single `className` value will be string containing "card" (i.e., class selector 
    found within "Card.css" with basic styling for any/all invoked `<Card>` components) 
    followed within said string by `className` value(s) explicitly specified within 
    opening tag of that specific invocation of `<Card>` (said string will be stored 
    within "classes" constant, which will then be passed as `className` value to `<div>` 
    element in `Card()` function's `return` statement below): */
    const classes = "card " + props.className;

    /* Using `props.children` to "obtain" and "wrap" (using `<Card>`) all elements/
    components invoked between opening and closing tag of any given `<Card>` invocation 
    within this React app: */
    return (
        <div className={classes}>{props.children}</div>
    );
};

export default Card;
/* Data Flow ("Expense Chart" Branch of Component Tree): `<ChartBar />` -> `<Chart />` 
-> `<ExpensesChart />` -> `<Expenses />` -> `<App />` -> "index.js" -> "index.html" */

import "./ChartBar.css";

/* Initializing `ChartBar()` function, which builds `<ChartBar />` component; note 
passage of "props" as function parameter, which allows function/component to make use 
of `dataPoint.label`, `dataPoint.value`, and "totalMaximum" values passed as values to 
`key`, `value`, `maxValue`, and `label` props in `<ChartBar />` invocation in 
"Chart.js": */
const ChartBar = (props) => {

    /* Initializing "barFillHeight" variable for each `<ChartBar>` invocation with 
    default string value of "0%": */
    let barFillHeight = "0%";

    /* If `maxValue` prop - which contains value for "totalMaximum" variable from 
    "Chart.js" - is greater than zero, assign "barFillHeight" variable new value 
    that represents (as percentage) total expenses accumulated in that month in 
    proportion to maximum total expenses accumulated in a single month for that 
    given filter year: */
    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    };

    /* Using "inline styling" to dynamically adjust `height` CSS property for `<div>` 
    element for whom `className` value of "chart-bar__fill" has been passed: */
    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
}

export default ChartBar;
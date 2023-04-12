/* Data Flow ("Expense Chart" Branch of Component Tree): `<ChartBar />` -> `<Chart />` 
-> `<ExpensesChart />` -> `<Expenses />` -> `<App />` -> "index.js" -> "index.html" */

import ChartBar from "./ChartBar";
import "./Chart.css";

/* Initializing `Chart()` function, which builds `<Chart />` component; note passage of 
"props" as function parameter, which allows function/component to make use of 
"chartDataPoints" array passed as value of `dataPoints` prop in `<Chart />` invocation 
in "ExpensesChart.js": */
const Chart = (props) => {

    /* Initializing "dataPointValues" array by mapping cumulative (within each month) 
    expense amounts - contained within "chartDataPoints" array stored within 
    `props.dataPoints` - for user-selected "filter year" to single elements to be held 
    within "dataPointValues": */
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

    /* Obtaining maximum numeric value (i.e., month in user-selected "filter year" in 
    which greatest dollar-denominated value of total expenses accumulated) in "data-
    PointValues" array and storing it in "totalMaximum": */
    const totalMaximum = Math.max(...dataPointValues);

    /* Returning `.map()` invocation that invokes a `<ChartBar />` instance for each 
    object in "chartDataPoints" array stored within `props.dataPoints`; note property 
    values from "chartDataPoints" array stored within `props.dataPoints` passed as 
    values for each `<ChartBar />` invocation's 'prop' values so that said values are 
    accessible within "ChartBar.js": */
    return <div className="chart">
        {props.dataPoints.map((dataPoint) => (
            <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={totalMaximum}
                label={dataPoint.label}
            />
        ))}
    </div>
};

export default Chart;
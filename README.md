# ExpensaRasa
React-based interface for quick, convenient, and private expense logging and analysis.

## Background
"ExpensaRasa" emerged from an expense tracker project completed as part of the ["React - The Complete Guide (incl Hooks, React Router, Redux)"](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) course available on Udemy. A play off of the ["tabula rasa" concept](https://en.wikipedia.org/wiki/Tabula_rasa), ExpensaRasa allows users to:
- Upload their expense items; 
- Filter their uploaded expenses by the year in which they were incurred;
- Consult the dynamic, on-page chart for a month-by-month, real-time expense breakdown; and
- "Wipe their slate clean" when they are done by refreshing or closing their browser window.

To improve upon the expense tracker project's original design and augment my applied ReactJS experience gained to date, I have executed the following modifications to change this project into ExpensaRasa:
- Overhauled, via nuanced changes to CSS styling, front-end color scheme from light/dark purple to light/dark blue;
- Implemented CSS media queries that ensured, via responsive design, base-level continuity of user experience across more than a dozen unique screen dimensions;
- Added and fully integrated new “Category” `<select>` element in `<ExpenseForm />` component that allows user to assign a high-level expense category to each expense they upload via ExpensaRasa’s front-end;
- Amended “Title” `<input>` element in `<ExpenseForm />` component so that it only accepts textual input 40 characters or less in length;
- Amended “Amount” `<input>` element in `<ExpenseForm />` component so that it only accepts numeric input less than or equal to 10,000,000;
- Amended “unique ID” generation in `<NewExpense />` component to decrease odds of two (or more) expense items having identical values for `ID` property;
- Reorganized HTML and CSS for `<ExpenseItem />` component so that every expense’s “expense category” would be listed beneath the expense’s name/title within any invocation of the `<ExpenseItem />` component;
- Crafted and fully integrated new `<ExpenseStats />` component, which contains (partially) styles and passes data to invocations of self-designed `<TopExpenseCategory />`, `<YearBiggestSingleExpense />`, and `<YearNumberOfExpenses />` components;
  - Conceptualized, wrote, and fully integrated `<TopExpenseCategory />` component, which dynamically computes expense category for which the highest dollar quantity was incurred for a given year and outputs said information in stylized elements on project’s front-end;
  - Conceptualized, wrote, and fully integrated `<YearBiggestSingleExpense />` component, which dynamically computes and outputs the largest single expense incurred in a given filter year;
  - Conceptualized, wrote, and fully integrated `<YearNumberOfExpenses />` component, which dynamically outputs the number/count of expenses incurred in a given filter year; and
- Drafted “ExpensaRasa” copy to give project a stronger, more recognizable “identity” or "brand" in users’ minds.

## System Requirements and Recommendations
Download and set-up of ReactJS (by way of Node.js) is required prior to utilization of ExpensaRasa. If you do not already have Node.js installed on your machine, it can easily be downloaded for free from https://nodejs.org/ (no changes need be made to default Node.js settings during the installation process).

Once you have Node.js installed and have pulled this repo onto your personal computer:
1. Simply open the “ExpensaRasa” directory in your preferred text editor or IDE;
2. Open a new Terminal window (for Mac users; Command Prompt or equivalent for Windows users), and navigate via command line to the “ExpensaRasa” directory if/as necessary;
3. Once within the "ExpensaRasa" directory via command line, input `npm install` to install the necessary “node_modules” directory within “ExpensaRasa” (“node_modules” contains required packages and dependencies necessary for this React app to function properly); 
4. Once the “node_modules” directory is included within “ExpensaRasa”, you can use the same Terminal/Command Prompt window to input and execute `npm start`, which should initiate the development server through which “ExpensaRasa” can be locally accessed; and
5. If `npm start` is successful, then “ExpensaRasa” should momentarily be loaded in a new tab in a browser window on your personal computer.

## "Database" Schema
ExpensaRasa is not currently connected to any database ([INABIAF](https://en.wikipedia.org/wiki/Bug_(engineering)#%22It's_not_a_bug,_it's_a_feature%22)). Instead, all expenses uploaded by an individual user are stored as JavaScript objects in the "expenseArray" JavaScript array for as long as ExpensaRasa remains open in a browser window without page-refreshing.

### `expenseArray` Array
This array stores the individual expense items added - via user interaction with the ExpensaRasa front-end - to the app.
| Property | Description |
| ----------- | ----------- |
| `title` | String (40-character limit); the name/title for a specific user-uploaded expense |
| `amount` | Number (maximum value of 10,000,000); the amount, in USD, incurred for a specific user-uploaded expense |
| `date` | `Date` object (minimum date of 1/1/2019; maximum date of 12/31/2023); the date on which a specific user-uploaded expense was incurred |
| `category` | String; the expense type/category for a specific user-uploaded expense |
| `id` | Number; random identifying number automatically generated for each user-uploaded expense upon form submission |

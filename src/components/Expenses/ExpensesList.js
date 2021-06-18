import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
  // Conditional for the Expense List content
  if (props.items.length === 0) {
      return (
        <h2 className="expenses-list__fallback">
          You do not have any expenses in {props.year}.
        </h2>
      );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList
/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if (!transactions) {
    return [];
  }

  const expenses = [];

  for (const transaction of transactions) {
    const expensIndex = expenses.findIndex(
      (expens) => expens.category === transaction.category
    );

    expensIndex !== -1
      ? (expenses[expensIndex].totalSpent += transaction.price)
      : expenses.push({
          category: transaction.category,
          totalSpent: transaction.price,
        });
  }

  return expenses;
}

module.exports = calculateTotalSpentByCategory;

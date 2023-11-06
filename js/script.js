const dummyTransactions = [
  { id:1, name: 'Bolo De Brigadeiro', amount: -20},k
  { id:2, name: 'Salário', amount: 3000},
  { id:3, name: 'Torta de Frango', amount: -10},
  { id:4, name: 'Batom Luna', amount: 150}
]

const addTransactionIntoDOM = transaction => {
  const operator = transaction.amount < 0 ? '-' : '+'
  const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
  const li = document.createElement('li')

  li.classList.add(CSSClass)
  li.innerHTML = '
    ${transaction.name}<span>-R$4000</span><button class="delete-btn">x</button>' 
  console.log(li)
}
addTransactionIntoDOM(dummyTransactions[0])

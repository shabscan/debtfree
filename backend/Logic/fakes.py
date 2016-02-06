from collections import namedtuple

Debt = namedtuple('Debt', ['title', 'amount', 'interest'])
HistoricalBalance = namedtuple('HistoricalBalance', ['week', 'balance'])

balance_history = [
    HistoricalBalance(week=10, balance=20300),
    HistoricalBalance(week=11, balance=20050),
    HistoricalBalance(week=12, balance=19900)
]

assets = [
    Debt(title='Other', amount=5000, interest=0.12),
    Debt(title='Credit Card', amount=2000, interest=0.18),
    Debt(title='Student Loan', amount=12000, interest=0.035)
]

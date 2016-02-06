from collections import namedtuple

Debt = namedtuple('Debt', ['title', 'amount', 'interest'])
HistoricalBalance = namedtuple('HistoricalBalance', ['week', 'balance'])

balance_history = [
    HistoricalBalance(week=1, balance=23529.29),
    HistoricalBalance(week=2, balance=23157.58),
    HistoricalBalance(week=3, balance=22784.24),
    HistoricalBalance(week=4, balance=22409.27),
    HistoricalBalance(week=5, balance=22032.66),
    HistoricalBalance(week=6, balance=21654.41),
    HistoricalBalance(week=7, balance=21274.50),
    HistoricalBalance(week=8, balance=20892.92),
    HistoricalBalance(week=9, balance=20509.68),
    HistoricalBalance(week=10, balance=20124.76),
    HistoricalBalance(week=11, balance=19738.15),
    HistoricalBalance(week=12, balance=19349.86)
]

assets = [
    Debt(title='Other', amount=5000, interest=0.12),
    Debt(title='Credit Card', amount=2000, interest=0.18),
    Debt(title='Student Loan', amount=12000, interest=0.035)
]

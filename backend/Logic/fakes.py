from collections import namedtuple

Debt = namedtuple('Debt', ['title', 'amount', 'interest'])
Balance = namedtuple('Balance', ['week', 'balance'])

balance_history = [
    Balance(week=1, balance=23529.29),
    Balance(week=2, balance=23157.58),
    Balance(week=3, balance=22784.24),
    Balance(week=4, balance=22409.27),
    Balance(week=5, balance=22032.66),
    Balance(week=6, balance=21654.41),
    Balance(week=7, balance=21274.50),
    Balance(week=8, balance=20892.92),
    Balance(week=9, balance=20509.68),
    Balance(week=10, balance=20124.76),
    Balance(week=11, balance=19738.15),
    Balance(week=12, balance=19349.86)
]

assets = [
    Debt(title='Line of Credit', amount=5000, interest=0.07),
    Debt(title='Credit Card', amount=2000, interest=0.199),
    Debt(title='Student Loan', amount=15000, interest=0.035)
]

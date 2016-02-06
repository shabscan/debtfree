import numpy as np
from collections import namedtuple

Debt = namedtuple('Debt', ['title', 'amount', 'interest'])


def interest_model(values, rates, months):
    """
    V(t) = Vo (1 + r) ^ t

    :param values: Array of values
    :param rates: Monthly Interest Rates
    :param months: Number of compounding months
    :return: Progression of Balance
    """
    return values * (1 + rates) ** months


def interest_rate_dx(values, rates):
    """
    V(t) = Vo r e ^ (r * t)
    """
    return values * rates * np.e ** rates


def sum(a, b):
    """
    >>> sum(2, 3)
    5
    """
    return a+b

if __name__ == '__main__':
    # Testing
    fake_data_array = [Debt(title='Student Loan', amount=12000, interest=0.02),
                       Debt(title='Credit Card', amount=2000, interest=0.18),
                       Debt(title='Credit Line', amount=5000, interest=0.08)]

    amount_array = []
    interest_array = []
    for item in fake_data_array:
        amount_array.append(item.amount)
        interest_array.append(item.interest)

    amount_array = np.array(amount_array)
    interest_array = np.array(interest_array)

    print(interest_model(amount_array, interest_array, 1))

import numpy as np
from backend.Logic.fakes import assets


def pull_loan_data():
    amount_array = []
    interest_array = []

    for item in assets:
        amount_array.append(item.amount)
        interest_array.append(item.interest)

    amount_array = np.array(amount_array)
    interest_array = np.array(interest_array)
    return amount_array, interest_array


def weighted_interest_sum():
    total_debt = 0
    weighted_interest = []

    for loan in assets:
        total_debt += loan.amount
        weighted_interest.append(loan.interest * loan.amount)

    weighted_interest = np.sum(np.array(weighted_interest) / total_debt)
    return weighted_interest, total_debt


def interest_rate_dx(values, rates, month):
    # V(t) = ( Vo ( 1 + r ) ^ t ) * ( log( r + 1 ) )
    return (values * (rates + 1) ** month) * (np.log(rates + 1))


def interest_step(principal, rate, period):
    """
    Amount of interest over one compounding period
    Not very useful (alone) for now...
    :param principal: Starting Principal
    :param rate: fractional monthly rate 10% => 0.10/12
    :param period: number of months
    :return: Amount of interest

    >>> interest_step(10000, 0.01, 1)
    100.00
    """
    return format(principal * rate, ',.2f')


def format_money(amount):
    """
    Converts 123.234 to 123.23

    :param amount:
    :return:

    >>>format_money(123.234)
    123.23

    >>format_money(100.0000)
    100.00
    """
    # return round(payment, 2)
    return format(amount, ',.2f')

if __name__ == '__main__':
    weighted_interest_sum()

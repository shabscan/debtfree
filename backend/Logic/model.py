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


def interest_rate_dx(values, rates, month):
    # V(t) = ( Vo ( 1 + r ) ^ t ) * ( log( r + 1 ) )
    return (values * (rates + 1) ** month) * (np.log(rates + 1))


def interest_step(principal, rate, period):
    """
    Amount of interest over one compounding period
    Not very useful (alone) for now...
    :param principal: Starting Principal
    :param rate: fractional montly rate 10% => 0.10/12
    :param period: number of months
    :return: Amount of interest

    >>> interest_step(10000, 0.01, 1)
    100
    """

    return principal * rate


def credit_time_to_pay(balance, rate, payment):
    """
    http://itools-ioutils.fcac-acfc.gc.ca/CCPC-CPCC/CCPCCalc-CPCCCalc-eng.aspx
    :param balance: credit card balance
    :param rate: monthly interest rate
    :param payment: monthly payment
    :return: number of compounding periods (months)

    #TODO: can implement min payment as $10 or 2%

    >>> credit_time_to_pay(1000, 0.18/12, 20)
    94

    >>> credit_time_to_pay(1000, 0.18/12, 25)
    62

    >>> credit_time_to_pay(1000, 0.18/12, 100)
    11

    """

    return -1


def credit_interest_paid(balance, rate, payment):
    """
    >>> credit_time_to_pay(1000, 0.18/12, 20)
    862.24
    >>> credit_time_to_pay(1000, 0.18/12, 25)
    538.62
    >>> credit_time_to_pay(1000, 0.18/12, 100)
    91.62
    """
    # TODO can implement min payment as $10 or 2%
    return -1


def credit_total_paid(balance, rate, payment):
    """
    :param balance: credit card balance
    :param rate: monthly interest rate
    :param payment: monthly payment
    :return: number of compounding periods (months)

    #TODO: can implement min payment as $10 or 2%

    >>> credit_time_to_pay(1000, 0.18/12, 20)
    1862.24

    >>> credit_time_to_pay(1000, 0.18/12, 25)
    1538.62

    >>> credit_time_to_pay(1000, 0.18/12, 100)
    1091.62

    """
    return -1

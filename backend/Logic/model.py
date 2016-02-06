import numpy as np

from collections import namedtuple

Debt = namedtuple('Debt', ['title', 'amount', 'interest'])


def interest_model(values, rates, months):
    """
    Compounding Interest
    V(t) = Vo (1 + r) ^ t

    :param values: Array of values
    :param rates: Monthly Interest Rates in Decimal (10% => 0.10/12)
    :param months: Number of compounding months
    :return: Progression of Balance

    >>> interest_model(200000, 0.10/12, months = 0)
    200000.0
    #TODO fix decimal place

    '>>> interest_model(12000, 0.10/12, months = 14)
    11921.52 (This calculation is for mortage)

    """

    return format_money(values * (1 + rates) ** months, 2)


def interest_rate_dx(values, rates, month):
    """
    V(t) = ( Vo ( 1 + r ) ^ t ) * ( log( r + 1 ) )
    #TODO Verify the derivative on wolfram
    :param values:
    :param rates:
    :param month:
    :return:
    """

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
    return format(principal*rate, ',.2f')


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

    :param balance: credit card balance
    :param rate: monthly interest rate
    :param payment: monthly payment
    :return: number of compounding periods (months)

    #TODO: can implement min payment as $10 or 2%

    >>> credit_time_to_pay(1000, 0.18/12, 20)
    862.24

    >>> credit_time_to_pay(1000, 0.18/12, 25)
    538.62

    >>> credit_time_to_pay(1000, 0.18/12, 100)
    91.62

    """

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


def calc_payment(balance, months, rate):
    """
    Calculates the monthly payment
    if fed a weekly rate and number of compounding weeks, might calc weekly payment
    #TODO verify weekly payment size

    :param balance: credit card balance
    :param months: number of compounding periods
    :param rate: monthly interest rate
    :return: monthly payments

    >>> calc_payment(25000, 60, 5.25/100/12)
    474.65
    """

    if rate == 0:
        payment = balance / months
    else:
        compounded_rate = (rate + 1)**months
        payment = balance * ((rate * compounded_rate) / (compounded_rate - 1))

    return format_money(payment, 2)

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

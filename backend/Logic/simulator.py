# Simulate front projections
import numpy as np
import pandas as pd
from backend.Logic.model import pull_loan_data


def project_debt_balance(values, interest_rates, payment=1500):
    pass

#def kj_loan_model(pv, comp_periods, period_interest, pay_freq=12):


def kj_amort(principal, months, rate):
    """

    :param principal: positive value
    :param months: compounding periods (can be weeks)
    :param rate: matches compounding periods (can be weekly rate)
    :param payments_year: not used right now
    :return:
    """

    tableLoan = pd.DataFrame(columns=('payment', 'interest_segment', 'principal_segment', 'balance'))

    tableLoan.loc[0] = [0, 0, 0, principal]

    payment = -np.pmt(rate, months, principal)  # Gives a negative value
    timestep = 1
    balance = principal

    while not(balance <= 0 or timestep > 100):
        frac_interest = balance*rate

        if balance > payment:
            balance -= payment
        else:
            payment = balance
            balance = 0

        frac_principal = payment - frac_interest

        tableLoan.loc[timestep] = [payment, frac_interest, frac_principal, balance]
        timestep += 1
        print(timestep, balance)

    return tableLoan

if __name__ == '__main__':
    amounts, rates = pull_loan_data()
    print(amounts[1], rates[1])
    months = 12

    out = kj_amort(amounts[1], months, rates[1])

    print(out)






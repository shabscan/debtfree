# Simulate front projections
import numpy as np
import pandas as pd
from backend.Logic.model import pull_loan_data


def project_debt_balance(values, interest_rates, payment=1500):
    pass


def walk_forward_projection(principal, rate, months=12, payment=1200):
    """
    :param payment:
    :param principal: positive value
    :param months: compounding periods (can be weeks)
    :param rate: matches compounding periods (can be weekly rate)
    :return:
    """
    loan_table = pd.DataFrame(columns=('payment', 'interest_segment', 'principal_segment', 'balance'))

    loan_table.loc[0] = [0, 0, 0, principal]

    #payment = -np.pmt(rate, months, principal)  # Gives a negative value
    time_step = 1
    balance = principal

    while not(balance <= 0 or time_step > 100):
        fraction_interest = balance*rate

        if balance > payment:
            balance -= payment
        else:
            payment = balance
            balance = 0

        fractional_principal = payment - fraction_interest

        loan_table.loc[time_step] = [payment, fraction_interest, fractional_principal, balance]
        time_step += 1

    return loan_table

if __name__ == '__main__':
    amounts, rates = pull_loan_data()

    out = walk_forward_projection(amounts[1], rates[1])
    print(out['balance'].as_matrix().tolist())






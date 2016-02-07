# Simulate front projections
import numpy as np
import pandas as pd
from backend.Logic.model import pull_loan_data


def project_debt_balance(values, interest_rates, payment=1200):
    pass


def impact_calculator_total(pv, rate, payments, lumpsum, fv=0):
    """
    Calculate the impact (time) in throwing more money at a single debt
    """

    rate /= 12

    t0 = np.nper(rate, -payments, pv, fv)
    t1 = np.nper(rate, -payments, pv - lumpsum, fv)

    time_saved = t1 - t0

    # Output into units of time
    if time_saved >= 12:
        out_saved = str(round(time_saved / 12, 2)) + ' years'
    elif time_saved >= 1:
        out_saved = str(round(time_saved, 2)) + ' months'
    elif time_saved >= 1 / 4:
        out_saved = str(round(time_saved / 4, 2)) + 'weeks'
    else:
        out_saved = str(round(time_saved / 28, 2)) + ' days'

    return out_saved


def walk_forward_projection(principal, rate, months=None, payment=1200):
    """
    :param payment:
    :param principal: positive value
    :param months: compounding periods (can be weeks)
    :param rate: matches compounding periods (can be weekly rate)
    :return:
    """
    loan_table = pd.DataFrame(columns=('payment', 'interest_segment', 'principal_segment', 'balance'))
    rate /= 12  # Make the rate a monthly rate.

    # Initialise Table
    loan_table.loc[0] = [0, 0, 0, principal]

    # Handles pay by amount
    if months is not None:
        payment = -np.pmt(rate, months, principal)  # Handles pay by amount

    time_step = 1
    balance = principal

    while not (balance <= 0 or time_step > 100):
        fraction_interest = balance * rate

        if balance > payment:
            balance = round(balance + fraction_interest - payment, 2)
        else:
            payment = balance
            balance = 0

        fractional_principal = payment - fraction_interest

        loan_table.loc[time_step] = [payment, fraction_interest, fractional_principal, balance]
        time_step += 1

    return loan_table


if __name__ == '__main__':
    amounts, rates = pull_loan_data()

    out = walk_forward_projection(amounts[2], rates[2], payment=400)
    print(out['balance'].as_matrix().tolist())
    print('Pay ${} a month'.format(out['payment'].ix[1]))

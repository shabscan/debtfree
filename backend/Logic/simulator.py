# Simulate front projections
import numpy as np
import pandas as pd
from backend.Logic.model import pull_loan_data


def impact_calculator_total(present_value, annual_rate, payments, lump_sum, future_value=0):
    # Calculate the impact (time) in throwing more money at a single debt
    t0 = np.nper([annual_rate], [payments], [present_value], [future_value])
    t1 = np.nper([annual_rate], [payments], [present_value - lump_sum], [future_value])

    time_saved = t1 - t0
    print('t {} - {} = {}'.format(t1, t0, time_saved))
    return '{} days'.format(round(time_saved[0] * 365))


def walk_forward_projection(principal, annual_rate, months=None, payment=1200):
    """
    :param payment:
    :param principal: positive value
    :param months: compounding periods (can be weeks)
    :param annual_rate: matches compounding periods (can be weekly rate)
    :return:
    """
    loan_table = pd.DataFrame(columns=('payment', 'interest_segment', 'principal_segment', 'balance'))
    annual_rate /= 12  # Make the rate a monthly rate.

    # Initialise Table
    loan_table.loc[0] = [0, 0, 0, principal]

    # Handles pay by amount
    if months is not None:
        payment = -np.pmt(annual_rate, months, principal)  # Handles pay by amount

    time_step = 1
    balance = principal

    while not (balance <= 0 or time_step > 100):
        fraction_interest = balance * annual_rate

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

    print(impact_calculator_total(present_value=5000, payments=867, annual_rate=0.07, lump_sum=300))
    print(impact_calculator_total(present_value=2000, payments=60.75, annual_rate=0.199, lump_sum=120))

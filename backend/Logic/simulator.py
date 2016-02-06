# Simulate front projections
import numpy as np
from backend.Logic.model import pull_loan_data


def project_debt_balance(values, interest_rates, payment=1500):
    pass

if __name__ == '__main__':
    amounts, rates = pull_loan_data()
    print(amounts, rates)
    project_debt_balance(amounts, rates)

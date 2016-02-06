import numpy as np


def principle_model(values, rates):
    pass


def interest_rate_dx(values, rates):
    return values * rates * np.e ** rates

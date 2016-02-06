import numpy as np


def interest_model(values, rates, months):
    # V(t) = Vo e ^ (r*t)
    return np.sum(values * np.e ** (rates * months))


def interest_rate_dx(values, rates):
    return values * rates * np.e ** rates

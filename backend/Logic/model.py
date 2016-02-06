import numpy as np


def interest_model(values, rates, months):
    """
    V(t) = Vo e ^ (r * t)
    """
    return np.sum(values * np.e ** (rates * months))


def interest_rate_dx(values, rates):
    """
    V(t) = Vo r e ^ (r * t)
    """
    return values * rates * np.e ** rates


def sum(a, b):
    """
    >>> sum(2, 3)
    5
    """
    return a+b

if __name__ == '__main__':
    import doctest
    doctest.testmod()

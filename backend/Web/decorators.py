# Custom Decorators for the API
import functools
from flask import jsonify


# Jsonifies whatever is outputted on the method this decorates
def json(f):
    @functools.wraps(f)
    def wrapped(*args, **kwargs):
        # This is the good stuff
        rv = f(*args, **kwargs)
        if not isinstance(rv, dict):
            rv = rv.to_json()
        return jsonify(rv)

    return wrapped

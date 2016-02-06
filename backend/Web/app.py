from flask import Flask
from Web.decorators import json

app = Flask(__name__)


@app.route('/')
@json
def index():
    return {'message': 'Hello Hacks'}


@app.route('/debts')
@json
def optimise_allocations():
    pass


if __name__ == '__main__':
    app.run()

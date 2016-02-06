from flask import Flask
from backend.Web.decorators import json
from backend.Logic.fakes import assets, balance_history

app = Flask(__name__)
temp_message = dict(message='Hello Scotiabank Hacks')
url = 'https://scotiadebt.herokuapp.com/'

@app.route('/')
@json
def index():
    return temp_message


@app.route('/debts')
@json
def get_debts():
    return dict(firstname='John', lastname='Smith', loans=assets)


@app.route('/history')
@json
def get_historical_data():
    return dict(history=balance_history)


@app.route('/projection', methods=['POST'])
@json
def get_debt_projection():
    return temp_message


if __name__ == '__main__':
    app.run()

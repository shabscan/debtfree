from flask import Flask
from backend.Web.decorators import json
from backend.Logic.model import weighted_interest_sum
from backend.Logic.fakes import assets, balance_history, Balance
from backend.Logic.simulator import walk_forward_projection

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
    rate, principal = weighted_interest_sum()
    projection_data = walk_forward_projection(principal, 12, rate)
    balance_list = projection_data['balance'].as_matrix().tolist()
    balance_dictionaries = []
    for i in range(len(balance_list)):
        print(i, balance_list[i])
        balance_dictionaries.append(Balance(week=i, balance=balance_list[i]))
    return dict(projection=balance_dictionaries)


if __name__ == '__main__':
    app.run()

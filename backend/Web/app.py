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
    average_weighted_rate, principal = weighted_interest_sum()
    projection_data = walk_forward_projection(principal=principal, rate=average_weighted_rate, months=60)
    balance_list = projection_data['balance'].as_matrix().tolist()
    balance_dictionaries = []

    print('Average Interest Rate: {}'.format(average_weighted_rate))
    print('Term: {}'.format(len(projection_data) - 1))
    print('Monthly Payment ${}'.format(round(projection_data['payment'].ix[1], 2)))

    for i in range(len(balance_list)):
        balance_dictionaries.append(Balance(week=i, balance=balance_list[i]))

    return {
        'projection': balance_dictionaries,
        'interest expense': {
            'daily': average_weighted_rate * principal / 365.25,
            'weekly': average_weighted_rate * principal / 52,
            'monthly': average_weighted_rate * principal / 12,
            'yearly': average_weighted_rate * principal
        }
    }


if __name__ == '__main__':
    app.run()

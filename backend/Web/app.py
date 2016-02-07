from flask import Flask, request
from backend.Web.decorators import json
from backend.Logic.model import weighted_interest_sum
from backend.Logic.fakes import assets, balance_history, Balance
from backend.Logic.simulator import walk_forward_projection, impact_calculator_total

app = Flask(__name__)
temp_message = dict(message='Hello Scotiabank Hacks')
url = 'https://scotiadebt.herokuapp.com/'


@app.route('/')
@json
def index():
    return temp_message


@app.route('/debts', methods=['GET', 'POST'])
@json
def get_debts():
    return dict(firstname='John', lastname='Smith', loans=assets)


@app.route('/history', methods=['GET', 'POST'])
@json
def get_historical_data():
    return dict(history=balance_history)


def get_impact_data():
    #TODO use function from simulator

    #Calculate impact on all the debt vehicles and send to FRONT END
    impact_calculator_total(pv, rate, payments, lumpsum, fv=0)
    pass


@app.route('/projection', methods=['POST'])
@json
def get_debt_projection():

    # Get Post body if it exists
    average_weighted_rate, principal = weighted_interest_sum()

    # TODO Test this SHIT
    # Fuck off prospector this is a fucking hackathon!
    # noinspection PyBroadException
    try:
        payload = request.get_json()
        payment = payload['payment']
        projection_data = walk_forward_projection(principal=principal, rate=average_weighted_rate, payment=payment)
    except:
        projection_data = walk_forward_projection(principal=principal, rate=average_weighted_rate, months=60)

    balance_list = projection_data['balance'].as_matrix().tolist()
    balance_dictionaries = []

    for i in range(len(balance_list)):
        balance_dictionaries.append(Balance(week=i, balance=balance_list[i]))

    response_object = {
        'projection': balance_dictionaries,
        'term': len(projection_data) - 1,
        'payment': round(projection_data['payment'].ix[1], 2),
        'principal_segment': round(projection_data['principal_segment'].ix[1], 2),
        'interest_segment': round(projection_data['interest_segment'].ix[1], 2),
        'interest expense': {
            'daily': average_weighted_rate * principal / 365.25,
            'weekly': average_weighted_rate * principal / 52,
            'monthly': average_weighted_rate * principal / 12,
            'yearly': average_weighted_rate * principal
        }
    }

    print(response_object)
    return response_object


if __name__ == '__main__':
    app.run()

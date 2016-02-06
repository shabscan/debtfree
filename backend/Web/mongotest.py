# DON'T USE THIS SHIT
from pymongo import MongoClient
from pprint import pprint

MONGO_URL = 'mongodb://debtfree1:debtfree12@ds059365.mongolab.com:59365/debtfree'

client = MongoClient(MONGO_URL)
db = client['debtfree']

users = db['User']

c = users.find()
for user in c:
    # Wo Ho
    pprint(user)

import json
from random import random

months = ["January", "February", "March", "April", "May", "June", "July",
          "August", "Septembre", "October", "November", "December"]
year = 2013
principal = 11345
interest = 0.035

payment = 700
owed = 11345
counter = 0
data = []

while owed >= 0:
    data.append(owed)
    if random() < 0.8:
        owed += (owed * interest) - payment
    else:
        owed += owed * interest
    counter += 1
    print(counter)

finalData = []

for i in range(len(data)):
    if i % 12 == 0:
        year += 1
    finalData.append([ months[i % 12] + " " + str(year), data[i] ])

#dataDict[months[i % 12] + " " + str(year)] = data[i]

with open('loanData.json', 'w') as outfile:
    json.dump(finalData, outfile)

# DebtFree

URLs: 

- UserInfo: https://scotiadebt.herokuapp.com/debts
- History: https://scotiadebt.herokuapp.com/history
- Price Projection: https://scotiadebt.herokuapp.com/projection
    - POST {"payment": dollar-amount}
    - NOTE: You do not need to send a POST json body to get a response from the server
- Impact: https://scotiadebt.herokuapp.com/impact
    - POST {"payment": dollar-amount, "lumpsum": dollar-amount}
    - RESPONSE {"impacts": {"money_saved": dollar-amount, "time_saved": days}}

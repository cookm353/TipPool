# TipPool
Another Jasmine testing exercise

## payments.js
* submitPaymentInfo()
    * Adds curPayment to allPayments
    * Updates HTML
    * Resets input
    * Calls `createCurPayment()`, `appendPaymentTable()`, `updateServerTable()`, and `updateSummary()`
* createCurPayemnt()
    * Returns paryment object
    * Calls `calculateTipPercent()`
* appendPaymentTable()
	* Creates new `<tr>`
	* Passes to `appendTd()` w/ input value
    * Calls `appendTd()`
* updateSummary()
	* Makes a new `<tr>`
	* Calls `sumPaymentTotal()`

## helpers.js
* sumPaymentTotal()
* calculateTipPercent()
* appendTd()
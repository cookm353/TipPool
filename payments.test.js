describe("Payments test with set up and tear down", function() {
    beforeEach(function() {
        billAmtInput.value = 100
        tipAmtInput.value = 10
    })

    // Working properly!
    it("should calculate the correct tip percentage", function() {
        submitPaymentInfo()
        
        let tipPct = document.querySelectorAll("#paymentTable td")[2]
        expect(tipPct.innerText).toEqual("10%")
    })

    // Working properly!
    it("shouldn't add new payment info without a bill amount", function() {
        billAmtInput.value = ""
        submitPaymentInfo()

        expect(paymentTbody.innerHTML.trim()).toBeFalsy()
    })

    // Working properly!
    it("shouldn't add new payment info without a tip amount", function() {
        tipAmtInput.value = ""
        submitPaymentInfo()

        expect(paymentTbody.innerHTML.trim()).toBeFalsy()
    })

    // Working properly!
    it("should add the right amount to the bill total", function() {        
        createCurPayment()
        submitPaymentInfo()

        expect(summaryTds[0].innerText).toEqual("$100")
    })

    // Working properly!
    it("should add the right amount to the tip total", function() {
        createCurPayment()
        submitPaymentInfo()

        expect(summaryTds[1].innerText).toEqual("$10")
    })

    // Working properly!
    it("should calculate the correct avg tip percent", function() {
        createCurPayment()
        submitPaymentInfo()

        billAmtInput.value = 100
        tipAmtInput.value = 20
        createCurPayment()
        submitPaymentInfo()

        expect(summaryTds[2].innerText).toEqual("15%")
    })

    // Working properly!
    it("shouldn't create a payment with empty inputs on createCurPayment()", function() {
        billAmtInput.value = ""
        tipAmtInput.value = ""
        let currentPayment = createCurPayment()
        
        expect(currentPayment).toBeFalsy()
    })

    // Working properly!
    it("should create a new payment on createCurPayment()", function() {
        billAmtInput.value = 100
        tipAmtInput.value = 15
        
        payment = {
            billAmt: billAmtInput.value,
            tipAmt: tipAmtInput.value,
            tipPercent: calculateTipPercent(billAmtInput.value, tipAmtInput.value)
        }

        expect(createCurPayment()).toEqual(payment)
    })

    afterEach(function() {
        paymentTbody.innerHTML = ""
        for (let td of summaryTds) { td.innerText = ""}
        
        allPayments = {}
        billAmtInput.value = ""
        tipAmtInput.value = ""
    })
})
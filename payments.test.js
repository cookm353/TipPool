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

    it("shouldn't add new payment info without a bill amount", function() {
        billAmtInput.value = ""

        submitPaymentInfo()
        console.log(paymentTbody.innerHTML)
        console.log(paymentTbody.innerHTML === undefined)
        // expect(paymentTbody.innerHTML).toBe('')
        expect(paymentTbody.innerHTML.trim()).toBeFalsy()
    })

    it("shouldn't add new payment info without a tip amount", function() {
        tipAmtInput.value = ""

        submitPaymentInfo()
        console.log(paymentTbody.innerHTML === "")
        console.log(paymentTbody.innerHTML)
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

    // it("should ")

    afterEach(function() {
        let summaryTbody = document.querySelector("#summaryTable tbody")
        paymentTbody.innerHTML = ""
        allPayments = {}
        summaryTbody.innerHTML = ""
    })
    
    afterAll(function() {
        billAmtInput.value = ""
        tipAmtInput.value = ""
    })
})
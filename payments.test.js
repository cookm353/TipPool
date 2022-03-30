describe("Payments test with set up and tear down", function() {
    beforeEach(function() {
        billAmtInput.value = 40
        tipAmtInput.value = 8
    })

    it("should calculate the correct tip percentage", function() {
        submitPaymentInfo()
        
        let tipPct = document.querySelectorAll("#payment1 td")[2]
        // console.log(tipPct.innerText)
        expect(tipPct.innerText).toEqual("20%")
    })

    it("shouldn't add new payment info without a bill amount", function() {
        billAmtInput.value = ""

        submitPaymentInfo()
        expect(paymentTbody.innerHTML).toEqual("")
    })

    it("shouldn't add new payment info without a tip amount", function() {
        tipAmtInput.value = ""

        submitPaymentInfo()
        expect(paymentTbody.innerHTML).toEqual("")
    })

    // it("should add the right amount to the bill total", function() {

    // })

    // it("should add the right amount to the tip total", function() {
        
    // })

    // it("should calculate the correct avg tip percent", function() {

    // })

    // it("should ")

    afterEach(function() {
        let summaryTbody = document.querySelector("#summaryTable tbody")
        paymentTbody.innerHTML = ""
        summaryTbody.innerHTML = ""
    })

    afterAll(function() {
        billAmtInput.value = ""
        tipAmtInput.value = ""
    })
})
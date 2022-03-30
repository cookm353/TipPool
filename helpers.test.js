describe("Helpers test", () => {
    beforeEach(function() {
        // Build allPayments
        const payment1 = { billAmt: "100", tipAmt: "20", tipPercent: 20 }
        const payment2 = { billAmt: "100", tipAmt: "15", tipPercent: 15 }
        allPayments = { payment1: payment1, payment2: payment2}

    })
    
    it("should calculate the right payment total", function() {
        expect(sumPaymentTotal("billAmt")).toEqual(200)
    })

    it("should find the right tip percent", function() {
        let billAmt = 100
        let tipAmt = 15

        expect(calculateTipPercent(billAmt, tipAmt)).toEqual(15)
    })

    it("should add a new td", function() {
        const newRow = document.createElement("tr")
        serverTbody.append(newRow)
        appendTd(newRow, "Foo")

        expect(newRow.innerHTML).not.toEqual("")

    })

    afterEach(function() {
        serverTbody.innerHTML = ""
        allPayments = {}
        paymentId = 0
    })
})
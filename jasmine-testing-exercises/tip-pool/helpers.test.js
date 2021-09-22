describe("Helpers test (with setup and tear-down)", function () {
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 10;
        tipAmtInput.value = 2;
        submitPaymentInfo();
    });

    it('Should sum total of bill and tip', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(2);
        expect(sumPaymentTotal('billAmt')).toEqual(10);


        billAmtInput.value = 20;
        tipAmtInput.value = 5;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(7);
        expect(sumPaymentTotal('billAmt')).toEqual(30);

    });
    it('Should sum total of tipPercent', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);


        billAmtInput.value = 20;
        tipAmtInput.value = 4;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(40);


    });

    it('Should calculate tip percentage', function () {

        expect(calculateTipPercent(10, 2)).toEqual(20);

        //Why when I pass in billAmt and tipAmt calculateTipPercent returns NaN??
    })

    it('Should create new TD from value and append to tr', function () {
        let thisTr = document.createElement('tr');
        appendTd(thisTr, 'something');
        expect(thisTr.children.length).toEqual(1);
        expect(thisTr.firstChild.innerHTML).toEqual('something');
    })

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });

});



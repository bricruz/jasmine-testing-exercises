describe("Payments test (with setup and tear-down)", function () {
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = '10';
        tipAmtInput.value = '2';
    });

    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual('10');
        expect(allPayments['payment' + paymentId].tipAmt).toEqual('2');
        expect(allPayments['payment' + paymentId].tipPercent).toEqual(20);
    });

    it('should not add a new payment to allPayments with empty inputs on createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        createCurPayment();
        expect(Object.keys(allPayments).length).toEqual(0);

    });

    it('should update payment table on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerText).toEqual('$10');
        expect(curTdList[1].innerText).toEqual('$2');
        expect(curTdList[2].innerText).toEqual('20%');


        //code adapted from Springboard Tip Pool Solution
    })



    afterEach(function () {
        // teardown logic
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        paymentId = 0;
        summaryTds[0].innerHTML = '$' + '';
        summaryTds[1].innerHTML = '$' + '';
        summaryTds[2].innerHTML = '';
        allPayments = {};

    });
});
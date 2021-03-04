describe("Helpers test (with setup and tear-down)", function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();

    });

    it('should sum up the bill and tip ', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
        expect(sumPaymentTotal('billAmt')).toEqual(300);
      });

      it('should create delete button', function () {
        let newTr = document.createElement('tr');
    
        appendDeleteBtn(newTr);
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
      });


    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });
});


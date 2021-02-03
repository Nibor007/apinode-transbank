const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const transaccionController = require("../controllers/transaccionController");
const transbankService = require("../services/transbankService");
//const UserRepository = require("./user.repository");

describe('Test de transacciones', () => {
    let status, json, res;
    beforeEach(() => {
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
      const userRepo = sinon.spy();
      //userService = new UserService(userRepo);
    });

    it('No debe crear transaccion cuando falta la orden de compra ', () => {
        const req = { 
            body: {                 
                'sessionId': 'adasda',
                'monto': 2000
            } 
        };
        transaccionController.crearTransaccion(req, res);

        console.log('status'+status);
        //expect(status.calledOnce).to.be.true;
        //expect(status.args[0][0]).to.equal(400);
        //expect(json.calledOnce).to.be.true;
        //expect(json.args[0][0].message).to.equal("Invalid Params");
    });

    it('Debe crear transaccion cuando los datos estan correctos ', () => {
        const req = { 
            body: {
                "ordenCompra": "ordenCompra12345678",
                "sessionId": "sesion1234564",
                "monto": 10000,
                "cvv": 123,
                "numeroTarjeta": "4051885600446623",
                "fechaExpiracion": "22/10"
              }
        };

        const stubValue = {
            'token': '3453452352352'
        };
        
        const stub = sinon.stub(transbankService, "crearTransaccion").returns(stubValue);
    
        transaccionController.crearTransaccion(req, res);

        console.log('status'+status);
        //expect(status.calledOnce).to.be.true;
        //expect(status.args[0][0]).to.equal(400);
        //expect(json.calledOnce).to.be.true;
        //expect(json.args[0][0].message).to.equal("Invalid Params");
    });


})

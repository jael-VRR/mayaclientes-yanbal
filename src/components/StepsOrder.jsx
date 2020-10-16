import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import btnBack from '../images/btn_back.png';
import btnNext from '../images/btn_next.png';
import Calendar from './calendar/Calendar';

export class StepsOrder extends Component {
  render() {
    const { inputChange, nextStep, prevStep, step,} = this.props;
    return (
      <>
        <div className="form-container" hidden={step === 1 ? false : true }>
          <div className="App">
            <p className="txt-info-register">Registra aquí el monto al que estas comprando los productos en este pedido.</p>
            <h1 className="mb-5">Ingresar monto del pedido</h1>
          </div>
          <div className="form-group form-register">
            <input type="text" className="form-control input-register" placeholder="monto del pedido" name="name" onChange={inputChange('name')}  />
          </div>
          <br />
          <div className="div-btn btn-dorwn">
            <div className="">
              <button className="btn btn-danger btn-form" onClick={prevStep}>
                  <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
                  <p className="txt-btn-form">Volver</p>
              </button>
            </div>
            <div className="">
              <button className="btn btn-primary btn-form" onClick={nextStep}>
                <p className="txt-btn-form">Siguiente</p>
                <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
              </button>
            </div>
          </div>
        </div>

        <div className="form-container" hidden={step === 2 ? false : true }>
          <div className="App">
            <p className="txt-info-register">Registra aquí el monto al que estas dejando los productos a tu cliente.</p>
            <h1 className="mb-5">Ingresa monto a cobrar</h1>
          </div>
          <div className="form-group form-register">
            <input type="email" className="form-control input-register" placeholder="Ingresar monto a cobrar" name="email" onChange={inputChange('email')} />
          </div>
          <div className="div-btn btn-dorwn">
            <div className="">
              <button className="btn btn-danger btn-form" onClick={prevStep}>
                  <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
                  <p className="txt-btn-form">Volver</p>
              </button>
            </div>
            <div className="">
              <button className="btn btn-primary btn-form" onClick={nextStep}>
                <p className="txt-btn-form">Siguiente</p>
                <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
              </button>
            </div>
          </div>
        </div>

        <div className="form-container" hidden={step ===  3? false : true }>
          <div className="App">
            <p className="txt-info-register">Ingresar fecha máxima,en la que estas acordando el pago de este pedido con tu cliente.</p>
            <h1 className="mb-5">Ingresa fecha de pago</h1>
          </div>
          {/*<div className="form-group form-register">
            <p>Calendario</p>
            <div className="card">
              <Calendar
              //onChange={onChange}
              //client={client}
              />
            </div>
           </div>*/}
          <div className="div-btn btn-dorwn">
            <div className="">
              <button className="btn btn-danger btn-form" onClick={prevStep}>
                  <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
                  <p className="txt-btn-form">Volver</p>
              </button>
            </div>
            <div className="">
              <button className="btn btn-primary btn-form" onClick={nextStep}>
                <p className="txt-btn-form">Siguiente</p>
                <img src={btnNext} className="icon-next-form" alt="icon-next-form" />
              </button>
            </div>
          </div>
        </div>
     </>
    );
  }
}

export default StepsOrder;
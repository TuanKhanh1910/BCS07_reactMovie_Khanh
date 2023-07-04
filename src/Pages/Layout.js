import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Layout extends Component {
  state = {
    value: {
      name: "",
      numberSeat: "",
    },
  };
  render() {
    return (
      <div>
        <h1>Trang đặt vé xem phim</h1>
        <div className="container">
          <div className="movie">
            <div className="inputForm">
              <h2>Vui lòng điền thông tin</h2>
              <form>
                <div className="form_left">
                  <p htmlFor="">Name</p>
                  <input
                    id="name"
                    type="text"
                    placeholder="vui lòng điền tên"
                  />
                </div>
                <div className="form_right">
                  <p htmlFor="">Số ghế muốn đặt</p>
                  <input
                    id="numberSeat"
                    type="number"
                    required
                    min={1}
                    placeholder="vui lòng chọn số ghế"
                  />
                </div>
              </form>
              <NavLink to="/bookticket" className="btnDatVe">
                <button>Start Selecting</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

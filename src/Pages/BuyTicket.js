import React, { Component } from "react";

export default class BuyTicket extends Component {
  render() {
    return (
      <div>
        <p className="final-confirm">
          Cảm ơn quý khách đã đến với
          <strong> Cinestar </strong> !
          <br />
          Xin quý khách vui lòng kiểm tra lại thông tin đặt vé
        </p>
        <div className="container">
          <table class="table Displaytable text-center text-white">
            <thead>
              <tr>
                <th scope="col">Tên</th>
                <th scope="col">Số vé</th>
                <th scope="col">Vị trí chỗ ngồi</th>
                <th scope="col">Giá Tiền</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    );
  }
}

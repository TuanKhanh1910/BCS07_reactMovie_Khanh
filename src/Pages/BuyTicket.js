import React, { Component } from "react";
import { connect } from "react-redux";

class BuyTicket extends Component {
  // state = {
  //   tongTien: [],
  // };
  // tinhTongTien = (item2) => {
  //   item.arrGheDaChon.map((item2) => {
  //     let newTongTien = [...this.state.tongTien];
  //     newTongTien.push(item2.gia);
  //     this.setState({
  //       tongTien: newTongTien,
  //     });
  //     return this.state;
  //   });
  // };

  render() {
    // console.log(this.props);
    return (
      <div>
        <p className="final-confirm">
          Cảm ơn quý khách đã đến với
          <strong> Cinestar </strong> !
          <br />
          Xin quý khách vui lòng kiểm tra lại thông tin đặt vé
        </p>
        <div className="container">
          <table className="table Displaytable text-center text-white">
            <thead>
              <tr>
                <th scope="col">Tên</th>
                <th scope="col">Số vé</th>
                <th scope="col">Vị trí chỗ ngồi</th>
                <th scope="col">Giá Tiền</th>
              </tr>
            </thead>
            <tbody>
              {this.props.tickets.arrInfoUser.map((item, index) => {
                return (
                  <tr key={index}>
                    <td scope="col">{item.chiTietGhe.tenDaDat}</td>
                    <td scope="col">{item.chiTietGhe.soLuongGheDaChon}</td>
                    <td scope="col">
                      {item.arrGheDaChon.map((item1, index1) => {
                        if (
                          index1 ==
                          this.props.tickets.arrGheDaChon.length - 1
                        ) {
                          return item1.soGhe;
                        } else {
                          return item1.soGhe + "-";
                        }
                      })}
                    </td>
                    <td scope="col">
                      {item.arrGheDaChon
                        .reduce((acc, cur) => {
                          return acc + cur.gia;
                        }, 0)
                        .toLocaleString("en-US")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    tickets: state.product,
  };
};
export default connect(mapStatetoProps)(BuyTicket);

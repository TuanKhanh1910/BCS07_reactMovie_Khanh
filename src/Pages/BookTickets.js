import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class BookTickets extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>CineStar CyberMovie</h1>
        <div className="cinema-wrap">
          <ul className="cinema-note">
            <li className="single">Ghế trống</li>
            <li className="choosing">Ghế đang chọn</li>
            <li className="busy">Ghế đã mua</li>
          </ul>
        </div>

        <div className="seatStructure txt-center">
          <table>
            <tbody>
              <tr>
                <td />
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>

                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
              </tr>
              {this.props.tickets.arrSoGhe.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.hang}</td>
                    {item.danhSachGhe.map((item1, index1) => {
                      return (
                        <td key={index1}>
                          <div className="single">
                            <div className="seat">{item1.soGhe}</div>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="screen">
            <div className="wthree">Màn Hình</div>
          </div>
        </div>
        <div className="buyTicket">
          <NavLink className="goToHome" to="/">
            Quay lại
          </NavLink>
          <NavLink className="goToBuy" to="/buyticket">
            Thanh Toán
          </NavLink>
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
export default connect(mapStatetoProps)(BookTickets);

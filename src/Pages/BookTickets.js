import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import TicketsDetail from "./TicketsDetail";
import data from "./data.json";
class BookTickets extends Component {
  state = {
    soGheDangChon: 0,
    arrSoLuongGheDaChon: [],
    arrThanhToan: [],
  };
  btnThanhToan = () => {
    let newArThanhToan = this.state.arrThanhToan;

    newArThanhToan.push(this.props.tickets);
    this.setState({
      ...this.state,
      arrThanhToan: newArThanhToan,
    });
    this.props.showThongTin(this.state.arrThanhToan);
  };
  render() {
    console.log(this.props);
    console.log(this.state.arrThanhToan);
    // console.log("soGheDangChon", this.state.soGheDangChon);
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
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.hang}</td>
                    {item.danhSachGhe?.map((item1, index1) => {
                      return (
                        <td
                          key={index1}
                          onClick={() => {
                            // nó sẽ + 1 khi người dùng click vào ghế
                            this.setState({
                              soGheDangChon: this.state.soGheDangChon + 1,
                            });
                          }}
                        >
                          <TicketsDetail
                            newSeatArr={this.state.arrSoLuongGheDaChon}
                            checkTicket={this.state.soGheDangChon}
                            item={item1}
                          />
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
          <NavLink
            onClick={this.btnThanhToan}
            className="goToBuy"
            to="/buyticket"
          >
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
const mapDispatchtoProps = (dispatch) => {
  return {
    showThongTin: (item) => {
      const action = {
        type: "SHOWINFO",
        payload: item,
      };
      // console.log("action: ", action);
      dispatch(action);
    },
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(BookTickets);

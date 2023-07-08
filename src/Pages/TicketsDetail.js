import React, { Component } from "react";
import { connect } from "react-redux";

class TicketsDetail extends Component {
  state = {
    notIsBooked: {
      backround: "single",
      chair: "seat",
    },
  };
  handleOnclick = () => {
    // console.log(this.props.tickets.chiTietGhe.soLuongGheDaChon);
    // console.log(this.props.tickets.arrGheDaChon.length());
    // console.log(
    //   this.props.tickets.chiTietGhe.soLuongGheDaChon < this.props.checkTicket
    // );
    let index = this.props.tickets.arrGheDaChon.findIndex(
      (ghe) => ghe.soGhe == this.props.item.soGhe
    );
    if (
      this.props.tickets.chiTietGhe.soLuongGheDaChon <
        this.props.tickets.arrGheDaChon.length + 1 &&
      index == -1
    ) {
      alert("Vui Lòng chọn đúng số lượng ghế đã chọn !");
    } else {
      // console.log("1");
      // console.log(this.props.tickets.arrGheDaChon.length);
      // console.log(this.props.item.soGhe);
      // console.log(index);
      console.log(this.props.tickets.chiTietGhe.soLuongGheDaChon);
      console.log(this.props.tickets.arrGheDaChon.length + 1);
      if (index == -1) {
        this.setState({
          ...this.state,
          notIsBooked: {
            backround: "singleBlue",
            chair: "choosingSeat",
          },
        });
      } else {
        this.setState({
          ...this.state,
          notIsBooked: {
            backround: "single",
            chair: "seat",
          },
        });
      }
      // console.log("2");
      this.props.addToSeat(this.props.item);

      // newSeatArr chính là cái props được gọi từ arrSoLuongGheDaChon ở bên component BookTickets
      // this.props.newSeatArr.push(this.props.item);
      // console.log("this.props.newSeatArr: ", this.props.newSeatArr);
      // let arr = this.props.newSeatArr;
      // console.log("arr: ", arr);
      // this.props.addToSeat(arr);
    }
  };

  render() {
    // console.log(this.props.tickets.arrGheDaChon);
    let { item, checkTicket } = this.props;
    if (item.daDat) {
      // nếu ghê true đã đặt thì nó sẽ chuyển sang màu xanh lá
      return (
        <div className="singleGreen">
          <div className="pickedSeat">{item.soGhe}</div>
        </div>
      );
    } else {
      return (
        <div
          onClick={() => {
            this.handleOnclick();
          }}
          className={this.state.notIsBooked.backround}
        >
          <div className={this.state.notIsBooked.chair}>{item.soGhe}</div>
        </div>
      );
    }
  }
}

const mapStatetoProps = (state) => {
  return {
    tickets: state.product,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    addToSeat: (item) => {
      const action = {
        type: "CANCLEGHE",
        payload: item,
      };
      // console.log("action: ", action);
      dispatch(action);
    },
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(TicketsDetail);

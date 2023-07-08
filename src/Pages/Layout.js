import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { withRouter } from "../router/WithRouter";

class Layout extends Component {
  state = {
    value: {},
    error: {
      name: "",
      numberSeat: "",
    },
    disableButton: true,
  };
  getValue = (event) => {
    let { id, value } = event.target;
    const newValue = { ...this.state.value };
    newValue[id] = value;

    let newError = this.state.error;
    let type = event.target.getAttribute("data-type");
    if (newValue[id] == "") {
      newError[id] = "Vui lòng nhập đầy đủ thông tin ";
    } else {
      newError[id] = "";
      switch (type) {
        case "number":
          {
            let regexNumber = /^[0-9]*$/;
            let result = regexNumber.test(newValue[id]);
            newError[id] = result ? "" : id + "phải là số";
          }
          break;
        case "letter": {
          let regexLetter = /^[\p{L} ]+$/u;
          let result = regexLetter.test(newValue[id]);
          if (!result) {
            newError[id] = `${id} phải là chữ`;
          }
          newError[id] = result ? "" : id + " phải là chữ";
        }
        default:
          break;
      }
    }
    let valid = false;
    for (let item in newError) {
      if (newError[item] !== "" || newValue[item] == "") {
        valid = true;
      }
    }
    this.setState({
      ...this.state,
      value: newValue,
      errors: newError,
      disableButton: valid,
    });
    console.log(valid);
    // this.setState({
    //   errors: newError,
    //   disableButton: valid,
    // });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // sử dụng this.props.navigate để thay thế cho thẻ navlink để chuyển qua trang khác.
    // và điều quan trọng là phải tạo ra 1 file cho WithRouter
    // console.log(this.state.error);
    this.props.addToValue({
      tenDaDat: this.state.value.name,
      soLuongGheDaChon: this.state.value.numberSeat * 1,
    });
    this.props.navigate("/bookticket");

    console.log(this.state.value);
  };

  render() {
    return (
      <div>
        <h1>Trang đặt vé xem phim</h1>
        <div className="container">
          <div className="movie">
            <div>
              <h2>Vui lòng điền thông tin</h2>
              <form onSubmit={this.handleSubmit}>
                <div className="row inputForm">
                  <div className="col-6">
                    <p htmlFor="">Name</p>
                    <input
                      id="name"
                      type="text"
                      placeholder="vui lòng điền tên"
                      data-type="letter"
                      onChange={this.getValue}
                    />
                    <p>{this.state.error.name}</p>
                  </div>
                  <div className="col-6">
                    <p htmlFor="">Số ghế muốn đặt</p>
                    <input
                      onChange={this.getValue}
                      id="numberSeat"
                      type="number"
                      data-type="number"
                      required
                      min={1}
                      placeholder="vui lòng chọn số lượng "
                    />
                    <p>{this.state.error.numberSeat}</p>
                  </div>
                </div>
                {/* <NavLink className="btnDatVe"> */}
                <button
                  disabled={this.state.disableButton}
                  className="btnDatVe"
                  type="submit"
                >
                  Start Selecting
                </button>
                {/* </NavLink> */}
              </form>
              {/* to="/bookticket" */}
            </div>
          </div>
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
    addToValue: (item) => {
      const action = {
        type: "DATGHE",
        payload: item,
      };
      console.log("action: ", action);
      dispatch(action);
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(withRouter(Layout));

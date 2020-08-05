import React, { Component } from "react";
import { connect } from "react-redux";
import { initLogin, userLogin } from "../../redux/actions";
import { Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { history } from "../../utils/history";
import logo from "../../../src/assets/imgs/logo.png";
import eye from "../../../src/assets/imgs/eye.png";
import { Link } from "react-router-dom";
import Select from "react-select";
import Config from "../../services/config";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      typePassInput: true,
      count: 0,
      server: {
        label: "Chọn server",
        value: "",
      },
      serverOptions: [
        { label: "Sever Staging", value: "staging" },
        { label: "Server Develop", value: "develop" },
      ],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    let { user, error } = this.props;
    if (user && user !== prevProps.user) {
      if (user?.level > 1) {
        history.push("/dashboard");
      } else {
        history.push("/dashboard");
      }
    }
    if (error && error !== prevProps.error) {
    }
  }

  handleSubmit = async (event, errors, values) => {
    if (!errors.length) {
      this.props.userLogin(values);
    }
  };
  onClickChangeServer = () => {
    let { count } = this.state;
    count += 1;
    this.setState({ count });
  };
  onChangeServer = (server) => {
    const config = Config.getInstance();
    config.setConfig(server.value);
    this.setState({ count: 0 });
  };

  render() {
    let { typePassInput, server, serverOptions, count } = this.state;
    let type = typePassInput ? "password" : "text";
    return (
      <div className="login-container">
        <AvForm className="login-form" onSubmit={this.handleSubmit}>
          <span className="login-logo" onClick={this.onClickChangeServer}>
            <img src={logo} />
          </span>
          <h1>Đăng nhập tài khoản</h1>
          <AvField
            placeholder="Tên đăng nhập hoặc số điện thoại"
            autoComplete="username"
            name="email"
            type="text"
            validate={{
              required: {
                value: true,
                errorMessage:
                  "Vui lòng nhập tên đăng nhập hoặc số điện thoại của bạn",
              },
              // pattern: {value: regexEmail, errorMessage: 'Invalid emmail'},
            }}
          />
          <div className="pass-box">
            <AvField
              type={type}
              placeholder="Mật khẩu"
              autoComplete="off"
              name="password"
              validate={{
                required: {
                  value: true,
                  errorMessage: "Vui lòng nhập mật khẩu của bạn",
                },
                // minLength : { value:5, errorMessage : 'Min length is 5'}
              }}
            />
            <img
              src={eye}
              onClick={() =>
                this.setState({ typePassInput: !this.state.typePassInput })
              }
            />
          </div>
          <div className="form-group login-option-box">
            <div className=" d-flex justify-content-end ">
              {/* <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck"
                name="example1"
              />
              <label className="custom-control-label" htmlFor="customCheck">
                Lưu mật khẩu
              </label> */}
              <Link to="/forgot-pass">Quên mật khẩu ?</Link>
            </div>
          </div>
          <div className="form-group">
            <Button color="primary login-btn">ĐĂNG NHẬP</Button>
          </div>
          {count > 5 && (
            <div className="form-group select__sever">
              <Select
                value={server}
                onChange={this.onChangeServer}
                options={serverOptions}
                className="select-async"
              />
            </div>
          )}
        </AvForm>
      </div>
    );
  }
}

function mapStateToProps({ userReducer }) {
  const { error, user } = userReducer;
  return { error, user };
}

export default connect(mapStateToProps, { initLogin, userLogin })(Login);

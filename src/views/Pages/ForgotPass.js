import React, { Component } from "react";
import { Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import logo from "../../../src/assets/imgs/logo.png";
import { regexEmail } from "../../constants/Constant";
import { showToast } from "../../utils/userServices";
import API from "../../services/api";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      currentStep: 1,
      isLoading: false,
      tokenCapcha: "",
      capchaError: "",
      rePassError: "",
    };
  }

  componentDidMount() {
    const query = this.props.location.search;
    if (query.indexOf("?code") > -1) {
      const code = query.substr("?code".length + 1);
      this.setState({
        code,
        currentStep: 3,
      });
    }
  }

  handleSubmitEmail = async (event, errors, values) => {
    if (!this.state.tokenCapcha) {
      this.setState({
        capchaError: "Vui lòng chọn Capcha",
      });
      return;
    }

    if (!errors.length) {
      const email = values.email;
      let [err, res] = await API.userService.postCreateLink({ email });
      if (res) {
        this.setState({ currentStep: 2 });
      } else {
        showToast("error", err || "Vui lòng thử lại sau");
      }
    }
  };

  handleSubmitUpdatePassword = async (event, errors, values) => {
    if (!this.state.tokenCapcha) {
      this.setState({
        capchaError: "Vui lòng chọn Capcha",
      });
      return;
    }

    if (!errors.length) {
      const newPassword = values.newPassword;
      const reNewPassword = values.reNewPassword;

      if (newPassword !== reNewPassword) {
        this.setState({
          rePassError: "Mật khẩu không khớp",
        });
      } else {
        let [err, res] = await API.userService.postChangePassword({
          code: this.state.code,
          password: newPassword,
        });
        if (res) {
          showToast("success", "Cập nhật mật khâu thành công");
          setTimeout(() => {
            window.location.replace("/login");
          }, 3000);
        } else {
          showToast("error", err || "Vui lòng thử lại sau");
        }
      }
    }
  };

  onCapchaChange = (value) => {
    this.setState({
      tokenCapcha: value,
      capchaError: "",
    });
  };

  render() {
    return (
      <div className="login-container">
        {this.state.currentStep === 2 && (
          <div className="reset-form">
            <div className="reset-text">
              Link reset mật khẩu đã được gửi vào email của bạn, vui lòng check
              email và làm theo hướng dẫn
            </div>
          </div>
        )}
        {this.state.currentStep === 1 && (
          <AvForm className="login-form" onSubmit={this.handleSubmitEmail}>
            <span className="login-logo">
              <img src={logo} />
            </span>
            <h1>Lấy lại mật khẩu</h1>

            <AvField
              placeholder="Nhập Email"
              autoComplete="username"
              name="email"
              type="text"
              validate={{
                required: {
                  value: true,
                  errorMessage: "Vui lòng nhập email",
                },
                pattern: {
                  value: regexEmail,
                  errorMessage: "Email không hợp lệ",
                },
              }}
            />
            <div className="form-group">
              <ReCAPTCHA
                sitekey="6Lf0wKUZAAAAAHsBuEJuUDdtll_oXezzQqkDUbBr"
                onChange={this.onCapchaChange}
              />
              <div className="error-text">{this.state.capchaError}</div>
            </div>

            <div className="form-group mt-30">
              <Button color="primary login-btn">LẤY LẠI MẬT KHẨU</Button>
            </div>
            <Link className="text-center" to="/login">
              Đăng nhập
            </Link>
          </AvForm>
        )}
        {this.state.currentStep === 3 && (
          <AvForm
            className="login-form"
            onSubmit={this.handleSubmitUpdatePassword}
          >
            <span className="login-logo">
              <img src={logo} />
            </span>
            <h1>Cập nhật mật khẩu mới</h1>
            <div className="form-group">
              <AvField
                placeholder="Nhập mật khẩu mới"
                autoComplete="newPassword"
                name="newPassword"
                type="password"
                validate={{
                  required: {
                    value: true,
                    errorMessage: "Vui lòng nhập mật khẩu mới",
                  },
                }}
              />
            </div>

            <div className="form-group">
              <AvField
                placeholder="Nhập lại mật khẩu mới"
                autoComplete="reNewPassword"
                name="reNewPassword"
                type="password"
                validate={{
                  required: {
                    value: true,
                    errorMessage: "Vui lòng nhập lại mật khẩu mới",
                  },
                }}
              />
              <div className="error-text">{this.state.rePassError}</div>
            </div>

            <div className="form-group">
              <ReCAPTCHA
                sitekey="6Lf0wKUZAAAAAHsBuEJuUDdtll_oXezzQqkDUbBr"
                onChange={this.onCapchaChange}
              />
              <div className="error-text">{this.state.capchaError}</div>
            </div>

            <div className="form-group mt-30">
              <Button color="primary login-btn">Cập nhật mật khẩu</Button>
            </div>
            <Link to="/login">Đăng nhập</Link>
          </AvForm>
        )}
      </div>
    );
  }
}

export default ForgotPass;

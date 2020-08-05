import React, { Component } from "react";
import Switch from "react-switch";
import { AlertConfirm } from "../utils/userServices";

export default class SwitchButton extends Component {
  constructor() {
    super();
    this.state = { checked: true };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    let checked = this.convertStatus(this.props.status);
    this.setState({ checked });
  }

  convertStatus(status) {
    if (status === 1) return true;
    return false;
  }
  parseConvertStatus(status) {
    if (status) return 1;
    return 0;
  }

  async handleChange(checked) {
    let { data } = this.props;
    let status = await AlertConfirm(data?.tendangnhap, data?.trangthai);
    if (status) {
      let { id } = this.props.data;
      this.setState({ checked });
      let status = this.parseConvertStatus(checked);
      this.props.onChange(id, status);
    }
  }

  render() {
    let { width, height, offColor, onColor, containerStyle } = this.props;
    return (
      <label style={{ ...containerStyle }}>
        <Switch
          onChange={this.handleChange}
          width={width ? width : 40}
          height={height ? height : 20}
          offColor={offColor ? offColor : "#ccc"}
          onColor={onColor ? onColor : "#00BCD4"}
          checked={this.state.checked}
        />
      </label>
    );
  }
}

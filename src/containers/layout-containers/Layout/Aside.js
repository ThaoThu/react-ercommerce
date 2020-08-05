import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { children, ...attributes } = this.props;
    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '1' })}
                     onClick={() => {
                       this.toggle('1');
                     }}>
              <i className="icon-list"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '2' })}
                     onClick={() => {
                       this.toggle('2');
                     }}>
              <i className="icon-speech"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '3' })}
                     onClick={() => {
                       this.toggle('3');
                     }}>
              <i className="icon-settings"></i>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup className="list-group-accent" tag={'div'}>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Hôm nay</ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>Họp tại <strong>Trường THCS Yên Hoà</strong> </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar"></i>&nbsp; 1 - 3 chiều
                </small>
                <small className="text-muted">
                  <i className="icon-location-pin"></i> Diễn Châu, Nghệ An
                </small>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-info list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>Gặp thanh tra <strong> Phòng GD</strong></div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar"></i>&nbsp; 4 - 5 chiều
                </small>
                <small className="text-muted">
                  <i className="icon-social-skype"></i> Diễn Châu, Nghệ An
                </small>
              </ListGroupItem>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Hôm qua</ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-danger list-group-item-divider">
                <div><strong>Huấn luyện HSG</strong></div>
                <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 8 - 11 sáng</small>
                <small className="text-muted"><i className="icon-home"></i>&nbsp; Trường THCS Yên Hoà</small>
                <div className="avatars-stack mt-2">
                  <div className="avatar avatar-xs">
                    <img src={'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-success list-group-item-divider">
                <div><strong>Họp báo cáo kết quả kỳ 1</strong></div>
                <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 1 - 3 chiều</small>
                <small className="text-muted"><i className="icon-location-pin"></i>&nbsp; Trường THCS Yên Hoà</small>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-primary list-group-item-divider">
                <div><strong>Họp dự thảo sửa đổi</strong></div>
                <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 4 - 6 chiều</small>
                <small className="text-muted"><i className="icon-home"></i>&nbsp; Sở GD Tỉnh Nghệ An</small>
                <div className="avatars-stack mt-2">
                  <div className="avatar avatar-xs">
                    <img src={'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </TabPane>
          <TabPane tabId="2" className="p-3">
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div className="text-truncate font-weight-bold">Nguyễn Thị Thu Thuỷ</div>
              <div>
                <small className="text-muted font-weight-lighter">Thanh tra phòng GD</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <small className="text-muted">Mai có cuộc họp quan trọng, Em có đi được không?
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div className="text-truncate font-weight-bold">Bùi Bá Nhật Huy</div>
              <div>
                <small className="text-muted font-weight-lighter">Trưởng phòng GD</small>
                <small className="text-muted float-right mt-1">2:45 PM</small>
              </div>
              <small className="text-muted">Ngày kia em sắp xếp cuộc họp với lãnh đạo trường THCS Yên Hoà nhé?
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div className="text-truncate font-weight-bold">Nguyễn Xuân Toàn</div>
              <div>
                <small className="text-muted font-weight-lighter">Hiệu Trưởng THCS Yên Hoà </small>
                <small className="text-muted float-right mt-1">7:52 AM</small>
              </div>
              <small className="text-muted">Ngày mai chúng tôi sẽ sắp sếp để gặp mặt trưởng phòng GD.
              </small>
            </div>
            <hr />
            
          </TabPane>
          <TabPane tabId="3" className="p-3">
            <div className="aside-options">
              <div className="clearfix mt-4">
                <small><b>Option 1</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} defaultChecked size={'sm'}/>
              </div>
              <div>
                <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Option 2</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} size={'sm'}/>
              </div>
              <div>
                <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <hr />
            
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;

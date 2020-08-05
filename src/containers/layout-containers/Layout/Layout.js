import React, { Suspense } from "react";
import * as router from "react-router-dom";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from "@coreui/react";
// import {navigation} from '../../../_nav';

// import routes from '../../../routes';
import {
  getCapHoc,
  getDantoc,
  getDienchinhsach,
  getHinhthuchopdong,
  getKhuvuc,
  getLydonghihoc,
  getQuocgia,
  getTinhthanhpho,
  getTongiao,
  getTrangThai,
  userLogout,
} from "../../../redux/actions";
import Mainroutes from "../../../routes/Mainroutes";
import Authen from "../../../services/api/authen";
import Permissions from "../../../services/user-permission.service";
import { userService } from "../../../utils/userServices";
import { navigation } from "../../../routes/_nav";
let info = Authen.getInstance();

const DefaultAside = React.lazy(() => import("./Aside"));
const DefaultFooter = React.lazy(() => import("./Footer"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));
const DefaultNavLeft = React.lazy(() => import("./HeaderLeft"));

class DefaultLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      navs: [],
      //   isOpen: false,
      //   title: "Chọn học kỳ",
    };
  }
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  signOut(e) {
    e.preventDefault();
    this.props.userLogout();
    this.props.history.push("/login");
  }
  componentDidMount() {
    // this.initPermissonCheck();
    //this.getConfigAuthen();
    this.initDataSystem();
  }

  initDataSystem() {
    // this.props.getDantoc();
    // this.props.getTongiao();
    // this.props.getHinhthuchopdong();
    // this.props.getKhuvuc();
    // this.props.getQuocgia();
    // this.props.getLydonghihoc();
    // this.props.getDienchinhsach();
    // this.props.getTinhthanhpho();
    // this.props.getCapHoc();
    // this.props.getTrangThai();
  }
  getConfigAuthen() {
    const authen = Authen.getInstance();
    if (authen.semester && authen.yearTimeWork) {
      let yearTimeWork = authen.yearTimeWork.split("-");
      let title =
        " Học kỳ " +
        authen.semester +
        " Năm học " +
        yearTimeWork[0] +
        " - " +
        yearTimeWork[1];
      this.setState({ title });
    }
  }
  initPermissonCheck() {
    if (info.isLogined) {
      const permisson = Permissions.getInstance();
      let navs = permisson.initNavigations();
      this.setState({ navs });
    }
  }

  render() {
    let { navs, isOpen, title } = this.state;
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader
              onLogout={(e) => this.signOut(e)}
              navConfig={{ items: navs }}
              onSetTime={this.onSetTime}
              title={title}
            />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav
                navConfig={navigation}
                {...this.props}
                router={router}
              />
            </Suspense>
            <AppSidebarFooter />
            {/* <AppSidebarMinimizer /> */}
          </AppSidebar>
          <main className="main">
            <Container fluid>
              {/* {isOpen && (
                <Modal
                  isOpen={isOpen}
                  title={"Thay đổi học kỳ, năm học làm việc"}
                  onClose={this.onCancel}
                  className="form-time__work"
                  children={
                    <FormSetTimeWork
                      actionSuccess={this.onChangeSucess}
                      isCancel={this.onCancel}
                    />
                  }
                />
              )} */}
              <Suspense fallback={this.loading()}>
                <Switch>
                  {Mainroutes.map((route, i) => {
                    // return
                    // userService.verify() ? (
                    return (
                      <Route
                        key={"layout____" + i}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={(props) => <route.component {...props} />}
                      />
                    );
                    // )
                    // : (
                    //   <Redirect key={"layout____" + i} to="/login" />
                    // );
                  })}
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {
  userLogout,
  getDantoc,
  getTongiao,
  getHinhthuchopdong,
  getKhuvuc,
  getLydonghihoc,
  getQuocgia,
  getDienchinhsach,
  getTinhthanhpho,
  getCapHoc,
  getTrangThai,
})(DefaultLayout);

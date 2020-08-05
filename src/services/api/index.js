import UserService from "./user.service";
import LearningService from "./learning.service";
import CommonService from "./common.service";

const userService = new UserService();
const learningService = new LearningService();
const commonService = new CommonService();

const convertResultFromAPI = (err, res) => {
  let result = {};
  if (err) {
    result = {
      status: "NG",
      error: err.toString(),
    };
  } else {
    result = {
      status: "OK",
      response: res,
    };
  }
  return result;
};

export default {
  userService,
  learningService,
  commonService,
  convertResultFromAPI,
};

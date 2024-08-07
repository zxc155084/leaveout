import request from "./request";

/* 取得多個 下拉式選單*/
function queryMulti(params) {
  return request({
    url: "/options/getMuiltOptionEnum",
    method: "post",
    data: params,
  });
}

export default {
  queryMulti,
};

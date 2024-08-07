import request from "./request";

const apiUrl = import.meta.env.VITE_APP_APIURL;

/* 取得多個 下拉式選單*/
function queryMulti(baseURL, params) {
  return request({
    url: "/options/getMuiltOptionEnum",
    method: "post",
    data: params,
    baseURL: baseURL ?? apiUrl,
  });
}

export default {
  queryMulti,
};

import API from "@/api";

/* 取得多個 下拉式選單*/
function getOptionData(option_data) {
  //取得下拉式選單的attrKeys
  let attrKeys = Object.keys(option_data);
  API.optionApi.queryMulti(attrKeys).then((res) => {
    // 複製res.data 到 option_data
    // Object.assign(option_data, res.data)
    // 根據attrKey 取得相對應的下拉式選單
    attrKeys.forEach((attrKey) => {
      let optionList = res.data[attrKey];
      option_data[attrKey] = convertOptionEnumFormat(optionList);
    });

    console.log("option_data", option_data);
    return option_data;
  });
}

/* 將下拉式選單選項  opt去掉 （例如 optLabel => label）*/
function convertOptionEnumFormat(optionList) {
  return optionList?.map((opt) => ({
    id: opt.id,
    label: opt.optLabel,
    value: opt.optValue,
    type: opt.optType,
  }));
}

export default {
  getOptionData,
  convertOptionEnumFormat,
};

const fs = require('fs');
const axios= require("axios");



const endpoint = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001&offset=2";
let currentPage = 1;
let pageSize = 10;

const getData = async (page, size) => {
  return axios.get(endpoint, {
    params: {
      // page,
      // size,
    },
  });
};

(async () => {
  const response = await getData(currentPage, pageSize);
  const totalPages = 10;
  const resultItems = [];

  while (currentPage <= totalPages) {
    const pageResponse = await getData(currentPage, pageSize);
    console.log(pageResponse)
    resultItems.push(...pageResponse.data);
    currentPage += 1;
  }

  fs.writeFileSync('./results.json', JSON.stringify(resultItems, null, 2),err=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(resultItems)
    }
});
})();
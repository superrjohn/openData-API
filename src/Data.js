import axios from 'axios'
//請求後修改的值
let ordM;
let ordF;
let sinM;
let sinF;
let site;
export let Data = [
  {
    id: 1,
    type: '共同生活戶',
    ordinary: ordM, //household_ordinary_m
    single: ordF  //household_ordinary_f 
  },
  {
    id: 2,
    type: '獨立生活戶',
    ordinary: sinM,//household_single_m
    single: sinF, //household_single_f
    site_id: site
  }
  ]
//更新data方法
 function updata(index, newValue1, newValue2) {
  Data[index].ordinary =  newValue1
  Data[index].single =  newValue2
}
//更新title方法
function title(newValue) {
  Data[1].site_id = newValue
}
//API 數據請求
export function getTown(Town, callback, callback2) {
  switch (Town) {
    case 'town1':
       axios.get('https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109', {
        params: {
          page: '1',
          county: '臺北市',
          town: '中正區'
        }
      }).then((res) => {
        let data = res.data.responseData
        title(res.data.responseData[0].site_id)
        let ordinaryM = 0
        let ordinaryF = 0
        let singleM = 0
        let singleF = 0
        //平均值處理
        for (let i = 0; i < data.length; i++) {
          ordinaryM += parseInt(data[i].household_ordinary_m)
          ordinaryF += parseInt(data[i].household_ordinary_f)
          singleM += parseInt(data[i].household_single_m)
          singleF += parseInt(data[i].household_single_f)
        }
        ordM = Math.round(ordinaryM / data.length)
        ordF = Math.round(ordinaryF / data.length)
        sinM = Math.round(singleM / data.length)
        sinF = Math.round(singleF / data.length)
        updata(0, ordM, ordF)
        //console.log(Data[0].ordinary, Data[0].single)
        updata(1, sinM, sinF)
        //console.log(Data[1].ordinary, Data[1].single)
        //console.log('2')
        if(callback){
          callback()
          callback2()
        }
      })
     break;
    case 'town2':
      axios.get('https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109', {
        params: {
          page: '1',
          county: '臺北市',
          town: '大同區'
        }
      }).then((res) => {
        let data = res.data.responseData
        title(res.data.responseData[0].site_id)
        let ordinaryM = 0
        let ordinaryF = 0
        let singleM = 0
        let singleF = 0
        for (let i = 0; i < data.length; i++) {
          ordinaryM += parseInt(data[i].household_ordinary_m)
          ordinaryF += parseInt(data[i].household_ordinary_f)
          singleM += parseInt(data[i].household_single_m)
          singleF += parseInt(data[i].household_single_f)
        }
        ordM = Math.round(ordinaryM / data.length)
        ordF = Math.round(ordinaryF / data.length)
        sinM = Math.round(singleM / data.length)
        sinF = Math.round(singleF / data.length)
        updata(0, ordM, ordF)
        //console.log(Data[0].ordinary, Data[0].single)
        updata(1, sinM, sinF)
        //console.log(Data[1].ordinary, Data[1].single)

        if(callback){
          callback()
          callback2()
        }
      })
      break;
    case 'town3':
      axios.get('https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109', {
        params: {
          page: '1',
          county: '臺北市',
          town: '中山區'
        }
      }).then((res) => {
        let data = res.data.responseData
        title(res.data.responseData[0].site_id)
        let ordinaryM = 0
        let ordinaryF = 0
        let singleM = 0
        let singleF = 0
        for (let i = 0; i < data.length; i++) {
          ordinaryM += parseInt(data[i].household_ordinary_m)
          ordinaryF += parseInt(data[i].household_ordinary_f)
          singleM += parseInt(data[i].household_single_m)
          singleF += parseInt(data[i].household_single_f)
        }
        ordM = Math.round(ordinaryM / data.length)
        ordF = Math.round(ordinaryF / data.length)
        sinM = Math.round(singleM / data.length)
        sinF = Math.round(singleF / data.length)
        updata(0, ordM, ordF)
        //console.log(Data[0].ordinary, Data[0].single)
        updata(1, sinM, sinF)
        //console.log(Data[1].ordinary, Data[1].single)

        if(callback){
          callback()
          callback2()
        }
      })
      break;
    case 'town4':
      axios.get('https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109', {
        params: {
          page: '1',
          county: '臺北市',
          town: '松山區'
        }
      }).then((res) => {
        let data = res.data.responseData
        title(res.data.responseData[0].site_id)
        let ordinaryM = 0
        let ordinaryF = 0
        let singleM = 0
        let singleF = 0
        for (let i = 0; i < data.length; i++) {
          ordinaryM += parseInt(data[i].household_ordinary_m)
          ordinaryF += parseInt(data[i].household_ordinary_f)
          singleM += parseInt(data[i].household_single_m)
          singleF += parseInt(data[i].household_single_f)
        }
        ordM = Math.round(ordinaryM / data.length)
        ordF = Math.round(ordinaryF / data.length)
        sinM = Math.round(singleM / data.length)
        sinF = Math.round(singleF / data.length)
        updata(0, ordM, ordF)
       // console.log(Data[0].ordinary, Data[0].single)
        updata(1, sinM, sinF)
        //console.log(Data[1].ordinary, Data[1].single)

        if(callback){
          callback()
          callback2()
        }
      })
      break;
    case 'town5':
      axios.get('https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109', {
        params: {
          page: '1',
          county: '臺北市',
          town: '大安區'
        }
      }).then((res) => {
        let data = res.data.responseData
        title(res.data.responseData[0].site_id)
        let ordinaryM = 0
        let ordinaryF = 0
        let singleM = 0
        let singleF = 0
        for (let i = 0; i < data.length; i++) {
          ordinaryM += parseInt(data[i].household_ordinary_m)
          ordinaryF += parseInt(data[i].household_ordinary_f)
          singleM += parseInt(data[i].household_single_m)
          singleF += parseInt(data[i].household_single_f)
        }
        ordM = Math.round(ordinaryM / data.length)
        ordF = Math.round(ordinaryF / data.length)
        sinM = Math.round(singleM / data.length)
        sinF = Math.round(singleF / data.length)
        updata(0, ordM, ordF)
        //console.log(Data[0].ordinary, Data[0].single)
        updata(1, sinM, sinF)
        //console.log(Data[1].ordinary, Data[1].single)

        if(callback){
          callback()
          callback2()
        }
      })
      break;
    case 'town6':
      axios.get('https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109', {
        params: {
          page: '1',
          county: '臺北市',
          town: '萬華區'
        }
      }).then((res) => {
        let data = res.data.responseData
        title(res.data.responseData[0].site_id)
        let ordinaryM = 0
        let ordinaryF = 0
        let singleM = 0
        let singleF = 0
        for (let i = 0; i < data.length; i++) {
          ordinaryM += parseInt(data[i].household_ordinary_m)
          ordinaryF += parseInt(data[i].household_ordinary_f)
          singleM += parseInt(data[i].household_single_m)
          singleF += parseInt(data[i].household_single_f)
        }
        ordM = Math.round(ordinaryM / data.length)
        ordF = Math.round(ordinaryF / data.length)
        sinM = Math.round(singleM / data.length)
        sinF = Math.round(singleF / data.length)
        updata(0, ordM, ordF)
       // console.log(Data[0].ordinary, Data[0].single)
        updata(1, sinM, sinF)
        //console.log(Data[1].ordinary, Data[1].single)

        if(callback){
          callback()
          callback2()
        }
      })
      break;
    case 'town7':
      axios.get('https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109', {
        params: {
          page: '1',
          county: '臺北市',
          town: '信義區'
        }
      }).then((res) => {
        let data = res.data.responseData
        title(res.data.responseData[0].site_id)
        let ordinaryM = 0
        let ordinaryF = 0
        let singleM = 0
        let singleF = 0
        for (let i = 0; i < data.length; i++) {
          ordinaryM += parseInt(data[i].household_ordinary_m)
          ordinaryF += parseInt(data[i].household_ordinary_f)
          singleM += parseInt(data[i].household_single_m)
          singleF += parseInt(data[i].household_single_f)
        }
        ordM = Math.round(ordinaryM / data.length)
        ordF = Math.round(ordinaryF / data.length)
        sinM = Math.round(singleM / data.length)
        sinF = Math.round(singleF / data.length)
        updata(0, ordM, ordF)
        //console.log(Data[0].ordinary, Data[0].single)
        updata(1, sinM, sinF)
        //console.log(Data[1].ordinary, Data[1].single)

        if(callback){
          callback()
          callback2()
        }
      })
      break;
    case 'town8':
      axios.get('https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109', {
        params: {
          page: '1',
          county: '臺北市',
          town: '士林區'
        }
      }).then((res) => {
        let data = res.data.responseData
        title(res.data.responseData[0].site_id)
        let ordinaryM = 0
        let ordinaryF = 0
        let singleM = 0
        let singleF = 0
        for (let i = 0; i < data.length; i++) {
          ordinaryM += parseInt(data[i].household_ordinary_m)
          ordinaryF += parseInt(data[i].household_ordinary_f)
          singleM += parseInt(data[i].household_single_m)
          singleF += parseInt(data[i].household_single_f)
        }
        ordM = Math.round(ordinaryM / data.length)
        ordF = Math.round(ordinaryF / data.length)
        sinM = Math.round(singleM / data.length)
        sinF = Math.round(singleF / data.length)
        updata(0, ordM, ordF)
        //console.log(Data[0].ordinary, Data[0].single)
        updata(1, sinM, sinF)
        //console.log(Data[1].ordinary, Data[1].single)

        if(callback){
          callback()
          callback2()
        }
      })
      break;
    case 'town9':
      axios.get('https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109', {
        params: {
          page: '1',
          county: '臺北市',
          town: '北投區'
        }
      }).then((res) => {
        let data = res.data.responseData
        title(res.data.responseData[0].site_id)
        let ordinaryM = 0
        let ordinaryF = 0
        let singleM = 0
        let singleF = 0
        for (let i = 0; i < data.length; i++) {
          ordinaryM += parseInt(data[i].household_ordinary_m)
          ordinaryF += parseInt(data[i].household_ordinary_f)
          singleM += parseInt(data[i].household_single_m)
          singleF += parseInt(data[i].household_single_f)
        }
        ordM = Math.round(ordinaryM / data.length)
        ordF = Math.round(ordinaryF / data.length)
        sinM = Math.round(singleM / data.length)
        sinF = Math.round(singleF / data.length)
        updata(0, ordM, ordF)
       // console.log(Data[0].ordinary, Data[0].single)
        updata(1, sinM, sinF)
        //console.log(Data[1].ordinary, Data[1].single)

        if(callback){
          callback()
          callback2()
        }
      })
      break;
    case 'town10':
      axios.get('https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109', {
        params: {
          page: '1',
          county: '臺北市',
          town: '內湖區'
        }
      }).then((res) => {
        let data = res.data.responseData
        title(res.data.responseData[0].site_id)
        let ordinaryM = 0
        let ordinaryF = 0
        let singleM = 0
        let singleF = 0
        for (let i = 0; i < data.length; i++) {
          ordinaryM += parseInt(data[i].household_ordinary_m)
          ordinaryF += parseInt(data[i].household_ordinary_f)
          singleM += parseInt(data[i].household_single_m)
          singleF += parseInt(data[i].household_single_f)
        }
        ordM = Math.round(ordinaryM / data.length)
        ordF = Math.round(ordinaryF / data.length)
        sinM = Math.round(singleM / data.length)
        sinF = Math.round(singleF / data.length)
        updata(0, ordM, ordF)
        //console.log(Data[0].ordinary, Data[0].single)
        updata(1, sinM, sinF)
        //console.log(Data[1].ordinary, Data[1].single)

        if(callback){
          callback()
          callback2()
        }
      })
      break;
    case 'town11':
      axios.get('https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109', {
        params: {
          page: '1',
          county: '臺北市',
          town: '南港區'
        }
      }).then((res) => {
        let data = res.data.responseData
        title(res.data.responseData[0].site_id)
        let ordinaryM = 0
        let ordinaryF = 0
        let singleM = 0
        let singleF = 0
        for (let i = 0; i < data.length; i++) {
          ordinaryM += parseInt(data[i].household_ordinary_m)
          ordinaryF += parseInt(data[i].household_ordinary_f)
          singleM += parseInt(data[i].household_single_m)
          singleF += parseInt(data[i].household_single_f)
        }
        ordM = Math.round(ordinaryM / data.length)
        ordF = Math.round(ordinaryF / data.length)
        sinM = Math.round(singleM / data.length)
        sinF = Math.round(singleF / data.length)
        updata(0, ordM, ordF)
        //console.log(Data[0].ordinary, Data[0].single)
        updata(1, sinM, sinF)
        //console.log(Data[1].ordinary, Data[1].single)

        if(callback){
          callback()
          callback2()
        }
      })
      break;
    case 'town12':
      axios.get('https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109', {
        params: {
          page: '1',
          county: '臺北市',
          town: '文山區'
        }
      }).then((res) => {
        let data = res.data.responseData
        title(res.data.responseData[0].site_id)
        let ordinaryM = 0
        let ordinaryF = 0
        let singleM = 0
        let singleF = 0
        for (let i = 0; i < data.length; i++) {
          ordinaryM += parseInt(data[i].household_ordinary_m)
          ordinaryF += parseInt(data[i].household_ordinary_f)
          singleM += parseInt(data[i].household_single_m)
          singleF += parseInt(data[i].household_single_f)
        }
        ordM = Math.round(ordinaryM / data.length)
        ordF = Math.round(ordinaryF / data.length)
        sinM = Math.round(singleM / data.length)
        sinF = Math.round(singleF / data.length)
        updata(0, ordM, ordF)
        //console.log(Data[0].ordinary, Data[0].single)
        updata(1, sinM, sinF)
        //console.log(Data[1].ordinary, Data[1].single)

        if(callback){
          callback()
          callback2()
        }
      })
      break;
  }
}
/*axios.get('https://www.ris.gov.tw/rs-opendata/api/Main/docs/v1')
.then((response) => console.log(response)) */
/*
let household_ordinary_m= 0 共同生活戶_男
let household_ordinary_f=''共同生活戶_女
household_single_f 單獨生活戶_女
household_single_m單獨生活戶_男
let data = null
axios.get('https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109',{

params:{
  page:'1',
  county: '臺北市',
  town: '信義區'
}

})
.then((res) => {

data = res.data.responseData
console.log(data)

for(let i=0 ; i < data.length ; i++){
household_ordinary_m += parseInt(data[i].household_ordinary_m)

}
console.log(household_ordinary_m)
household_ordinary_m = Math.round(household_ordinary_m /data.length)
console.log((household_ordinary_m))
})
*/
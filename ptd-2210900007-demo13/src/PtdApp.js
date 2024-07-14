
import React, { useEffect, useState } from 'react'
import PtdListTableName from './ptd_components/PtdListTableName'
import axios from './ptd.apis/ptd-2210900007'
import PtdFormTableName from './ptd_components/PtdFormTableName'

export default function PtdApp() {
// doc du lieu tu api
const[ptdListTableName,setPtdListTableName]=useState([])
const ptdGetTableName = async ()=>{
  let ptdResp = await axios.get("ptdTableName");
  console.log("App list:",ptdResp.data);
  setPtdListTableName( ptdResp.data);
}
 useEffect(()=>{
  ptdGetTableName();
 },[])
// Ham xoa
const ptdHanleDelete= async (ptdId)=>{
  let ptdRes = await axios.delete("ptdTableName/"+ptdId);
  ptdGetTableName();

}
const ptdObjTableName ={
  "ptdTbName": "Pham Thanh Dat",
  "ptdTbEmail": "thanhdat160924@gmail.com",
  "ptdTbPhone": "0984868340",
  "ptdTbStatus": true,
  "ptdId": "2210900007"
};
const [ptdTableName,setPtdTableName] = useState(ptdObjTableName);
const ptdHandlAdd=()=>{
  ptdGetTableName();
}
 const ptdHandleEdit=(ptdObjEditTableName)=>{
  setPtdTableName(ptdObjEditTableName);
 }


  return (
    <div className='container border my-3'>
     <h1> Bài đánh giá hết học phần - Phạm Thành Đạt:2210900007</h1>
     <hr/>
     <PtdListTableName renderPtdListTableName={ptdListTableName} onPtdDelete={ptdHanleDelete} onPtdEdit={ptdHandleEdit}/>
     <hr/>
     <PtdFormTableName renderPtdTableName={ptdTableName} onPtdAdd={ptdHandlAdd}/>
    </div>
  )
}

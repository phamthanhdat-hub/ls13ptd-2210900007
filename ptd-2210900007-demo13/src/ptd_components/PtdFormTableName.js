import axios from '../ptd.apis/ptd-2210900007'
import React, { useState } from 'react'

export default function PtdFormTableName({ renderPtdTableName, onPtdAdd}) {
    const[ptdId,setPtdId]=useState(renderPtdTableName.ptdId)
    const[ptdTbName,setptdTbName]=useState(renderPtdTableName.pptdTbName)
    const[ptdTbEmail,setptdTbEmail]=useState(renderPtdTableName.ptdTbEmail)
    const[ptdTbPhone,setptdTbPhone]=useState(renderPtdTableName.ptdTbPhone)
    const[ptdTbStatus,setptdTbStatus]=useState(renderPtdTableName.ptdTbStatus)
    const ptdHandleSubmit= async (ptdEvent)=>{
        ptdEvent.preventDefault();
        const ptdObjTableName = {
             "ptdTbName": ptdTbName,
             "ptdTbEmail": ptdTbEmail,
             "ptdTbPhone": ptdTbPhone,
             "ptdTbStatus": ptdTbStatus,
             "ptdId": ptdId
        }
        console.log(ptdObjTableName);

        // them vao du lieu trong api
       await axios.post("ptdTableName",ptdObjTableName);
       onPtdAdd();
    }
  return (
    <div>
        <h2> Form dữ liệu thêm mới </h2>
    <form>
    <div className="input-group mb-3">
  <span className="input-group-text" id="ptdId">ptdId</span>
  <input type="text" className="form-control" placeholder="ptdId"
  name='ptdId'
  value={ptdId}
  onChange={(ptdEv)=>setPtdId(ptdEv.target.value)}
   aria-label="ptdId" 
   aria-describedby="ptdId"/>
    </div>
    <div className="input-group mb-3">
  <span className="input-group-text" id="ptdTbName">ptdTbName</span>
  <input type="text" className="form-control" placeholder="ptdTbName"
  name='ptdTbName'
  value={ptdTbName}
  onChange={(ptdEv)=>setptdTbName(ptdEv.target.value)}
   aria-label="ptdTbName" 
   aria-describedby="ptdTbName"/>
    </div>
    <div className="input-group mb-3">
  <span className="input-group-text" id="ptdTbEmail">ptdTbEmail</span>
  <input type="text" className="form-control" placeholder="thanhdat160924@gmail.com"
    name='ptdTbEmail'
    value={ptdTbEmail}
    onChange={(ptdEv)=>setptdTbEmail(ptdEv.target.value)}
   aria-label="ptdTbEmail" 
   aria-describedby="ptdTbEmail"/>
    </div>
    <div className="input-group mb-3">
  <span className="input-group-text" id="ptdTbPhone">ptdTbPhone</span>
  <input type="text" className="form-control" placeholder="0984868340"
   name='ptdTbPhone'
   value={ptdTbPhone}
   onChange={(ptdEv)=>setptdTbPhone(ptdEv.target.value)}
   aria-label="ptdTbPhone" 
   aria-describedby="ptdTbPhone"/>
    </div>
    <div className="input-group mb-3">
  <span className="input-group-text" id="ptdTbStatus">ptdTbStatus</span>
  <select  id='ptdTbStatus' className='"form-control'
  name='ptdTbStatus'
  value={ptdTbStatus}
  onChange={(ptdEv)=>setptdTbStatus(ptdEv.target.value)}
  >
           <option value={true}>Active</option>
           <option value={false}> Non-Active</option>
  </select>
    </div>
    <button className='btn btn-primary'name='btnPtdSave' onClick={ptdHandleSubmit} >PTD: Save</button>
    </form>
 </div>
  )
}


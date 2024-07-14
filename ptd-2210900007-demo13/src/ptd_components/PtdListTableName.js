import React from 'react'

export default function PtdListTableName({renderPtdListTableName, onPtdDelete,onPtdEdit}) {
 console.log("List:",renderPtdListTableName);
 //Hien thi du lieu
 const ptdElementTableName = renderPtdListTableName.map((ptdItem,ptdIndex)=>{
    return(
  <tr key={ptdIndex}>
    <td>{ptdItem.ptdId}</td>
    <td>{ptdItem.ptdTbName}</td>
    <td>{ptdItem.ptdTbEmail}</td>
    <td>{ptdItem.ptdTbPhone}</td>
    <td>{(ptdItem.ptdTbStatus===true || ptdItem.ptdTbStatus==="true" )?"Active":"Non-Active"}</td>
    <td>
           <button className='btn btn-success m-2'
           onClick={()=>ptdHanleEdit(ptdItem)}
           >
            
            ptd-edit</button>
           <button className='btn btn-danger'
           onClick={(ev)=>ptdHanlDelete(ptdItem.ptdId)}
           >ptd-delete</button>
    </td>
  </tr>
    );
 })
 //su kien xoa
 const ptdHanlDelete=(ptdId)=>{
    if (window.confirm('Bạn có muốn xóa dữ liệu có ptdId=' + ptdId)){
        onPtdDelete(ptdId)  
    }
 }
 //sua
 const ptdHanleEdit=(ptdObjTableName)=>{
  onPtdEdit(ptdObjTableName)

 }
  return (
    <div>
        <h2> danh sach thong tin ....</h2>
        <hr/>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ptdId</th>
                    <th>ptdTbName</th>
                    <th>ptdTbEmail</th>
                    <th>ptdTbPhone</th>
                    <th>ptdTbStatus</th>
                    <th>ptd: Chuc nang</th>
                </tr>
            </thead>
            <tbody>
        {ptdElementTableName}
            </tbody>
        </table>
    </div>
  )
}

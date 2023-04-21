import { Input,Button } from "antd";
import { getCurrentUser } from "../../utils";
import { useState } from "react";
export default function NewApply(props) {
    const [formData,setFormData] = useState({
        drugId:'',
        number:'',
    })
    const submit=()=>{

    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', whiteSpace: 'nowrap', height: '80%', width: '60%' ,marginLeft:'15%'}}>
            <div>申请人:<Input disabled value={getCurrentUser()?.name}></Input></div>
            <div>申请人ID:<Input disabled value={getCurrentUser()?.id}></Input></div>
            <div>药品ID:<Input value={formData.drugId} onChange={e=>setFormData({...formData,drugId:e.target.value})}></Input></div>
            <div>申请数量:<Input value={formData.number} onChange={e=>{setFormData({...formData,number:e.target.value})}} type='number'></Input></div>
            <Button type='primary' onClick={submit}>提交申请</Button>
        </div>
    )
}
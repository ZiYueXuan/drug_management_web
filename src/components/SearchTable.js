import { Table ,Input} from "antd"
import {useState } from "react"
export default function SearchTable(props){
    const [searchStr,setStr]=useState()
    const dataFilter=item=>{
        return Object.values(item).some(element=>String(element).search(searchStr)!==-1)
    }
    return (
        <div style={{ height: '100%' }}>
            <div style={{ display: 'flex', height: '10%', alignItems: 'center' }}>
                <Input 
                    value={searchStr} 
                    onChange={e=>setStr(e.target.value)} 
                    placeholder={props.placeholder}
                    style={{width:'40%',marginLeft:'15%'}}
                    bordered
                    allowClear
                ></Input>
            </div>
            <div style={{ height: '90%'  }}>
                <Table 
                    {...props}
                    style={{height:'95%',width:'90%',marginLeft:'5%',marginRight:'5%',marginBottom:'5%',}}
                    dataSource={props.dataSource?.filter(dataFilter)}
                    pagination={{ position: ['bottomCenter'],style:{position:'fixed',bottom:'5%'} }}
                >
                </Table>
            </div>
        </div>
    )
}
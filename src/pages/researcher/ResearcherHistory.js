import { useState,useEffect } from "react"
import SearchTable from "../../components/SearchTable"
import {Status} from '../../utils'
import axios from "axios"
import Column from "antd/es/table/Column"
import DrugDetails from '../../components/DrugDetails'
export default function ResearcherHistory(props){
    const [applyList,setList]=useState()
    const tableData=applyList?.map(item=>({
        id:item.id,
        drugId:item.drug.drugId,
        name:item.drug.name,
        number:item.number,
        status:Status[item.status],
        drug:item.drug,
    }))
    useEffect(()=>{
        setList([{
            "id":"1",
            "researcher":{},
            "drug":{drugId:'2',name:'1'},
            "number":4,
            "status":1,
        }])
    },[])
    const [isvisible,setVisible]=useState()
    const [drug,setDrug]=useState()
    return (
        <>
        <SearchTable
            dataSource={tableData}
            placeholder='搜索申请'
            rowKey='id'
            onRow={record=>{
                    return {
                        onClick:()=>{
                            setDrug(record.drug)
                            setVisible(true)
                        }
                    }
                }
            }
        >
            <Column title='药品ID' dataIndex='drugId'/>
            <Column title='药品名称' dataIndex='name'/>
            <Column title='数量' dataIndex='number'/>
            <Column title='状态' dataIndex='status'/>
        </SearchTable>
        <DrugDetails open={isvisible} onCancel={() => setVisible(false)} drug={drug}></DrugDetails>
        </>
    )
}
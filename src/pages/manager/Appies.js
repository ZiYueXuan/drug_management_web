import { Button } from 'antd'
import SearchTable from '../../components/SearchTable'
import Column from "antd/es/table/Column"
import axios from 'axios'
import { useEffect, useState } from 'react'
export default function Appies(props) {
    const [applyList, setList] = useState([
        {
            "id": "1",
            "researcher": { name: 'name', id: 'id' },
            "drug": { name: 'drugName', drugId: 'drugId' },
            "number": 1,
            "status": '已申请'
        },
    ])
    const getData = () => {
        
    }
    useEffect(getData,[])
    const tableData = applyList.map(item=>({
        id:item.id,
        researcherId:item.researcher.id,
        researcherName:item.researcher.name,
        drugId:item.drug.drugId,
        drugName:item.drug.name,
        number:item.number
    }))
    const exeApply = tags=>{
        console.log(tags)
    }
    return (
        <SearchTable
            dataSource={tableData}
            placeholder='搜索申请'
            rowKey='id'
        >
            <Column title='申请者(研究员)' dataIndex='researcherName'></Column>
            <Column title='申请者(研究员)ID' dataIndex='researcherId'></Column>
            <Column title='药物ID' dataIndex='drugId'></Column>
            <Column title='药品名称' dataIndex='drugName'></Column>
            <Column title='申请数量' dataIndex='number'></Column>
            <Column title='操作'
                render={tags=><Button onClick={()=>exeApply(tags)} type='primary'>处理申请</Button>}
            ></Column>
        </SearchTable>
    )
}
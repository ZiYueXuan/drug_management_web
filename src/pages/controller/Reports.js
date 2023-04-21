import { useEffect, useState } from 'react'
import SearchTable from '../../components/SearchTable'
import Column from "antd/es/table/Column"
import { Button, Modal, TreeSelect } from 'antd'
export default function Applies(props) {
    const [reports, setReports] = useState()
    const getReports = () => {
        setReports([
            {   "id":"1",
                "researcher_id": "1",
                "inspetor_id": "1",
                "title": "1",
                "content": "1",
                "time": "1",
                "appendix": "1"
            },
        ])
    }
    const [visible,setVisible]=useState()
    const [record,setRecord]=useState()
    const [controllers,setController]=useState([
        
    ])
    const submit=()=>{

    }
    useEffect(getReports,[])
    return (
        <>
        <SearchTable
            dataSource={reports}
            placeholder='搜索研究报告'
            rowKey='id'
        >
            <Column title='研究员ID' dataIndex='researcher_id'></Column>
            <Column title='标题' dataIndex='title'></Column>
            <Column title='提交时间' dataIndex='time'></Column>
            <Column title='操作' 
            render={record=><Button onClick={()=>{
                setRecord(record)
                setVisible(true)
            }} type='primary'>查看和处理报告</Button>}
            ></Column>
        </SearchTable>
        <Modal 
        open={visible}
        onCancel={() => setVisible(false)} 
        footer={<Button onClick={submit} type='primary' >提交</Button>}
        >
            <div style={{display:'inline-block'}}><strong>标题:</strong>{record?.title}</div>
            <div ><strong>内容:</strong></div>
            <text style={{display:'block'}}>{record?.content}</text>
            <Button type='link' style={{display:'block'}}>{record?.appendix}</Button>
        </Modal>
        </>
    )
}
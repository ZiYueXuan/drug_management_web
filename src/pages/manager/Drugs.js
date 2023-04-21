import SearchTable from '../../components/SearchTable'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Column from 'antd/es/table/Column'
import { Button, Card, Modal } from 'antd'
import DrugDetails from '../../components/DrugDetails'
export default function Drugs(props) {
    const { className } = useParams()
    const [isvisible, setVisible] = useState(false)
    const [drug, setDrug] = useState()
    const [dataSource, setData] = useState([{
        "id": "1",
        "name": "1",
        "drugId": "1",
        "specification": "1",
        "form": "1",
        "executiveStandard": "1",
        "approvalNumber": "1",
        "producer": "1",
        "indication": "1",
        "component": "1",
        "interact": "1",
        "properties": "1",
        "number": "1",
        "price": "1",
        "validityTime": "1",
        "useConsumption": "1",
        "taboo": "1",
        "adverseReaction": "1",
        "storeUp": "1",
        "matters": "1"
    },
    ])
    useEffect(() => {
        //axios.get().then(res=>setData([res.data.drugs]))
    }, [])
    return (
        <>
            <SearchTable
                dataSource={dataSource}
                placeholder='搜索药物'
                rowKey="id"
            >
                <Column title='药品ID' dataIndex='drugId'  />
                <Column title='名称' dataIndex='name'  />
                <Column title='规格' dataIndex='specification'  />
                <Column title='数量' dataIndex='number'  />
                <Column title='价格' dataIndex='price'  />
                <Column title='生产厂家' dataIndex='producer'  />
                <Column title='详细信息' 
                    render={
                        drug => (
                            <Button type='primary' onClick={() => {
                                setVisible(true)
                                setDrug(drug)
                            }}>查看</Button>
                        )}
                />
            </SearchTable>
            <DrugDetails open={isvisible} onCancel={() => setVisible(false)} drug={drug}></DrugDetails>
        </>
    )
}

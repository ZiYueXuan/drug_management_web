import {Button, Card, Input} from "antd";
import {useEffect, useState} from "react";
import RepositoryCard from "./RepositoryCard";
import axios from 'axios'

export default function Repository(props) {
    const [searchStr, setSearchStr] = useState()
    const addRepository = () => {
    }
    const [classes, setClasses] = useState([
        {"id": "1", "name": "test"},
        {"id": "2", "name": "test"},
        {"id": "3", "name": "test"},
        {"id": "4", "name": "test"},])
    const getData = () => {
        axios.post("http://localhost:9999/api/manager/getRepositories").then(res => {
            setClasses(res.data)
        })
    }
    useEffect(getData, [])
    return (
        <div style={{height: '100%'}}>
            <div style={{display: 'flex', height: '10%', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <Input style={{width: '40%'}} bordered placeholder="搜索药物大类" value={searchStr}
                       onChange={e => setSearchStr(e.target.value)}/>
                <Button type='primary' style={{width: '10%'}} onClick={addRepository}>添加药物大类</Button>
            </div>
            <div style={{
                height: '90%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                overflow: 'auto'
            }}>
                {classes.filter(item => item.name.search(searchStr) !== -1).map(item => <RepositoryCard
                    key={item.id}>{item.name}</RepositoryCard>)}
            </div>
        </div>
    )
}
import { useRef, useState ,useEffect} from "react"
import { Input, Button, message, Modal ,TreeSelect} from 'antd'
import TextArea from "antd/es/input/TextArea"
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from '../../utils'
export default function Report() {
    const [report, setReport] = useState({
        "researcher_id": "",
        "inspetor_id": undefined,
        "title": "",
        "content": "",
        "time": "",
        "appendix": ""
    })
    const navigate = useNavigate()
    const submitReport = () => {
        if (!report.inspetor_id)
            message.warning('请选择监察员')
        else if (!report.title)
            message.warning('请填写标题')
        else if (!report.content)
            message.warning('请填写内容')
        else if (!report.appendix)
            message.warning('请上传附件')
        else {
            const data = {
                ...Report,
                researcher_id: getCurrentUser().id,
                time: new Date()
            }
            console.log(data)
            //axios...then(navigate('/researcher'))   
        }
    }

    const fileUploader = useRef()
    const [file, setFile] = useState()
    const [isVisible, setVisible] = useState(false)
    const submitFile = e => {
        if (e.target.files.length > 1)
            e.target.files = [e.target.files[e.target.files.length - 1]]
        setFile(e.target.files[0])
        const file = new FormData()
        file.append('file', e.target.files[0])
        //axios.post.then(res=>setReport({...Report,appendix:res.data})).catch
    }

    const [inspetors,setInspectors]=useState([])
    const getInspectors=()=>{
        const data=[{
            "id":"1",
            "name":"test",
            "password":"",
            "phone":"",
            "mail":""
        }]
        setInspectors(data.map(item=>({
            value:item.id,
            title:item.name
        })))
    }
    useEffect(getInspectors,[])
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', whiteSpace: 'nowrap', height: '95%', width: '80%', marginLeft: '10%' }}>
            <TreeSelect value={report.inspetor_id} onChange={val=>setReport({...report,inspetor_id:val})} treeData={inspetors} placeholder='选择监察员' style={{width:'60%',margin:'2%'}}></TreeSelect>
            <div style={{width:'60%'}}>标题:<Input value={report.title} onChange={e => setReport({ ...report, title: e.target.value })}></Input></div>
            <p style={{width:'70%'}}>内容:</p>
            <div style={{ width: '70%', height: '70%'}}><TextArea style={{ height: '100%' }} placeholder="请在此处填写报告内容" value={report.content} onChange={e => { setReport({ ...report, content: e.target.value }) }}></TextArea></div>
            <div style={{margin:'2%'}}>
                <Button type='primary' onClick={submitReport}>提交申请</Button>
                <Button style={{ backgroundColor: '#c0c0c0' ,marginLeft: '20%' }} onClick={() => fileUploader.current.dispatchEvent(new MouseEvent('click'))}><UploadOutlined />上传附件<input type='file' onChange={submitFile} style={{ display: 'none' }} ref={fileUploader}></input></Button>
                <Button type='link' onClick={() => setVisible(true)}>{file?.name}</Button>
            </div>
            <Modal open={isVisible} onCancel={() => setVisible(false)} footer={null} width='90%' style={{ top: '5%' }}>
                <iframe src={file ? URL.createObjectURL(file) : null} title='附件' style={{ width: '100%', height: '80vh' }}></iframe>
            </Modal>
        </div>
    )
}
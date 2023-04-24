import {Form, Button, Input, Radio, message} from "antd";
import {useNavigate} from "react-router-dom";
import axios from 'axios'
import {absoluteCenter, setCurrentUser, identityURL} from "../../utils";
import Title from "antd/es/typography/Title";
import './backgroudWithColor.css'
import {useState} from "react";

export default function Login() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        "identity": undefined,
        "way": 1,  //1表示手机号 2表示邮箱
        "phone": "",
        "mail": "",
        "verificationCode": "",
        "password": ""
    })
    const login = () => {
        if (formData.way === 1 && !formData.phone)
            message.warning('请填写手机号码！');
        else if (formData.way === 2 && !formData.mail)
            message.warning('请填写电子邮箱！');
        else if (!formData.verificationCode)
            message.warning('请填写验证码！');
        else if (!formData.password)
            message.warning('请填写密码！');
        else if (formData.identity === undefined)
            message.warning('请选择身份！');
        else {
            //axios
            //setCurrentUser
            setCurrentUser({id: '1', name: 'test', identity: formData.identity})
            //跳转至identityURL()
            navigate(identityURL())
            message.success('登录成功！')
        }
    }

    const getVerificationCode = () => {
        //获取验证码
    }
    return (
        <div style={{width: '100%', height: '100%'}} className="color">
            <div style={{...absoluteCenter, width: '40%', border: 2}}>
                <Title>
                    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '10%'}}>
                        智能药物管理系统
                    </div>
                </Title>
                <Form>
                    <Form.Item>
                        <div style={{display: 'flex'}}>
                            {formData.way === 1 ?
                                <>
                                    <Input placeholder='请输入手机号码' value={formData.phone} onChange={e => setFormData({
                                        ...formData,
                                        phone: e.target.value
                                    })} required/>
                                    <Button onClick={() => setFormData({...formData, way: 2, phone: ''})}
                                            type='primary'>
                                        切换为电子邮箱
                                    </Button>

                                </>
                                :
                                <>
                                    <Input placeholder='请输入邮箱' value={formData.mail}
                                           onChange={e => setFormData({...formData, mail: e.target.value})}
                                           required/>
                                    <Button
                                        onClick={() => setFormData({...formData, way: 1, mail: ''})}>切换为手机号码</Button>

                                </>}
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <div style={{display: 'flex'}}>
                            <Input placeholder='请填写验证码'
                                   onChange={e => setFormData({...formData, verificationCode: e.target.value})}
                                   required/>
                            <Button onClick={getVerificationCode} type='text'>获取验证码</Button>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder='请输入密码' onChange={e => setFormData({...formData, password: e.target.value})}
                               type='password' required/>
                    </Form.Item>
                    <Form.Item>
                        <Radio.Group onChange={e => setFormData({...formData, identity: e.target.value})}
                                     value={formData.identity}>
                            <Radio value={0}>管理员</Radio>
                            <Radio value={1}>研究员</Radio>
                            <Radio value={2}>监察员</Radio>
                            <Radio value={3}>质控员</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <Button onClick={login} type='primary' size='large'>登录</Button>
                            <Button onClick={() => navigate('/register')} size='large'>注册</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>

    )
}
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
import { absoluteCenter, identityURL, isLogin } from "../../utils";
import NotLogin from './NotLogin'
import './backgroudWithColor.css'
export default function NotFound() {
    const { Title } = Typography
    const navigate = useNavigate()
    return (
        isLogin() ?
            <div style={{ width: '100%', height: '100%' }} className="color">
                <div style={{ ...absoluteCenter }}>
                    <Title>页面不存在或对当前角色不可见</Title>
                    <Button onClick={() => navigate(identityURL())} type="primary" size="large">点击返回个人主页</Button>
                </div>
            </div>

            :
            <NotLogin></NotLogin>
    )
}  
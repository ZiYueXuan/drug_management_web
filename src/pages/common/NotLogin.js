import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
import { absoluteCenter } from "../../utils";
import './backgroudWithColor.css'
export default function NotLogin() {
    const { Title } = Typography
    const navigate = useNavigate()
    return (
        <div style={{ width: '100%', height: '100%' }} className="color">
            <div style={{ ...absoluteCenter, top: '35%' }}>
                <Title>请登陆后查看相关页面</Title>
                <Button onClick={() => navigate('/')} type="primary" size="large">点击前往登录页面</Button>
            </div>
        </div>

    )
}
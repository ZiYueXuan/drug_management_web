import { getCurrentUser, removeCurrentUser, isLogin, identityURL } from '../../utils'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, cloneElement } from 'react'
import { Button } from 'antd'
import NotLogin from '../../pages/common/NotLogin'
import NotFound from '../../pages/common/NotFound'
import xjtu from '../../assets/xjtu.png'
export default function NavMenu(props) {//在这里做登录和是否存在页面的判断
    const navigate = useNavigate()
    const logout = () => {
        removeCurrentUser()
        navigate('/')
    }
    const [clickedArray, setArr] = useState(new Array(props.children.length))
    const clickFun = childNum => {
        const _arr = new Array(props.children.length)
        _arr[childNum] = true
        setArr(_arr)
    }
    const location = useLocation()
    if (!isLogin())
        return <NotLogin></NotLogin>
    else if (location.pathname.search(identityURL()) !== 0)
        return <NotFound></NotFound>
    else
        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#004c99', height: '15%' }}>
                    <h1 style={{ color: '#ffffff' }}>欢迎，{getCurrentUser()?.name}</h1>
                    <img src={xjtu} alt=""></img>
                    <Button type="primary" onClick={logout} size='large'>退出登录</Button>
                </div>
                <div style={{ display: 'flex', height: '85%' }}>
                    <div style={{ backgroundColor: '#003366', height: '100%', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        {props?.children?.filter(child => child.type.name === 'NavMenuItem')?.map((child, index) => cloneElement(child, { key: Math.random(), clicked: clickedArray[index], clickFun: () => clickFun(index) }))}
                    </div>
                    <div style={{ height: '100%', flex: '7' }}>
                        {props?.children?.filter(child => child.type.name === 'Routes')}
                    </div>
                </div>
            </>
        )
}
import {  useState ,} from "react"
import { useNavigate } from "react-router-dom"
export default function NavMenuItem(props){//props: text文字 link点击后的去向 clicked 是否被点击 clickFun 反馈被点击的函数
    const [textColor,setTextColor]=useState('#A0A0A0')
    const navigate=useNavigate()
    const clickItem=()=>{
        if(props?.link)
            navigate(props.link)
        if(props.clicked)
            return
        props.clickFun()
    }
    return (
        <div style={{width:'100%',height:'10%', backgroundColor:props.clicked?'#4069ff':''}}
            onMouseEnter={()=>setTextColor('#ffffff')}
            onMouseLeave={()=>setTextColor('#e0e0e0')}
            onClick={clickItem}
            >
            <h4 style={{display:'flex',justifyContent:'center',color:textColor}}>{props?.children}</h4>
        </div>
    )
}
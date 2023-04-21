import { Card } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function RepositoryCard(props){
    const [color,setColor]=useState('#ffffff')
    const navigate=useNavigate()
    const clickCard=()=>{
        navigate('/manager/drugs/'+props.children)
    }
    return(
        <Card style={{
            width: '25%',
            height: '25%',
            margin: '4.16%',
            backgroundColor:color,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        }}  
            onClick={clickCard}
            onMouseEnter={()=>setColor('#f0f0f0')}
            onMouseLeave={()=>setColor('#ffffff')}
        >
            {props.children}
        </Card>
    )
}
import NavMenu from "../../components/NavMenu"
import NavMenuItem from "../../components/NavMenu/NavMenuItem"
import {Route, Routes, Navigate} from "react-router-dom"
import Reports from './Reports'

export default function ControllerNavMenu(props) {

    return (
        <NavMenu>
            <NavMenuItem link='/controller/reports'>研究报告</NavMenuItem>
            <Routes>
                <Route index element={<Reports/>}/>
                <Route path='/reports' element={<Reports/>}/>
                <Route path='/*' element={<Navigate to='/notfound'/>}/>
            </Routes>
        </NavMenu>
    )
}
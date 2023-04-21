import NavMenu from "../../components/NavMenu"
import NavMenuItem from "../../components/NavMenu/NavMenuItem"
import { Route,Routes ,Navigate} from "react-router-dom"
import Reports from './Reports'
export default function InspectorNavMenu(props){

    return (
        <NavMenu>
            <NavMenuItem link='/inspector/reports'>研究报告</NavMenuItem>
            <Routes>
                <Route index element={<Reports></Reports>}></Route>
                <Route path='/reports' element={<Reports></Reports>}></Route>
                <Route path='/*' element={<Navigate to='/notfound'></Navigate>}></Route>
            </Routes>
        </NavMenu>
    )
}
import NavMenu from "../../components/NavMenu"
import NavMenuItem from "../../components/NavMenu/NavMenuItem"
import { Route,Routes,Navigate} from "react-router-dom"
import Repository from "./Repository"
import Drugs from "./Drugs"
import Appies from "./Appies"
export default function ManagerNavMenu(props){

    return (
        <NavMenu>
            <NavMenuItem link='/manager/applies'>待受理申请</NavMenuItem>
            <NavMenuItem link='/manager/repository'>药物信息库</NavMenuItem>
            <Routes>
                <Route index element={<Appies></Appies>}></Route>
                <Route path='/repository' element={<Repository></Repository>}></Route>
                <Route path='/drugs/:className' element={<Drugs></Drugs>}></Route>
                <Route path='/applies' element={<Appies></Appies>}></Route>
                <Route path='/*' element={<Navigate to='/notfound'></Navigate>}></Route>
            </Routes>
        </NavMenu>
    )
}
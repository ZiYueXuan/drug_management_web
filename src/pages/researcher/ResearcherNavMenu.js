import NavMenu from "../../components/NavMenu"
import NavMenuItem from "../../components/NavMenu/NavMenuItem"
import { Navigate, Route,Routes } from "react-router-dom"
import NewApply from "./NewApply"
import ResearcherHistory from "./ResearcherHistory"
import Report from "./Report"
export default function ResearcherNavMenu(props){

    return (
        <NavMenu>
            <NavMenuItem link='/researcher/history'>历史申请</NavMenuItem>
            <NavMenuItem link='/researcher/newApply'>新建申请</NavMenuItem>
            <NavMenuItem link='/researcher/report'>提交报告</NavMenuItem>
            <Routes>
                <Route index element={<ResearcherHistory></ResearcherHistory>}></Route>
                <Route path='/history' element={<ResearcherHistory></ResearcherHistory>}></Route>
                <Route path='/newApply' element={<NewApply></NewApply>}></Route>
                <Route path='/report' element={<Report></Report>}></Route>
                <Route path='/*' element={<Navigate to='/notfound'></Navigate>}></Route>
            </Routes>
        </NavMenu>
    )
}
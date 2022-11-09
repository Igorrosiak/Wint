import {HeaderComponent} from '../../widgets/HeaderComponent'
import {SkillsComponent} from '../../widgets/SkillsComponent'
import {WorksComponent} from '../../widgets/WorksComponent'

import { createSkill } from '../../service/newSkills'

export const ProfileView = _ => {
    return (
        <>
            {/* <HeaderComponent /> */} 
            <SkillsComponent /> 
            {/* <WorksComponent/> */}
        </>
    )
}
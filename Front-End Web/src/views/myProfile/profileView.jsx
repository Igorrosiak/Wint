import { HeaderComponent } from '../../widgets/HeaderComponent'
import { ProfExpComponent } from '../../widgets/ProfExpComponent'
import { SkillsComponent } from '../../widgets/SkillsComponent'
import { WorksComponent } from '../../widgets/WorksComponent'

export const ProfileView = _ => {
    return (
        <>
            {/* <HeaderComponent /> */} 
            <SkillsComponent /> 
            <ProfExpComponent />
            {/* <WorksComponent/> */}
        </>
    )
}
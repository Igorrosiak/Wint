import { HeaderComponent } from '../../widgets/HeaderComponent'
import { ProfExpComponent } from '../../widgets/ProfExpComponent'
import { SkillsComponent } from '../../widgets/SkillsComponent'
import { WorksComponent } from '../../widgets/WorksComponent'
import { RecommendationComponent } from '../../widgets/RecommendationComponent'

export const ProfileView = _ => {
    return (
        <>
            {/* <HeaderComponent /> */} 
            <SkillsComponent /> 
            <ProfExpComponent />
            {/* <WorksComponent/> */}
            <RecommendationComponent />
        </>
    )
}
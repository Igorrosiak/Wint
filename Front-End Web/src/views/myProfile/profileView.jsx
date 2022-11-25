import { HeaderComponent } from '../../widgets/HeaderComponent'
import { ProfExpComponent } from '../../widgets/ProfExpComponent'
import { SkillsComponent } from '../../widgets/SkillsComponent'
import { WorksComponent } from '../../widgets/WorksComponent'
import { RecommendationComponent } from '../../widgets/RecommendationComponent'
import { useState, useEffect } from 'react'
import { BlogComponent } from '../../widgets/BlogComponent'
import Animation from '../../widgets/TelaLoading'


export const ProfileView = _ => {
    const [animaionDidEnd, setAnimationDidEnd] = useState (false) 
    useEffect(() => {
        setTimeout(() => {
          setAnimationDidEnd(true);
        }, 6000);
      });

    return (
        <>
            {
                animaionDidEnd ? 
                <>
                <HeaderComponent /> 
                <SkillsComponent /> 
                <WorksComponent />
                <ProfExpComponent />
                <BlogComponent/>
                <RecommendationComponent />
                </> : <Animation />  
            }
        </>
    )
}
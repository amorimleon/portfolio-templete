import { AboutMeSection } from "../../components/AbountMeSection"
import { BannerSection } from "../../components/BannerSection/"
import { ProjectSection } from "../../components/ProjectSection"
import { TechSection } from "../../components/TechSection"
import { DefaultPage } from "../../components/DefaultPage/"

export const Home = ()=>{
  return(
    <>
    
    <DefaultPage>
      <BannerSection/>
      <AboutMeSection/>
      <TechSection/>
      <ProjectSection/>
    </DefaultPage>
    
  </>
  )
}
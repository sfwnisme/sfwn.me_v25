import About from "@/components/About/About"
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer/Footer"
import { Hero } from "@/components/Hero/Hero"
import { SkillsAndServices } from "@/components/SkillsAndServices/SkillsAndServices"
import Workspace from "@/components/workspace/Workspace"
import Styles from './page.module.css'
import Clients from "@/components/Clients/Clients"

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }]
}

const page = async ({ params }: { params: Promise<{ lang: "en" | "ar" }> }) => {
  const { lang } = await params
  return (
    <div className={Styles['main-content']}>
      <Hero />
      <About />
      <SkillsAndServices />
      <Workspace lang={lang} />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

export default page

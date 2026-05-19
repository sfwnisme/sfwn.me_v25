import { Suspense } from "react"
import dynamic from "next/dynamic"
import About from "@/components/About/About"
import Footer from "@/components/Footer/Footer"
import { Hero } from "@/components/Hero/Hero"
import { SkillsAndServices } from "@/components/SkillsAndServices/SkillsAndServices"
import Workspace from "@/components/workspace/Workspace"
import WorkspaceSkeleton from "@/components/workspace/WorkspaceSkeleton"
import Styles from './page.module.css'
import Loading from "./loading"

const Clients = dynamic(() => import("@/components/Clients/Clients"))
const Contact = dynamic(() => import("@/components/Contact/Contact"))

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }]
}

const page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params
  const validLang = lang === "en" || lang === "ar" ? lang : "en"
  return (
    <div className={Styles['main-content']}>
      <Hero />
      <About />
      <SkillsAndServices />
      <Suspense fallback={<WorkspaceSkeleton />}>
        <Workspace lang={validLang} />
      </Suspense>
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

export default page

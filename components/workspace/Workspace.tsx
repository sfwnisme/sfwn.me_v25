import Work from '../work/Work'
import { getRepo } from '@/actions/actions'
import Style from './Workspace.module.css'
import Title from '../Title/Title'
import { getDictionary } from '@/app/[lang]/dictionaries'

const REPO_NAMES = [
  'visi',
  'frontend-real-estate',
  'backend-real-estate',
  'COMPLAINT-TICKETS',
  'backend-ticket-system',
  'luberef.com-clone',
  'school-management-system',
  'e-commerce',
] as const

export default async function Workspace({ lang }: { lang: 'en' | 'ar' }) {
  const title = (await getDictionary(lang)).titles.wordspace
  const repos = await Promise.all(REPO_NAMES.map((name) => getRepo(name)))

  return (
    <div className={Style.workspace}>
      <Title>{title}</Title>
      <div className={Style['workspace__works']}>
        {repos.map((repo, i) =>
          repo ? <Work key={repo.id ?? REPO_NAMES[i]} repo={repo} /> : null
        )}
      </div>
    </div>
  )
}

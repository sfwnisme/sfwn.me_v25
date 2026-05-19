import Style from './Workspace.module.css'
import Skel from './WorkspaceSkeleton.module.css'

const CARDS = 8

export default function WorkspaceSkeleton() {
  return (
    <div className={Style.workspace}>
      <div className={Style['workspace__works']} aria-busy="true" aria-label="Loading GitHub repositories">
        {Array.from({ length: CARDS }).map((_, i) => (
          <div key={i} className={Skel.skeleton__card}>
            <div className={Skel.skeleton__header}>
              <span className={`${Skel.skeleton__icon} ${Skel.shimmer}`} />
              <span className={`${Skel.skeleton__title} ${Skel.shimmer}`} />
            </div>
            <span className={`${Skel.skeleton__line} ${Skel['skeleton__line--full']} ${Skel.shimmer}`} />
            <span className={`${Skel.skeleton__line} ${Skel['skeleton__line--75']} ${Skel.shimmer}`} />
            <div className={Skel.skeleton__footer}>
              <span className={`${Skel.skeleton__chip} ${Skel.shimmer}`} />
              <span className={`${Skel.skeleton__chip} ${Skel.shimmer}`} />
              <span className={`${Skel.skeleton__chip} ${Skel.shimmer}`} />
              <span className={`${Skel.skeleton__chip} ${Skel['skeleton__chip--wide']} ${Skel.shimmer}`} />
              <span className={`${Skel.skeleton__chip} ${Skel['skeleton__chip--wide']} ${Skel.shimmer}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import Style from './loading.module.css'

export default function Loading() {
  return (
    <div className={Style.loading} role="status" aria-label="Loading">
      <div className={Style.bar} />
    </div>
  )
}

import clsx from 'classnames'

export default function KpiCard({ label, value, zone }:{ label:string; value:string|number; zone?:'danger'|'warn'|'ok'|'peak' }){
  const ring = zone==='danger' ? 'ring-2 ring-red-500' :
               zone==='warn'   ? 'ring-2 ring-amber-500' :
               zone==='peak'   ? 'ring-2 ring-yellow-300' : 'ring-1 ring-zinc-700'
  return (
    <div className={clsx('card', ring)}>
      <div className="text-sm text-text-dim">{label}</div>
      <div className="text-3xl font-semibold">{value}</div>
    </div>
  )
}

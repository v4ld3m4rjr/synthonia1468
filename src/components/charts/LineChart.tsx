import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function SimpleLine({ data, x='date', y='value' }:{ data:any[]; x?:string; y?:string }){
  return (
    <div className="card">
      <div className="text-sm text-text-dim mb-2">Série temporal</div>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <XAxis dataKey={x} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={y} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

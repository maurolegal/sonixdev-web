import GlassCard from './GlassCard';

type MetricProps={label:string;value:string;trend?:string};

export default function Metric({label,value,trend}:MetricProps){
  return (
    <GlassCard className="p-6">
      <p className="text-sm text-neutral-500">{label}</p>
      <h3 className="mt-2 text-3xl font-bold tracking-tight">{value}</h3>
      {trend && <p className="mt-3 text-sm text-emerald-600">{trend}</p>}
    </GlassCard>
  );
}

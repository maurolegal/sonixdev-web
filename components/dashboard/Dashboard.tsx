import GlassCard from '@/components/ui/GlassCard';
import Metric from '@/components/ui/Metric';

export default function Dashboard(){
  return (
    <GlassCard className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Executive Dashboard</h3>
          <p className="text-sm text-neutral-500">Real-time business intelligence</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">LIVE</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Metric label="Revenue" value="$185.4M" trend="+18.4%" />
        <Metric label="Occupancy" value="92%" trend="+4.1%" />
        <Metric label="Repairs" value="147" trend="+12" />
        <Metric label="Cloud" value="99.99%" trend="Healthy" />
      </div>
    </GlassCard>
  );
}

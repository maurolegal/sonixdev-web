import GlassCard from '@/components/ui/GlassCard';

interface KpiCardProps {
  title: string;
  value: string;
  subtitle?: string;
}

export default function KpiCard({ title, value, subtitle }: KpiCardProps) {
  return (
    <GlassCard className="p-6">
      <p className="text-sm text-neutral-500">{title}</p>
      <h4 className="mt-2 text-2xl font-bold tracking-tight">{value}</h4>
      {subtitle ? <p className="mt-2 text-sm text-neutral-500">{subtitle}</p> : null}
    </GlassCard>
  );
}

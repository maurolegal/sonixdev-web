import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export default function Suite512Card(){
  return (
    <GlassCard className="p-8">
      <div className="mb-6 text-5xl">🏨</div>
      <h3 className="text-2xl font-bold">Suite512 PMS</h3>
      <p className="mt-4 text-neutral-600">Plataforma PMS de nueva generación para hoteles con reservas, recepción, facturación, housekeeping, analítica y operación 100% cloud.</p>
      <div className="mt-8">
        <Button variant="secondary">Ver detalles</Button>
      </div>
    </GlassCard>
  )
}

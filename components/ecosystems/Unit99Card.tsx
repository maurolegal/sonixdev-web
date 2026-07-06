import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export default function Unit99Card(){
  return (
    <GlassCard className="p-8">
      <div className="mb-6 text-5xl">📱</div>
      <h3 className="text-2xl font-bold">Unit99</h3>
      <p className="mt-4 text-neutral-600">Sistema operativo para centros de servicio técnico con gestión de reparaciones, inventario, ventas por IMEI y analítica empresarial.</p>
      <div className="mt-8">
        <Button variant="secondary">Ver detalles</Button>
      </div>
    </GlassCard>
  );
}

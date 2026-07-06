import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="container grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-16 py-24 lg:grid-cols-2">
      <div>
        <span className="inline-flex rounded-full border border-black/10 px-4 py-2 text-sm text-neutral-600">
          Sistemas de alto rendimiento
        </span>

        <h1 className="mt-8 text-6xl font-extrabold tracking-tight text-neutral-950 lg:text-7xl">
          Software corporativo diseñado para escalar.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
          Automatiza la operación, elimina fugas de capital y toma el control absoluto de tu empresa con ecosistemas tecnológicos premium.
        </p>

        <div className="mt-10 flex gap-4">
          <Button>Solicitar demostración</Button>
        </div>
      </div>

      <div className="rounded-[32px] border border-black/5 bg-white p-8 shadow-2xl shadow-black/5">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Executive Dashboard</h2>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700">Live</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-neutral-50 p-5"><p className="text-sm text-neutral-500">Revenue</p><strong>$185.4M</strong></div>
          <div className="rounded-2xl bg-neutral-50 p-5"><p className="text-sm text-neutral-500">Occupancy</p><strong>92%</strong></div>
          <div className="rounded-2xl bg-neutral-50 p-5"><p className="text-sm text-neutral-500">Repairs</p><strong>147</strong></div>
          <div className="rounded-2xl bg-neutral-50 p-5"><p className="text-sm text-neutral-500">Cloud</p><strong>Active</strong></div>
        </div>
      </div>
    </section>
  );
}

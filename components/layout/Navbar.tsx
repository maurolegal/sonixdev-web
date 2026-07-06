import Button from '@/components/ui/Button';

const links = [
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Contacto', href: '#contacto' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <a href="/" className="text-2xl font-bold tracking-tight">
          SONIXDEV<span className="text-neutral-400">.</span>
        </a>

        <nav className="hidden gap-8 text-sm text-neutral-600 md:flex">
          {links.map(link => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-black">
              {link.label}
            </a>
          ))}
        </nav>

        <Button>Agendar Demo</Button>
      </div>
    </header>
  );
}

import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import Unit99Card from './Unit99Card';
import Suite512Card from './Suite512Card';

export default function Ecosystems(){
  return (
    <Section id="soluciones">
      <Heading
        eyebrow="Ecosistemas"
        title="Dos plataformas. Una visión empresarial."
        description="Desarrollamos software especializado para industrias donde la eficiencia operativa marca la diferencia."
      />
      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <Unit99Card />
        <Suite512Card />
      </div>
    </Section>
  );
}

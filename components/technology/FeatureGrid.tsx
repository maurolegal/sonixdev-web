import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import GlassCard from '@/components/ui/GlassCard';

const features=[{icon:'⚡',title:'Rendimiento Extremo',text:'Arquitectura optimizada para alto desempeño y escalabilidad.'},{icon:'☁️',title:'100% Cloud',text:'Acceso seguro desde cualquier lugar con infraestructura moderna.'},{icon:'🛡️',title:'Seguridad Bancaria',text:'Protección de datos, cifrado y buenas prácticas empresariales.'}];

export default function FeatureGrid(){
return(<Section id="tecnologia"><Heading eyebrow="Tecnología" title="Ingeniería pensada para empresas." description="Cada plataforma es diseñada para ofrecer velocidad, seguridad y disponibilidad."/><div className="mt-16 grid gap-8 md:grid-cols-3">{features.map(f=><GlassCard key={f.title} className="p-8"><div className="text-4xl">{f.icon}</div><h3 className="mt-6 text-2xl font-bold">{f.title}</h3><p className="mt-4 text-neutral-600">{f.text}</p></GlassCard>)}</div></Section>)}
import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Web Design',
    description:
      'No Design Web eu atuo com UI algumas vezes com UX mas enquadro-me melhor em UI.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Developmento Web',
    description:
      'No desenvolvimento web, Eu sou proficiente em uma variedade de frameworks e bibliotecas JavaScript, incluindo React, NextJs, Angular e Vue.js.',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Developmento de App Móveis',
    description:
      'No setor móvel, Eu tenho experiência com desenvolvimento nativo e híbrido. Sou versado em React Native, que me permite criar aplicações móveis para iOS e Android a partir de uma única base de código.',
  },
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          Meus Serviços
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

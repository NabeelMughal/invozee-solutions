import { Navbar } from '@/components/navbar';
import { Services } from '@/components/services';
import { Process } from '@/components/process';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Invozee - Scalable Software & AI Solutions',
  description: 'Explore our premium IT services including Web Development, Mobile Apps, Generative AI, Cloud Migration, and Business Automation.',
};

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <div className="pt-8">
        <Services featuredOnly={false} />
      </div>
      <Process />
      <Footer />
    </main>
  );
}

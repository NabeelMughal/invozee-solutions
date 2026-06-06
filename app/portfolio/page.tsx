import { Navbar } from '@/components/navbar';
import { Portfolio } from '@/components/portfolio';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio & Projects | Invozee Software Agency',
  description: 'Browse our case studies and projects including enterprise SaaS platforms, AI integrations, mobile apps, and e-commerce solutions.',
};

export default function PortfolioPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <div className="pt-8">
        <Portfolio featuredOnly={false} />
      </div>
      <Footer />
    </main>
  );
}

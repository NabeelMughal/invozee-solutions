import { Navbar } from '@/components/navbar';
import { About } from '@/components/about';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Invozee - Custom Software Development Agency',
  description: 'Learn about Invozee, our expert team, core values, and mission to deliver premium custom web, mobile, and AI solutions.',
};

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <div className="pt-8">
        <About featuredOnly={false} />
      </div>
      <FAQ />
      <Footer />
    </main>
  );
}

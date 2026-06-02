import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Technologies } from '@/components/technologies';
import { Services } from '@/components/services';
import { About } from '@/components/about';
import { Process } from '@/components/process';
import { Portfolio } from '@/components/portfolio';
import { Testimonials } from '@/components/testimonials';
import { Statistics } from '@/components/statistics';
import { FAQ } from '@/components/faq';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Technologies />
      <Services />
      <About />
      <Process />
      <Portfolio />
      <Statistics />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

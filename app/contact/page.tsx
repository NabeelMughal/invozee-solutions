import { Navbar } from '@/components/navbar';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Invozee - Start Your Project Today',
  description: 'Get in touch with Invozee to discuss your custom software development project. Ready to transform your ideas into scalable solutions.',
};

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <div className="pt-8">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

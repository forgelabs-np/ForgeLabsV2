import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { ServicesContent } from '@/components/services/services-content';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <Header />
      <main className="flex-1">
        <ServicesContent />
      </main>
      <Footer />
    </div>
  );
}

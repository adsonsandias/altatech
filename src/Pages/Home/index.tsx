import { Header } from '../../Components/Header';
import { MainContent } from '../../Components/MainContent';
import { Budget } from '../../Components/Budget';
import { Partners } from '../../Components/Partners';
import { Newsletter } from '../../Components/Newsletter';
import { Contact } from '../../Components/Contact';
import { Footer } from '../../Components/Footer';

export function Homer() {
  return (
    <>
      <Header />
      <MainContent />
      <Budget />
      <Partners />
      <Newsletter />
      <Contact />
      <Footer />
    </>
  );
}

import { Budget } from '../../Components/Budget';
import { Header } from '../../Components/Header';
import { MainContent } from '../../Components/MainContent';
import { Newsletter } from '../../Components/Newsletter';
import { Partners } from '../../Components/Partners';

export function Homer() {
  return (
    <>
      <Header />
      <MainContent />
      <Budget />
      <Partners />
      <Newsletter />
    </>
  );
}

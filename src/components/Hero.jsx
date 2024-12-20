import { useRef, useState, useEffect} from 'react';
import BtcChart from './BtcChart';
import BinkLogo from '../assets/images/bink_logo.svg';
import { handleFrecuencyChange } from '../Controller/HandleFrecuency';

function Hero() {
  const [amount, setAmount] = useState(500);
  const [frecuency, setFrecuency] = useState('Semanal');
  const ref = useRef(null);

  useEffect(() => {
    handleFrecuencyChange(amount, frecuency);
  }, [amount, frecuency]);

  return (
    <section id="dca" ref={ref} className="text-slate-50 mx-4 mb-10 pt-36 max-w-screen-xl md:mx-auto relative flex">
      <div className="text-2xl md:text-4xl mt-12 mx-4">
        <div className="relative flex items-center justify-center">
          <img
            className="absolute top-16 w-[200px]"
            src={BinkLogo}
            width={262}
            height={244}
            alt="Club Bink Logo"
          />
        </div>
        <div className="hero-text mt-72 m-8 weight-bold">
          <span className="block relative p-[3px_2px] hero-style before:content-['Club Bink,'] before:orange-gradient before:animation-delay-0">Conoce Bitcoin</span>
          <span className="block relative p-[3px_2px] hero-style before:content-['de manera segura'] before:red-gradient before:animation-delay-3">de manera segura</span>
          <p className="amount text-lg mt-8">
            Monto a comprar frecuentemente
          </p>
          <input
            className="text-slate-800 w-[280px] rounded-md text-xl px-2 mb-2"
            type="text"
            name="amount"
            id="frecuency"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="text-xl">
            <label htmlFor="weekly">
              <input
                className="accent-amber-400"
                type="radio"
                name="frecuency"
                id="weekly"
                value="Semanal"
                checked={frecuency === 'Semanal'}
                onChange={(e) => setFrecuency(e.target.value)}
              />
              <span className="ml-2">Semanal</span>
            </label>
          </div>
          <div className="text-xl">
            <label htmlFor="twoweeks">
              <input
                className="accent-amber-400"
                type="radio"
                name="frecuency"
                id="twoweeks"
                value="Bisemanal"
                checked={frecuency === 'Bisemanal'}
                onChange={(e) => setFrecuency(e.target.value)}
              />
              <span className="ml-2">Bisemanal</span>
            </label>
          </div>
          <div className="text-xl">
            <label htmlFor="monthly">
              <input
                className="accent-amber-400"
                type="radio"
                name="frecuency"
                id="monthly"
                value="Mensual"
                checked={frecuency === 'Mensual'}
                onChange={(e) => setFrecuency(e.target.value)}
              />
              <span className="ml-2">Mensual</span>
            </label>
          </div>
        </div>
      </div>
      <BtcChart />
    </section>
  );
}

export default Hero;

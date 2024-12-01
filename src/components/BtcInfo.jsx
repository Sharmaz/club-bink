import RocketImage from '../assets/images/bink_rocket.svg';
import CoinImage01 from '../assets/images/bink_coin01.svg';
import CoinImage02 from '../assets/images/bink_coin02.svg';
import CoinImage03 from '../assets/images/bink_coin03.svg';
import FaceImage from '../assets/images/bink_face.svg';
import SafeBoxImage from '../assets/images/bink_safebox.svg';
import WalletImage from '../assets/images/bink_wallet.svg';

function BtcInfo() {
  return (
    <div id="info" className="info-container bg-gray-950 py-20 bg-contain">
      <div className="pair flex justify-between max-w-screen-xl mx-auto">
        <div className="question mt-8">
          <h2 className="text-3xl weight-bold">
            ¿Qué es
            <span className="text-5xl text-yellow-500"> Bitcoin?</span>
          </h2>
          <h4 className="text-xl my-4">¿Evolución del dinero? ¿Oro digital?</h4>
          <p className="answer">
            ¡Es una
            <span className="text-2xl text-yellow-500"> cuenta de ahorros!</span>
          </p>
        </div>

        <div className="rocket relative w-[250px]">
          <img className="absolute top-20 right-20" src={RocketImage} alt="rocket" width={250} />
        </div>

        <div className="question mt-32 w-[220px]">
          <h2 className="text-2xl weight-bold">
            ¿Por qué
            <span className="text-3xl text-yellow-500"> sube de precio</span>
            ?
          </h2>
          <p className="answer">
            Porque es
            <span className="text-3xl text-yellow-500"> escaso </span>
            y
            <span className="text-3xl text-yellow-500"> útil.</span>
          </p>
        </div>

      </div>

      <div className="pair flex justify-between max-w-screen-xl mx-auto">
        <div className="question mt-8 text-xl">
          <h2 className="my-4">
            ¿
            <span className="text-3xl text-yellow-500"> Cuánto </span>
            compro?
          </h2>
          <p className="answer">
            Del 10% al 30% de tu sueldo
            <span className="text-3xl text-yellow-500"> recurrentemente</span>
          </p>
        </div>

        <div className="coins relative w-[250px]">
          <img className="absolute top-10 -left-40" src={CoinImage01} alt="coin" width={25} />
          <img className="absolute top-32 -left-10" src={CoinImage01} alt="coin" width={30} />
          <img className="absolute top-36 -left-64" src={CoinImage02} alt="coin" width={50} />
          <img className="absolute top-52 -left-40" src={CoinImage03} alt="coin" width={75} />
        </div>

        <div className="question mt-28 text-xl">
          <h2 className="my-4">
            ¿
            <span className="text-3xl text-yellow-500"> Cómo </span>
            compro?
          </h2>
          <p className="answer my-4">
            <span className="text-3xl text-yellow-500">DCA </span>
            (Dollar Cost Average)
          </p>
          <p className="w-[300px]">
            Una estrategia de inversión a largo plazo en la que compras regularmente,
            un monto fijo, sin importar el precio.
          </p>
        </div>
      </div>

      <div className="pair flex justify-between max-w-screen-xl mx-auto">
        <div className="question mt-8 text-xl">
          <h2 className="my-4">
            ¿Y si
            <span className="text-3xl text-yellow-500"> baja </span>
            de precio?
          </h2>
          <p className="answer">
            ¡
            <span className="text-2xl"> Sigue comprando </span>
            con tu plan de DCA!
          </p>
          <p>
            ¡BTC esta en descuento!
          </p>
        </div>

        <div className="face relative w-[250px]">
          <img className="absolute top-44 -left-40" src={CoinImage01} alt="coin" width={25} />
          <img className="absolute top-10" src={FaceImage} alt="face" width={150} />
          <img className="absolute top-0 right-10" src={CoinImage01} alt="coin" width={35} />
        </div>

        <div className="question mt-44 text-xl">
          <h2>
            ¿Cuándo
            <span className="text-3xl"> vendo</span>
            ?
          </h2>
          <p className="answer">
            <span className="text-3xl text-yellow-500">¡Nunca!</span>
          </p>
          <p className="w-[300px]">
            Existen servicios que te permiten hipotecar tu BTC.
          </p>
        </div>
      </div>

      <div className="pair flex justify-between max-w-screen-xl mx-auto">
        <div className="question">
          <h2>
            ¿
            <span className="text-3xl"> Dónde </span>
            lo guardo?

          </h2>
          <p className="answer">
            En una cartera de “
            <span className="text-3xl text-yellow-500">auto custodio</span>
            ”.
          </p>
        </div>

        <div className="face relative w-[250px]">
          <img className="absolute top-10" src={SafeBoxImage} alt="face" width={200} />
          <img className="absolute top-40 -right-32" src={WalletImage} alt="wallet" width={100} />
        </div>

        <div className="question mt-52 text-xl">
          <h2 className="my-4">
            ¿Cómo sé que es
            <span className="text-3xl text-yellow-500"> seguro</span>
            ?
          </h2>
          <p className="answer">
            Es
            <span className="text-3xl"> descentralizado</span>
          </p>
          <p className="w-[300px] text-lg my-2">
            Hay 80mil copias de su código a travez de el mundo, que son como su ADN.
          </p>
          <p className="w-[300px] text-lg my-2">
            Cualquiera de estas copias puede volver a generar toda la red de Bitcoin.
          </p>
          <p className="w-[300px] text-lg my-2">
            Bitcoin es de
            <span className="text-2xl"> fuente abierta</span>
            , su código, lógica y matemática son públicas y cualquier persona puede leerlas y auditar el código de bitcoin. 
          </p>
        </div>

      </div>

    </div>
  );
}

export default BtcInfo;

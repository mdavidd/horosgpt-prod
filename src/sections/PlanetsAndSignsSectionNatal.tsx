import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const PlanetsAndSigns = () => {
  return (
    <section className="py-16 px-4 lg:px-16"> {/* Reduced padding */}
      <div className="max-w-5xl mx-auto text-center"> {/* Reduced width */}
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-white">Planeti su glagoli, a znakovi su prilozi.</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left mt-8"> {/* Reduced gap */}
          {/* Left Table - Planets */}
          <div>
            <h2 className="text-center text-xl font-semibold mb-4 text-white">Planeti</h2> {/* Reduced text size */}
            <table className="w-full text-white text-sm"> {/* Reduced text size */}
              <tbody>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">☉ SUNCE</td>
                  <td className="py-2 px-3">Ja sam temeljno...</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">☽ MJESEC</td>
                  <td className="py-2 px-3">Iskusujem emocije...</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">↑ ASCENDENT</td>
                  <td className="py-2 px-3">Izgledam...</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">☿ MERKUR</td>
                  <td className="py-2 px-3">Komuniciram...</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">♀ VENERA</td>
                  <td className="py-2 px-3">Volim...</td>
                </tr>
                <tr className="border-b border-gray-600 bg-blue-600/10">
                  <td className="py-2 px-3">♂ MARS</td>
                  <td className="py-2 px-3">Djelujem...</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">♃ JUPITER</td>
                  <td className="py-2 px-3">Širim se kroz...</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">♄ SATURN</td>
                  <td className="py-2 px-3">Discipliniram se...</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">♅ URAN</td>
                  <td className="py-2 px-3">Moja generacija inovira...</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">♆ NEPTUN</td>
                  <td className="py-2 px-3">Sanjam...</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">♇ PLUTON</td>
                  <td className="py-2 px-3">Moja generacija doživljava moć...</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Table - Signs */}
          <div>
            <h2 className="text-center text-xl font-semibold mb-4 text-white">Znakovi</h2> {/* Reduced text size */}
            <table className="w-full text-white text-sm"> {/* Reduced text size */}
              <tbody>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">♈ OVAN</td>
                  <td className="py-2 px-3">natjecateljski, samostalano</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">♉ BIK</td>
                  <td className="py-2 px-3">praktično, pouzdano, senzualano</td>
                </tr>
                <tr className="border-b border-gray-600 bg-pink-600/10">
                  <td className="py-2 px-3">♊ BLIZANCI</td>
                  <td className="py-2 px-3">radoznalo, kaotično, duhovito</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">♋ RAK</td>
                  <td className="py-2 px-3">osjetljivo, brižno, nježno</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">♌ LAV</td>
                  <td className="py-2 px-3">ponosno, samopouzdano</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">♍ DJEVICA</td>
                  <td className="py-2 px-3">odgovorno, precizano</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">♎ VAGA</td>
                  <td className="py-2 px-3">pošteno, diplomatski</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">♏ ŠKORPION</td>
                  <td className="py-2 px-3">intenzivano, moćno</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">♐ STRIJELAC</td>
                  <td className="py-2 px-3">nemirno, intelektualno</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">♑ JARAC</td>
                  <td className="py-2 px-3">ozbiljano, odgovorno</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2 px-3">♒ VODENJAK</td>
                  <td className="py-2 px-3">nekonvencionalano, neovisno</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">♓ RIBE</td>
                  <td className="py-2 px-3">preodsjećano, suosjećajano</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
          {/* Note and Link to Zodiac Signs Page */}
          <div className="mt-8 text-center text-white"> 
          <p className="text-sm italic ">
            Možete provjeriti svoj planet i znak <Link href="/zodiac-signs" className="text-blue-400 hover:underline">ovdje</Link>.
          </p>
        </div>
        {/* Example Sentence */}
        <div className="mt-8 text-center text-white"> {/* Reduced margin */}
          <p className="text-lg"> {/* Reduced text size */}
            <span className="text-blue-400">Mars</span> u <span className="text-pink-400">Blizancima</span> =
            &quot;Djelujem na radoznao, kaotičan način.&quot;
          </p>
        </div>

      
      </div>
    </section>
  );
};

export default PlanetsAndSigns;

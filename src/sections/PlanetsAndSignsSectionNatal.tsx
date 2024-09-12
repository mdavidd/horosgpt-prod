import React from 'react';

const PlanetsAndSigns = () => {
  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-white">Planeti su glagoli, a znakovi su prilozi.</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left mt-10">
          {/* Left Table - Planets */}
          <div>
            <h2 className="text-center text-2xl font-semibold mb-4 text-white">Planeti</h2>
            <table className="w-full text-white">
              <tbody>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">☉ SUNCE</td>
                  <td className="py-3 px-4">Ja sam temeljno...</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">☽ MJESEC</td>
                  <td className="py-3 px-4">Iskusujem emocije...</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">↑ ASCENDENT</td>
                  <td className="py-3 px-4">Izgledam...</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">☿ MERKUR</td>
                  <td className="py-3 px-4">Komuniciram...</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">♀ VENERA</td>
                  <td className="py-3 px-4">Volim...</td>
                </tr>
                <tr className="border-b border-gray-600 bg-blue-600/10">
                  <td className="py-3 px-4">♂ MARS</td>
                  <td className="py-3 px-4">Djelujem...</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">♃ JUPITER</td>
                  <td className="py-3 px-4">Širim se kroz...</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">♄ SATURN</td>
                  <td className="py-3 px-4">Discipliniram se...</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">♅ URAN</td>
                  <td className="py-3 px-4">Moja generacija inovira...</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">♆ NEPTUN</td>
                  <td className="py-3 px-4">Sanjam...</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">♇ PLUTON</td>
                  <td className="py-3 px-4">Moja generacija doživljava moć...</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Table - Signs */}
          <div>
            <h2 className="text-center text-2xl font-semibold mb-4 text-white">Znakovi</h2>
            <table className="w-full text-white">
              <tbody>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">♈ OVAN</td>
                  <td className="py-3 px-4">natjecateljski, samostalan</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">♉ BIK</td>
                  <td className="py-3 px-4">praktičan, pouzdan, senzualan</td>
                </tr>
                <tr className="border-b border-gray-600 bg-pink-600/10">
                  <td className="py-3 px-4">♊ BLIZANCI</td>
                  <td className="py-3 px-4">radoznao, kaotičan, duhovit</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">♋ RAK</td>
                  <td className="py-3 px-4">osjetljiv, brižan, nježan</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">♌ LAV</td>
                  <td className="py-3 px-4">ponosan, samopouzdan</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">♍ DJEVICA</td>
                  <td className="py-3 px-4">odgovoran, precizan</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">♎ VAGA</td>
                  <td className="py-3 px-4">pošten, diplomat</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">♏ ŠKORPION</td>
                  <td className="py-3 px-4">intenzivan, moćan</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">♐ STRIJELAC</td>
                  <td className="py-3 px-4">nemiran, intelektualac</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">♑ JARAC</td>
                  <td className="py-3 px-4">ozbiljan, odgovoran</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 px-4">♒ VODENJAK</td>
                  <td className="py-3 px-4">nekonvencionalan, neovisan</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">♓ RIBE</td>
                  <td className="py-3 px-4">intuicija, suosjećajan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Example Sentence */}
        <div className="mt-10 text-center text-white">
          <p className="text-xl">
            <span className="text-blue-400">Mars</span> u <span className="text-pink-400">Blizancima</span> =
            &quot;Djelujem na radoznao, kaotičan način.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanetsAndSigns;

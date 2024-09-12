import React from 'react';
import Image from 'next/image';

const AriesSection = () => {
  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Ovan</h1>
          <p className="text-gray-300 text-xl mb-6">
            21. ožujak – 19. travanj
          </p>
          <p className="text-gray-400 text-lg mb-16">
            Ovan je prvi znak Zodijaka. Njegov simbol, ovan, odražava hrabrost, neovisnost i dinamiku.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-16">
          <Image
            src="/zodiac/aries.png" // Ensure this image is in the public folder
            alt="Ovan"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>

        {/* Table Section */}
        <div className="bg-white/10 rounded-lg p-6 mb-16">
          <table className="min-w-full text-left text-gray-300">
            <tbody>
              <tr>
                <td className="py-2 font-semibold">Simbol</td>
                <td className="py-2">Ovan</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Datumi</td>
                <td className="py-2">21. ožujak – 19. travanj 2024</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Element</td>
                <td className="py-2">Vatra</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Modalitet</td>
                <td className="py-2">Kardinalni</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Vladajući planet</td>
                <td className="py-2">Mars</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Personality Section */}
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Osobnost</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ovan je vatreni znak koji je poznat po svojoj energičnosti, hrabrosti i neovisnosti. Ljudi rođeni pod znakom Ovna skloni su preuzeti inicijativu i često su prvi u svemu što rade, od posla do društvenih aktivnosti. Ovan je vođa koji voli izazove i ima nezasitnu potrebu za avanturom.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Ovnova vatrena priroda znači da su puni strasti i intenzivno proživljavaju emocije. Njihova neovisnost može ih činiti impulzivnim, ali uvijek djeluju iz osjećaja samosvijesti i odlučnosti.
            </p>
          </div>

          {/* Strengths and Weaknesses */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Snage i Slabosti</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Strengths */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Snage</h3>
                <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                  <li>Hrabrost</li>
                  <li>Entuzijazam</li>
                  <li>Samosvijest</li>
                  <li>Inicijativa</li>
                  <li>Sposobnost donošenja brzih odluka</li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Slabosti</h3>
                <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                  <li>Impulzivnost</li>
                  <li>Nestrpljivost</li>
                  <li>Brzopletost</li>
                  <li>Sklonost konfliktima</li>
                </ul>
              </div>
            </div>
          </div>



          {/* Love, Sex, and Romance */}
<div className="border-t border-gray-700 pt-16 mt-16 space-y-8">
  <h2 className="text-3xl font-semibold text-white mb-4">Ovan u ljubavi, seksu i romantici</h2>

  {/* How to Seduce an Aries */}
  <div>
    <h3 className="text-2xl font-semibold text-white mb-2">Kako zavesti Ovna?</h3>
    <p className="text-gray-300 text-lg leading-relaxed">
      Da biste osvojili pažnju Ovna, obucite nešto crveno jer je to boja koja će odmah privući njegovu pažnju. Ovnova vatrena priroda voli hrabrost i direktnost, stoga nemojte okolišati. Najbolji način da ga zavodite je da budete odvažni i iskreni u vezi svojih želja. Ovan cijeni izazove, stoga nemojte biti previše povučeni. Recite im izravno da tražite partnera s kojim biste podijelili svoju strast i pitajte ih gdje biste mogli pronaći takvu osobu. To će im pobuditi znatiželju i privući ih da budu s vama.
    </p>
  </div>

  {/* Does Aries Fall in Love Quickly? */}
  <div>
    <h3 className="text-2xl font-semibold text-white mb-2">Da li se Ovan brzo zaljubljuje?</h3>
    <p className="text-gray-300 text-lg leading-relaxed">
      Ovan se relativno brzo zaljubljuje. Ima puno energije i ne želi trošiti previše vremena na trivijalne stvari. Dok uživa upoznavati nekoga, neće to raditi predugo. Ovan brzo osjeti je li zaljubljen u nekoga ili ne. Njihova odluka o ulasku u vezu ne traje dugo, i ako osjete da veza ne funkcionira, spremni su brzo prekinuti bez mnogo drame. Ovnove snažne emocije i impulzivnost omogućuju im da se lako odluče da li žele biti s nekim ili ne.
    </p>
  </div>

  {/* Who Attracts an Aries */}
  <div>
    <h3 className="text-2xl font-semibold text-white mb-2">Tko privlači Ovna?</h3>
    <p className="text-gray-300 text-lg leading-relaxed">
      Ovnova privlačnost prema nekome ovisi o tome koliko ta osoba može držati korak s njim. Ovan voli biti okružen ljudima koji cijene fizičku aktivnost, izravnost i toplinu. Biti otvoren u vezi s vlastitim namjerama i željama pomoći će Ovnu da se osjeća opušteno jer to pokazuje da je sigurno biti ono što jest pored vas. Oni vole izravnost i autentičnost.
    </p>
  </div>

  {/* How to Love an Aries */}
  <div>
    <h3 className="text-2xl font-semibold text-white mb-2">Kako voljeti Ovna?</h3>
    <p className="text-gray-300 text-lg leading-relaxed">
      Ovan je neizostavan u iskazivanju svojih emocija, koje često pokazuje fizički. U dobrim danima, Ovan je nevjerojatno ljubazan i pažljiv. Međutim, kada su loše raspoloženi, mogu biti katastrofalna sila prirode. Oni se kreću između krajnosti – kada su uznemireni, mogu vas gurati od sebe, ali će se brzo vratiti kada im počnete nedostajati. Ljubav prema Ovnu zahtijeva iznimnu snagu jer ćete morati biti stabilna prisutnost usred oluje emocija.
    </p>
    <p className="text-gray-300 text-lg leading-relaxed mt-4">
      Ovan se ponekad može zanijeti i nesvjesno povrijediti osobe koje voli. Moraju naučiti da snaga ne dolazi uvijek iz prisile i da je kompromis važan. Možda ćete im morati pomoći da shvate kako njihovi impulsi nisu uvijek ispravni i da je važno uzeti vrijeme za razmišljanje prije djelovanja.
    </p>
  </div>

  {/* Who is an Aries' Soulmate? */}
  <div>
    <h3 className="text-2xl font-semibold text-white mb-2">Tko je srodna duša Ovna?</h3>
    <p className="text-gray-300 text-lg leading-relaxed">
      Srodna duša Ovna je strastvena, koketna i emocionalno izravna osoba. Ovan uživa u uzbuđenju i privlači ga netko tko može pratiti njegovu energiju i hrabrost. Srodna duša Ovna nije netko tko se povlači pred njegovom otvorenošću, već osoba koja prihvaća njihovu izravnost i ne boji se suočiti s izazovima. Ovan voli partnere koji su neustrašivi i koji ne pristaju na konvencije. Njihova avanturistička priroda često ih vodi u nekonvencionalne odnose, a ponekad im je teško ostati u dugotrajnim vezama.
    </p>
    <p className="text-gray-300 text-lg leading-relaxed mt-4">
      Međutim, kada pronađu nekoga tko ih zaista impresionira, Ovan može pasti toliko duboko u ljubav da zaboravi na svoje sklonosti igri i flertu. Ako možete izdržati njihovu emocionalnu nepostojanost, otkrit ćete da su Ovnove ljubavi nevjerojatno lojalne i velikodušne. Oni su tip osobe koja će usred emocionalne oluje ući u vaš život i pružiti vam nježnu ružu kao znak svojih osjećaja.
    </p>
  </div>
</div>


          {/* Best Careers */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Najbolje karijere za Ovna</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ovan je rođeni vođa, što ga čini odličnim za karijere koje zahtijevaju preuzimanje inicijative i donošenje brzih odluka. Oni se najbolje snalaze u zanimanjima koja im pružaju slobodu i priliku za avanturu, kao što su poduzetništvo, vojska, sport i politika.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AriesSection;

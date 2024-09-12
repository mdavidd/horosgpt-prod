import React from 'react';
import Image from 'next/image';

const AquariusSection = () => {
  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Vodenjak</h1>
          <p className="text-gray-300 text-xl mb-6">
            20. siječanj – 18. veljača
          </p>
          <p className="text-gray-400 text-lg mb-16">
            Vodenjak, simboliziran vodenim nositeljem, predstavlja inovaciju, humanitarnost i originalnost. Ljudi rođeni pod ovim znakom poznati su po svojoj nekonvencionalnoj prirodi i uvijek teže stvaranju boljeg svijeta.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-16">
          <Image
            src="/zodiac/aquarius.png" // Ensure this image is in the public folder
            alt="Vodenjak"
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
                <td className="py-2">Vodenjak</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Datumi</td>
                <td className="py-2">20. siječanj – 18. veljača 2024</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Element</td>
                <td className="py-2">Zrak</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Modalitet</td>
                <td className="py-2">Fiksni</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Vladajući planet</td>
                <td className="py-2">Uran</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Personality Section */}
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Osobnost</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Vodenjaci su poznati po svojoj jedinstvenoj i nekonvencionalnoj prirodi. Oni su vizionari, uvijek gledajući naprijed i tražeći nove načine kako unaprijediti svijet oko sebe. Njihova inovativna i humanitarna crta često ih vodi do toga da postanu lideri u pokretima za socijalnu pravdu ili pioniri u tehnologiji. Njihov um je širok i otvoren, a njihova kreativnost nema granica.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Vodenjaci cijene slobodu i neovisnost, kako u mislima tako i u djelima. Njihova otvorenost prema novim idejama često ih čini nepredvidljivima, ali to je upravo ono što ih izdvaja od drugih. Sposobni su osmisliti originalna rješenja za složene probleme i uvijek traže način da ostvare svoje vizije u stvarnosti.
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
                  <li>Kreativnost</li>
                  <li>Neovisnost</li>
                  <li>Vizionarski duh</li>
                  <li>Otvorenost uma</li>
                  <li>Humanitarnost</li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Slabosti</h3>
                <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                  <li>Emocionalna distanca</li>
                  <li>Ponekad previše buntovni</li>
                  <li>Tvrdoglavost</li>
                  <li>Sklonost izolaciji</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Love, Sex, and Romance */}
          <div className="border-t border-gray-700 pt-16 mt-16 space-y-8">
            <h2 className="text-3xl font-semibold text-white mb-4">Vodenjak u ljubavi, seksu i romantici</h2>

            {/* How to Seduce an Aquarius */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako zavesti Vodenjaka?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Zavođenje Vodenjaka zahtijeva intelektualnu stimulaciju i nekonvencionalan pristup. Oni vole razgovarati o idejama, tehnologijama i inovacijama, pa ih možete privući ako pokažete svoju jedinstvenost i sposobnost da mislite izvan okvira. Primjerice, umjesto klasičnog izlaska na večeru, pozovite ih na događaj gdje mogu diskutirati o društvenim promjenama ili sudjelovati u kreativnim radionicama. Oni vole osjećaj slobode, pa nemojte biti previše posesivni.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Primjerice, možete ih zadiviti neočekivanom intelektualnom raspravom ili ih odvesti na mjesto gdje se mogu osjećati slobodno i istražiti nova iskustva. Vodenjaci vole osobe koje su nekonvencionalne i spremne na promjene, stoga ih zavodite kroz spontanost i otvorenost prema nepoznatom.
              </p>
            </div>

            {/* Does Aquarius Fall in Love Quickly? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Da li se Vodenjak brzo zaljubljuje?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Vodenjaci se rijetko brzo zaljubljuju. Iako su otvoreni prema novim iskustvima, u ljubavi su oprezni i često drže emocionalnu distancu dok ne osjete da je veza autentična i intelektualno stimulativna. Oni traže partnera s kojim mogu dijeliti svoje ideje i vizije, stoga zaljubljivanje dolazi tek kad osjete duboku mentalnu povezanost.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Kad se Vodenjak zaljubi, to je duboko i često neočekivano, ali njihova potreba za slobodom nikad ne prestaje. Ako možete pratiti njihov ritam i ne pokušavate ih ograničiti, oni će vam uzvratiti ljubav na svoj jedinstven, nekonvencionalan način.
              </p>
            </div>

            {/* Who Attracts an Aquarius? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko privlači Vodenjaka?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Vodenjake privlače ljudi koji su inteligentni, originalni i koji se ne boje biti drugačiji. Njihove idealne partnere čine osobe koje cijene slobodu i spremni su na intelektualne izazove. Oni traže partnere koji su neovisni i koji ih mogu inspirirati da dalje razvijaju svoje ideje.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ako ste otvoreni, inovativni i ne bojite se pokazati svoju nekonvencionalnu stranu, Vodenjak će vas brzo primijetiti. Njih privlače ljudi koji cijene slobodu i neovisnost jednako kao i oni, i koji su spremni na nekonvencionalne pristupe ljubavi i životu.
              </p>
            </div>

            {/* How to Love an Aquarius */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako voljeti Vodenjaka?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Voljeti Vodenjaka znači poštovati njegovu potrebu za slobodom i originalnošću. Oni traže partnere koji ih neće sputavati, već ih podržavati u njihovim inovativnim idejama. Najvažnije je pokazati im da ih prihvaćate takvima kakvi jesu – neovisne, nekonvencionalne i spremne za promjene.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Primjerice, možete pokazati ljubav prema Vodenjaku tako što ćete podržati njihove nekonvencionalne projekte ili ideje. Oni cijene partnere koji su spremni rasti zajedno s njima i koji neće tražiti previše emocionalne ovisnosti.
              </p>
            </div>

            {/* Who is Aquarius' Soulmate? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko je srodna duša Vodenjaka?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Srodna duša Vodenjaka je netko tko dijeli njihovu strast za inovacijama i slobodom. To je osoba koja može pratiti njihov intelektualni tempo i koja cijeni neovisnost i originalnost. Vodenjaci traže partnere koji su nekonvencionalni, spremni na avanture i uvijek otvoreni za nove ideje i pristupe.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ako volite izazove, nove ideje i niste skloni konvencijama, Vodenjak će vas smatrati svojom idealnom srodnom dušom.
              </p>
            </div>
          </div>

          {/* Best Careers */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Najbolje karijere za Vodenjaka</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Vodenjaci su najbolji u karijerama koje uključuju inovacije, tehnologiju i humanitarni rad. Zanimanja poput inženjera, znanstvenika, socijalnih radnika, izumitelja ili tehnoloških vizionara idealna su za ovaj znak. Sve što uključuje promjene i stvaranje nečeg novog odgovara njihovom nekonvencionalnom umu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AquariusSection;

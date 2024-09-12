import React from 'react';
import Image from 'next/image';

const CapricornSection = () => {
  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Jarac</h1>
          <p className="text-gray-300 text-xl mb-6">
            22. prosinac – 19. siječanj
          </p>
          <p className="text-gray-400 text-lg mb-16">
            Jarac, simboliziran planinskom kozom, predstavlja ambiciju, disciplinu i izdržljivost. Ljudi rođeni pod ovim znakom poznati su po svojoj neustrašivoj odlučnosti da postignu svoje ciljeve, često kroz mukotrpan rad i strpljenje.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-16">
          <Image
            src="/zodiac/capricorn.png" // Ensure this image is in the public folder
            alt="Jarac"
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
                <td className="py-2">Jarac</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Datumi</td>
                <td className="py-2">22. prosinac – 19. siječanj 2024</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Element</td>
                <td className="py-2">Zemlja</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Modalitet</td>
                <td className="py-2">Kardinalni</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Vladajući planet</td>
                <td className="py-2">Saturn</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Personality Section */}
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Osobnost</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Jarac je poznat po svojoj ambiciji, praktičnosti i izdržljivosti. Ljudi rođeni u ovom znaku su izuzetno usmjereni na postizanje svojih ciljeva i ne boje se napornog rada. Oni su strpljivi, odgovorni i često preuzimaju ulogu vođe u svim aspektima života. Njihova upornost i odlučnost čine ih nezamjenjivima kada su u pitanju dugoročni projekti i planiranje.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Iako mogu izgledati rezervirano i ozbiljno, ispod te površine Jarci su izuzetno lojalni i duboko brižni prema onima koje vole. Njihova želja za stabilnošću i uspjehom u životu često ih vodi do velikih postignuća, ali nikada ne zaboravljaju ljude koji su im pomogli na putu.
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
                  <li>Odgovornost</li>
                  <li>Ambicioznost</li>
                  <li>Strpljenje</li>
                  <li>Samokontrola</li>
                  <li>Odlučnost</li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Slabosti</h3>
                <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                  <li>Pretjerana ozbiljnost</li>
                  <li>Sklonost pesimizmu</li>
                  <li>Opreznost</li>
                  <li>Ponekad emocionalna distanciranost</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Love, Sex, and Romance */}
          <div className="border-t border-gray-700 pt-16 mt-16 space-y-8">
            <h2 className="text-3xl font-semibold text-white mb-4">Jarac u ljubavi, seksu i romantici</h2>

            {/* How to Seduce a Capricorn */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako zavesti Jarca?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Zavoditi Jarca znači pokazati im da ste stabilni, pouzdani i ambiciozni. Jarac ne voli igre — žele partnera na kojeg mogu računati i koji dijeli njihove dugoročne ciljeve. Umjesto dramatičnih romantičnih gesti, Jarac će više cijeniti vaš trud u stvaranju sigurnosti i stabilnosti u vezi. Ako želite impresionirati Jarca, pokažite im svoju radnu etiku, dosljednost i praktičan pristup životu.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Primjerice, umjesto spontanog putovanja, Jarci će biti oduševljeni ako im pomognete s projektom ili im pokažete kako cijenite trud koji ulažu u karijeru. Jarčevi su privučeni partnerima koji su ozbiljni i odgovorni, i kojima je jasno što žele postići u životu.
              </p>
            </div>

            {/* Does Capricorn Fall in Love Quickly? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Da li se Jarac brzo zaljubljuje?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Jarčevi se ne zaljubljuju brzo. Oni vole pažljivo graditi odnose, a zaljubljivanje za njih je dug proces koji zahtijeva povjerenje i sigurnost. Prije nego što otvore svoje srce, Jarci žele biti sigurni da je druga osoba ozbiljna i odgovorna kao i oni. Njihova ljubav je postojana i duboka, ali do nje dolaze polako, bez žurbe.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Kad se jednom zaljube, Jarci su izuzetno lojalni i posvećeni partneri. Njihova ljubav je poput čvrstog temelja koji traje dugo, a njihova spremnost da rade na vezi čini ih pouzdanim partnerima za cijeli život.
              </p>
            </div>

            {/* Who Attracts a Capricorn? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko privlači Jarca?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Jarčeve privlače ljudi koji su stabilni, odgovorni i ambiciozni. Oni vole partnere koji im mogu pružiti osjećaj sigurnosti i koji dijele njihove dugoročne ciljeve. Ako ste osoba koja ima jasan plan za budućnost, koja je praktična i pouzdana, Jarac će vas brzo primijetiti.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Njih privlače partneri koji su ozbiljni u vezi i koji ne traže prolazne avanture. Ako možete pokazati da cijenite njihovu radnu etiku i podržavate njihove ambicije, Jarac će biti impresioniran. Oni traže partnere koji su spremni na dugoročno ulaganje u vezu.
              </p>
            </div>

            {/* How to Love a Capricorn */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako voljeti Jarca?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Voljeti Jarca znači biti dosljedan i podržavati njihove ambicije. Oni cijene stabilnost i traže partnere koji su ozbiljni i zreli. Ako želite voljeti Jarca na pravi način, budite tu za njih kroz sve izazove, pružajući im emocionalnu sigurnost i praktičnu podršku. Jarci ne traže dramatične ljubavne izraze, već iskrenu i postojanu ljubav koja s vremenom raste.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Primjerice, budite njihov oslonac kada se suočavaju s izazovima u karijeri, i pokažite im da razumijete njihove potrebe za stabilnošću i odgovornošću. Jarac cijeni partnere koji su spremni graditi zajedničku budućnost.
              </p>
            </div>

            {/* Who is Capricorn's Soulmate? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko je srodna duša Jarca?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Srodna duša Jarca je osoba koja razumije njihovu ambiciju, disciplinu i potrebu za stabilnošću. To je netko tko dijeli njihove dugoročne ciljeve i tko je spreman raditi na vezi jednako ozbiljno kao i Jarac. Njihova srodna duša je netko tko im može pružiti osjećaj sigurnosti i koji je pouzdan u svim aspektima života.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Jarac traži partnera koji je ozbiljan, odgovoran i spreman graditi vezu na čvrstim temeljima. Ako volite stabilnost, sigurnost i dijelite njihove ambicije, Jarac će vas smatrati svojom savršenom srodnom dušom.
              </p>
            </div>
          </div>

          {/* Best Careers */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Najbolje karijere za Jarca</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Jarčevi su odlični u karijerama koje zahtijevaju odgovornost, organiziranost i predanost. Zanimanja poput financija, menadžmenta, arhitekture ili prava savršeno odgovaraju njihovoj disciplini i sposobnosti dugoročnog planiranja. Sve što uključuje strategiju, vodstvo i odgovornost idealno je za njih.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapricornSection;

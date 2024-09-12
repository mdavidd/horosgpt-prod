import React from 'react';
import Image from 'next/image';

const LibraSection = () => {
  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Vaga</h1>
          <p className="text-gray-300 text-xl mb-6">
            23. rujan – 22. listopad
          </p>
          <p className="text-gray-400 text-lg mb-16">
            Vaga, simbolizirana vagom, poznata je po svojoj želji za ravnotežom, harmonijom i pravdom. Ljudi rođeni pod ovim znakom cijene ljepotu, estetiku i sklad u svim aspektima života.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-16">
          <Image
            src="/zodiac/libra.png" // Ensure this image is in the public folder
            alt="Vaga"
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
                <td className="py-2">Vaga</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Datumi</td>
                <td className="py-2">23. rujan – 22. listopad 2024</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Element</td>
                <td className="py-2">Zrak</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Modalitet</td>
                <td className="py-2">Kardinalni</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Vladajući planet</td>
                <td className="py-2">Venera</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Personality Section */}
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Osobnost</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Vage su poznate po svojoj potrebi za harmonijom, ravnotežom i pravdom. Ljudi rođeni u znaku Vage imaju urođeni osjećaj za estetiku i često traže ljepotu u svakodnevnim stvarima. Njihova sposobnost da vide obje strane svake priče čini ih diplomatskim i vještima u rješavanju konflikata. Vage vole sklad u svojim odnosima, te im je važno da sve bude uravnoteženo i pravedno.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Njihova ljubav prema ljepoti i estetici ogleda se u njihovom životnom stilu, od odjeće do uređenja doma. Vage teže harmoničnim odnosima i često igraju ulogu mirotvorca. Iako vole društvo i uživaju u interakcijama s drugima, ponekad se mogu izgubiti u pokušaju da svima ugode, zanemarujući vlastite potrebe.
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
                  <li>Diplomatičnost</li>
                  <li>Šarm</li>
                  <li>Estetski osjećaj</li>
                  <li>Pravednost</li>
                  <li>Sklonost harmoniji</li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Slabosti</h3>
                <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                  <li>Neodlučnost</li>
                  <li>Težnja da svima ugode</li>
                  <li>Izbjegavanje sukoba pod svaku cijenu</li>
                  <li>Ovisnost o vanjskom mišljenju</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Love, Sex, and Romance */}
          <div className="border-t border-gray-700 pt-16 mt-16 space-y-8">
            <h2 className="text-3xl font-semibold text-white mb-4">Vaga u ljubavi, seksu i romantici</h2>

            {/* How to Seduce a Libra */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako zavesti Vagu?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Zavođenje Vage je umjetnost samo po sebi. Ovaj znak voli suptilne, profinjene geste koje pokazuju šarm, eleganciju i smisao za ravnotežu. Ako želite osvojiti Vagu, zaboravite na previše agresivan pristup — umjesto toga, fokusirajte se na nježne, promišljene komplimente i sofisticirane poteze. Recite im nešto promišljeno i iskreno, poput toga kako ste primijetili njihov jedinstveni stil ili koliko cijenite njihov osjećaj za pravdu i ravnotežu u razgovoru.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Primjerice, ako ih želite impresionirati, organizirajte večeru u prekrasnom restoranu s ugodnim, elegantnim ambijentom. Pobrinite se da prostor odražava njihov osjećaj za estetiku — sve od svijeća do postavljanja stola treba biti u savršenom skladu. Vage vole male detalje koji pokazuju da ste obratili pažnju na ono što ih čini sretnima. Ako želite nešto jednostavnije, mali poklon poput cvijeta koji ste sami odabrali može imati ogroman utjecaj na njih. Ne radi se o veličini gesta, već o njihovoj promišljenosti i ravnoteži.              </p>
            </div>

            {/* Does Libra Fall in Love Quickly? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Da li se Vaga brzo zaljubljuje?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Vage se mogu brzo zaljubiti, ali s dozom opreza. Oni vole ideju ljubavi — romantične šetnje, dugačke razgovore uz vino i zajednički trenuci pod zvjezdanim nebom. Iako ih privlače romantični ideali, Vage su vrlo selektivne kada biraju s kim će dijeliti svoje srce. Njihova zaljubljenost često dolazi iz intelektualne i emocionalne stimulacije; potreban im je partner koji će biti njihov ravnopravan, ali i pružiti im osjećaj mira.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Kada se Vaga zaljubi, to je obično duboka, intenzivna povezanost. Oni se daju cijelim srcem, nastojeći održati sklad i ravnotežu u vezi. Primjerice, možda će se brzo zaljubiti u nekoga tko im se čini estetski privlačan i s kim dijele intelektualne interese, ali ako osjete neravnotežu ili emocionalnu nesigurnost, mogu se povući i postati distancirani. Njihov idealan partner je netko tko razumije njihovu potrebu za ravnotežom i tko je spreman uložiti trud u održavanje skladne veze.              </p>
            </div>

            {/* Who Attracts a Libra? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko privlači Vagu?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Vage su privučene osobama koje imaju eleganciju, šarm i ljubav prema ljepoti. Oni traže partnere koji su sofisticirani i koji imaju rafiniran osjećaj za stil i estetiku. Ako imate osjećaj za sklad i ravnotežu u životu, brzo ćete osvojiti Vagu. Njih privlače ljudi koji su emocionalno stabilni i koji mogu s lakoćom rješavati konflikte. U društvenim situacijama, oni vole biti okruženi ljudima koji su ugodni, šarmantni i koji cijene umjetnost i kulturu.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Na primjer, ako pozovete Vagu na posjet umjetničkoj galeriji ili kulturnom događaju, brzo ćete ih pridobiti. Oni vole partnere koji razumiju važnost detalja — od izbora odjeće do načina na koji komuniciraju. Njih privlači suptilan šarm, a ako pokažete da razumijete njihovu potrebu za harmonijom i ljepotom, Vaga će se osjećati opušteno i zadovoljno u vašem društvu.              </p>
            </div>

            {/* How to Love a Libra */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako voljeti Vagu?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Voljeti Vagu znači razumjeti njihovu potrebu za skladom i ravnotežom u svim aspektima života. Oni traže partnere koji će im pružiti emocionalnu sigurnost, ali i intelektualnu stimulaciju. Važno je da pokažete Vagi da ste spremni na kompromis i da ste svjesni kako održavati harmoniju u vezi. Vage vole razgovore o osjećajima i promišljenu komunikaciju. Ako želite voljeti Vagu na pravi način, budite spremni na dijalog i otvorenost — oni ne traže sukobe, već mirne i uravnotežene odnose.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Primjerice, ako imate nesuglasice, umjesto da podižete glas, sjednite i mirno razgovarajte o onome što vas muči. Vaga će cijeniti vašu sposobnost da rješavate probleme bez stvaranja drame. Oni su izuzetno osjetljivi na disharmoniju u vezi, pa budite pažljivi u načinu na koji komunicirate. Mala gesta poput zajedničke šetnje nakon napornog dana može im pružiti osjećaj mira i povezanosti. Oni traže partnere koji će s njima graditi život temeljen na ljubavi, kompromisu i obostranoj podršci.              </p>
            </div>

            {/* Who is Libra's Soulmate? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko je srodna duša Vage?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Srodna duša Vage je netko tko dijeli njihovu ljubav prema ljepoti, harmoniji i intelektualnoj povezanosti. To je osoba koja može pružiti osjećaj mira i balansa, a istovremeno donijeti strast i uzbuđenje kada je to potrebno. Vage vole partnere koji su emocionalno zreli i sposobni rješavati sukobe na način koji potiče sklad. Njihova srodna duša je netko tko će ih podržavati u njihovim nastojanjima da održe ravnotežu u životu.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Na primjer, njihova srodna duša može biti netko tko cijeni umjetnost, poput osoba koje uživaju u posjetima muzejima, koncertima ili teatru. Vage vole partnere koji su voljni uložiti trud u izgradnju dugoročnih odnosa i koji razumiju važnost međusobnog poštovanja i kompromisa. Ako volite balans između intelektualne stimulacije i emocionalne stabilnosti, Vaga će vas smatrati svojom idealnom srodnom dušom. Oni traže vezu koja nije samo fizička ili emocionalna, već i mentalna — duboko povezanu na svim razinama.              </p>
            </div>
          </div>

          {/* Best Careers */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Najbolje karijere za Vagu</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Vage su izvrsne u zanimanjima koja zahtijevaju diplomaciju, osjećaj za estetiku i pravdu. Karijere poput umjetnosti, dizajna, prava, savjetovanja ili diplomacije prirodno odgovaraju njihovim vještinama. Oni su također izuzetno uspješni u ulogama koje uključuju rad s ljudima, gdje mogu koristiti svoj šarm i sposobnost rješavanja sukoba.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraSection;

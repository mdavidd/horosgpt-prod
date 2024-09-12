import React from 'react';
import Image from 'next/image';

const ScorpioSection = () => {
  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Škorpion</h1>
          <p className="text-gray-300 text-xl mb-6">
            23. listopad – 21. studeni
          </p>
          <p className="text-gray-400 text-lg mb-16">
            Škorpion, simboliziran škorpionom, poznat je po svojoj intenzivnoj, strastvenoj i misterioznoj prirodi. Ljudi rođeni pod ovim znakom duboko osjećaju svoje emocije i uvijek traže dublje značenje u životu.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-16">
          <Image
            src="/zodiac/scorpio.png" // Ensure this image is in the public folder
            alt="Škorpion"
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
                <td className="py-2">Škorpion</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Datumi</td>
                <td className="py-2">23. listopad – 21. studeni 2024</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Element</td>
                <td className="py-2">Voda</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Modalitet</td>
                <td className="py-2">Fiksni</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Vladajući planet</td>
                <td className="py-2">Pluton i Mars</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Personality Section */}
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Osobnost</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Škorpioni su duboki, intenzivni i misteriozni. Oni su poznati po svojoj snažnoj intuiciji, strasti i sposobnosti da vide kroz površinu stvari. Uvijek traže dublje značenje u svim aspektima života, od odnosa do karijere. Njihov prodoran pogled često otkriva njihovu sposobnost da čitaju ljude kao knjige, a njihova emocionalna inteligencija je izuzetno razvijena.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Iako se mogu činiti zatvorenima, jednom kada se Škorpion otvori, on je nevjerojatno lojalan i predan. Oni su emocionalno intenzivni i ne vole površne odnose – uvijek traže autentičnost i duboku povezanost. Njihov magnetizam je neporeciv, a zbog svoje tajanstvene prirode, mnogi ih smatraju fascinantnima.
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
                  <li>Intenzivnost</li>
                  <li>Strast</li>
                  <li>Lojalnost</li>
                  <li>Pronicljivost</li>
                  <li>Misterioznost</li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Slabosti</h3>
                <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                  <li>Ljubomora</li>
                  <li>Opsesivnost</li>
                  <li>Tajnovitost</li>
                  <li>Manipulativnost</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Love, Sex, and Romance */}
          <div className="border-t border-gray-700 pt-16 mt-16 space-y-8">
            <h2 className="text-3xl font-semibold text-white mb-4">Škorpion u ljubavi, seksu i romantici</h2>

            {/* How to Seduce a Scorpio */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako zavesti Škorpiona?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Zavođenje Škorpiona nije jednostavno — ovo je znak koji traži više od površnih veza i prolaznih flertova. Ako želite privući Škorpiona, pripremite se na emocionalnu dubinu i autentičnost. Njihov intenzitet zahtijeva hrabrost i spremnost na suočavanje s njihovom neuhvatljivom prirodom. Površnost im je odbojna, stoga ako želite njihovu pažnju, budite suptilni, misteriozni i spremni pokazati svoje najdublje misli. Zavodite ih kroz intimne trenutke, tihe noći ispunjene dubokim razgovorima, umjesto kroz glasne javne geste.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Primjerice, Škorpiona možete osvojiti organiziranjem privatne večeri uz svijeće, gdje ćete biti potpuno iskreni o svojim najdubljim osjećajima i strahovima. Njima nije važno koliko su grandiozne vaše geste, već koliko su autentične i koliko pokazujete ranjivost. Razmjena tajni i skrivenih dijelova vaše duše osvojit će Škorpiona jer oni žele partnera s kojim mogu podijeliti emocionalne dubine. Primjer razgovora o temama poput filozofije života, smrti ili misterija ljudske psihe brzo će privući njihovu pozornost.              </p>
            </div>

            {/* Does Scorpio Fall in Love Quickly? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Da li se Škorpion brzo zaljubljuje?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Škorpioni su suzdržani kad je zaljubljivanje u pitanju. Za njih je ljubav ozbiljna stvar koja zahtijeva vrijeme i povjerenje. Zaljubljuju se sporo, pažljivo gradeći temelje odnosa. Ako se zaljube, to nije prolazna emocija; Škorpion voli duboko, intenzivno i bezrezervno. Njihova ljubav je poput vulkana koji sporo tinja, ali kad eruptira, postaje nevjerojatno moćna i ne može se ignorirati.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Kad Škorpion konačno dopusti sebi da se zaljubi, njihova ljubav često prelazi u opsesiju. Oni su izuzetno lojalni, ali očekuju isto od svog partnera. Škorpion se neće zadovoljiti polovičnim emocijama ili vezama. Oni traže nekoga tko će biti uz njih kroz sve izazove, tko može podnijeti emocionalne visine i dubine koje donose sa sobom. Ako im ne možete pružiti autentičnost i emocionalnu dubinu, vjerojatno neće ostati u vezi dugo.              </p>
            </div>

            {/* Who Attracts a Scorpio? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko privlači Škorpiona?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Škorpione privlače osobe koje zrače misterioznošću, emocionalnom snagom i strastvenošću. Oni vole partnere koji imaju unutarnju snagu i sposobnost čuvanja vlastitih tajni, ali koji su također voljni otkriti duboke dijelove svoje osobnosti. Ako želite privući Škorpiona, budite zanimljivi, zadržite dio svoje osobnosti za sebe i ne bojte se razgovarati o teškim temama.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Na primjer, partner koji može balansirati između otvorenosti i suptilne tajnovitosti idealan je za Škorpiona. Oni cijene partnere koji su dovoljno jaki da se nose s njihovim emocionalnim usponima i padovima, ali također sposobni održati vlastitu neovisnost. Škorpioni ne žele partnere koji će se lako povući kad stvari postanu teške – privlače ih ljudi koji ne bježe od emocionalne složenosti.              </p>
            </div>

            {/* How to Love a Scorpio */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako voljeti Škorpiona?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Voljeti Škorpiona zahtijeva snagu, strpljenje i spremnost da uđete u dublje emocionalne sfere. Škorpioni vole intenzivno, strastveno i nepopustljivo. Oni traže partnera koji je sposoban podnijeti njihovu emocionalnu dubinu i koji će biti tu kroz sve uspone i padove. Ako volite Škorpiona, budite spremni na emocionalne izazove. Oni će vas testirati, želeći vidjeti jeste li dovoljno snažni i iskreni da se nosite s njihovom intenzivnom ljubavlju.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Primjerice, Škorpion neće tolerirati neiskrenost ili površne geste. Oni žele osjetiti vašu lojalnost kroz male, ali značajne postupke — poput toga da im uvijek budete emocionalno dostupni i da ih nikada ne iznevjerite kada su najranjiviji. Njihova ljubav je sirova, a povjerenje koje s vremenom grade s vama je neprocjenjivo. Ako ste sposobni zaroniti u njihove emocionalne dubine, otkrit ćete partnera koji će vas voljeti snažno i bez rezerve.              </p>
            </div>

            {/* Who is Scorpio's Soulmate? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko je srodna duša Škorpiona?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Srodna duša Škorpiona je osoba koja razumije i prihvaća njihovu emocionalnu kompleksnost. To je netko tko je spreman na dublje emocionalne veze, tko ne bježi od tamnih strana života, i tko je dovoljno hrabar da se suoči s izazovima koje donosi strastvena ljubav. Škorpioni traže partnera koji je odan, emocionalno zreo i sposoban podnijeti njihovu intenzivnu prirodu.
              </p ><p className="text-gray-300 text-lg leading-relaxed">  
Primjerice, srodna duša Škorpiona je osoba koja će s njima dijeliti duboke razgovore, analizirati složene životne situacije i koja neće odustati kada stvari postanu teške. Oni traže ljubav koja je više od prolazne romanse; njihova srodna duša je partner koji će s njima istraživati sve slojeve života, uključujući one najdublje i najtamnije. Ako ste spremni na intenzivnu, gotovo magnetsku ljubav, Škorpion će vas voljeti s nepokolebljivom strašću i predanošću.              </p>
            </div>
          </div>

          {/* Best Careers */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Najbolje karijere za Škorpiona</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Škorpioni su izvrsni u zanimanjima koja zahtijevaju istraživanje, pronicljivost i odlučnost. Zanimanja poput psihologije, istraživačkog novinarstva, forenzike, detektivskog rada ili terapije odgovaraju njihovoj intenzivnoj, analitičkoj prirodi. Sve što uključuje otkrivanje skrivenih istina ili dubinsko istraživanje odgovara njihovom karakteru.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScorpioSection;

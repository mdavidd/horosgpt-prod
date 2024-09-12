import React from 'react';
import Image from 'next/image';

const PiscesSection = () => {
  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Ribe</h1>
          <p className="text-gray-300 text-xl mb-6">
            19. veljača – 20. ožujak
          </p>
          <p className="text-gray-400 text-lg mb-16">
            Ribe, simbolizirane ribama, poznate su po svojoj dubokoj empatiji, intuitivnosti i povezanosti sa svijetom snova. Ljudi rođeni pod ovim znakom često su sanjari, osjećajni i puni suosjećanja.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-16">
          <Image
            src="/zodiac/pisces.png" // Ensure this image is in the public folder
            alt="Ribe"
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
                <td className="py-2">Ribe</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Datumi</td>
                <td className="py-2">19. veljača – 20. ožujak 2024</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Element</td>
                <td className="py-2">Voda</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Modalitet</td>
                <td className="py-2">Promjenjivi</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Vladajući planet</td>
                <td className="py-2">Neptun</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Personality Section */}
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Osobnost</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ribe su duboko osjećajne osobe, često uronjene u svijet mašte i intuicije. Njihova sposobnost da suosjećaju s drugima čini ih izuzetno empatičnima, a njihova sklonost sanjarenju omogućuje im da vide ljepotu i u najmanjim stvarima. Ribe su prirodni iscjelitelji i često traže načine kako pomoći onima kojima je to potrebno.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Iako se mogu povući u svoj svijet snova, Ribe su izuzetno kreativne i duhovne. Njihova intuitivnost vodi ih kroz život, a oni koji ih poznaju, cijene njihovu sposobnost da razumiju emocije drugih ljudi čak i bez riječi. Njihova osjetljiva priroda ponekad ih može učiniti ranjivima, ali njihova unutarnja snaga i sposobnost da pronađu ljepotu u životu čine ih posebnima.
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
                  <li>Empatija</li>
                  <li>Kreativnost</li>
                  <li>Intuitivnost</li>
                  <li>Suosjećajnost</li>
                  <li>Duhovnost</li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Slabosti</h3>
                <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                  <li>Sklonost bježanju od stvarnosti</li>
                  <li>Pretjerana emocionalnost</li>
                  <li>Naivnost</li>
                  <li>Ponekad previše povučeni</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Love, Sex, and Romance */}
          <div className="border-t border-gray-700 pt-16 mt-16 space-y-8">
            <h2 className="text-3xl font-semibold text-white mb-4">Ribe u ljubavi, seksu i romantici</h2>

            {/* How to Seduce a Pisces */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako zavesti Ribe?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Zavođenje Riba zahtijeva emotivni i intuitivni pristup. Oni vole osjećaj duboke povezanosti, stoga zavodite ih kroz suptilne geste, nježnost i iskazivanje suosjećanja. Recimo, umjesto bučnih noćnih izlazaka, Ribe će više cijeniti intimnu večer kod kuće uz svijeće, gdje mogu razgovarati o svojim snovima i osjećajima. Njih privlače ljudi koji su autentični i iskreni u svojoj ljubavi, pa pokažite im da vam je stalo kroz nježne riječi i geste.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Primjerice, iznenadite ih romantičnim pismom ili razgovorom o njihovim najdubljim snovima. Ribe vole osjećati da su shvaćene i voljene, a suptilni, emotivni pristup im je neodoljiv.
              </p>
            </div>

            {/* Does Pisces Fall in Love Quickly? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Da li se Ribe brzo zaljubljuju?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ribe se zaljubljuju brzo, jer su duboko emotivne i uvijek traže povezanost s drugima. Njihova romantična priroda ih vodi prema intenzivnim, dubokim osjećajima, a kada se zaljube, predaju se potpuno i bez zadrške. Međutim, zbog njihove sklonosti idealiziranju, ponekad mogu previše brzo ući u vezu, ne primjećujući crvene zastavice.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Kad Ribe vole, to je čista, duboka ljubav koja nadilazi površinske odnose. Oni traže emocionalnu povezanost, a zaljubljivanje im često dolazi prirodno i brzo, ali uvijek s puno osjećaja.
              </p>
            </div>

            {/* Who Attracts a Pisces? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko privlači Ribe?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ribe privlače osobe koje su empatične, nježne i intuitivne. Njih privlače partneri koji mogu razumjeti njihovu duboku emotivnu prirodu i koji su spremni dijeliti intimne trenutke i osjećaje. Osobe koje su kreativne i spiritualne, koje cijene umjetnost i prirodu, često su privlačne Ribama. Ako možete pokazati svoju suosjećajnu stranu i biti prisutni u trenucima emotivne ranjivosti, Ribe će vam se otvoriti.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Primjerice, partner koji voli pisati poeziju, slikati ili dijeliti dublje misli i emocije privući će Ribe, jer cijene kreativnost i emocionalnu povezanost.
              </p>
            </div>

            {/* How to Love a Pisces */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako voljeti Ribe?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Voljeti Ribe znači prihvatiti njihovu osjetljivu i emotivnu prirodu. Oni traže partnere koji su spremni biti njihova emocionalna podrška i koji su pažljivi prema njihovim potrebama. Ako ih volite, pokažite im da ste uvijek tu za njih, kroz nježne geste i suosjećanje. Ribe cijene partnere koji su pažljivi i emocionalno prisutni, te koji će ih razumjeti i podržati u trenucima ranjivosti.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Primjerice, budite spremni saslušati ih kad govore o svojim snovima ili strahovima. Njihova emotivna dubina zahtijeva partnera koji je strpljiv i spreman pružiti im sigurno mjesto gdje se mogu izraziti.
              </p>
            </div>

            {/* Who is Pisces' Soulmate? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko je srodna duša Riba?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Srodna duša Riba je osoba koja dijeli njihovu duboku emocionalnu povezanost i duhovnu prirodu. To je netko tko razumije njihove snove i tko je spreman dijeliti intimne, emotivne trenutke s njima. Ribe traže partnera koji može biti njihov emocionalni oslonac i koji ih prihvaća takvima kakvi jesu – osjetljivi, empatični i puni ljubavi.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ako volite sanjare koji traže dublji smisao u životu i ljubavi, Ribe će vas smatrati svojom idealnom srodnom dušom.
              </p>
            </div>
          </div>

          {/* Best Careers */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Najbolje karijere za Ribe</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ribe su izvrsne u karijerama koje zahtijevaju kreativnost, suosjećanje i intuitivnost. Zanimanja poput terapeuta, umjetnika, glazbenika, duhovnih vođa ili savjetnika savršeno odgovaraju njihovoj prirodi. Sve što uključuje pomaganje drugima i izražavanje njihovih dubokih emocija idealno je za ovaj znak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PiscesSection;

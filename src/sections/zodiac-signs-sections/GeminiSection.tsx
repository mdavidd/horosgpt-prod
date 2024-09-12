import React from 'react';
import Image from 'next/image';

const GeminiSection = () => {
  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Blizanci</h1>
          <p className="text-gray-300 text-xl mb-6">
            21. svibanj – 20. lipanj
          </p>
          <p className="text-gray-400 text-lg mb-16">
            Blizanci, simbolizirani blizancima, predstavljaju dvojakost ljudske prirode. Oni su promjenjivi, brzi i znatiželjni.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-16">
          <Image
            src="/zodiac/gemini.png" // Ensure this image is in the public folder
            alt="Blizanci"
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
                <td className="py-2">Blizanci</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Datumi</td>
                <td className="py-2">21. svibanj – 20. lipanj 2024</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Element</td>
                <td className="py-2">Zrak</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Modalitet</td>
                <td className="py-2">Promjenjivi</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Vladajući planet</td>
                <td className="py-2">Merkur</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Personality Section */}
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Osobnost</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Blizanci su zračni znak poznat po svojoj promjenjivoj prirodi, komunikativnosti i znatiželji. Oni su izuzetno društveni i vole se povezivati s drugima, često posjedujući mnoštvo interesa i hobija. Njihova intelektualna strana dolazi do izražaja kroz brzu razmjenu ideja i znanje iz različitih područja.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Međutim, njihova promjenjiva priroda može ih učiniti neodlučnima i nestabilnima, ali to je cijena njihove sposobnosti da se brzo prilagode novim situacijama i ljudima. Blizanci su uvijek u potrazi za novim iskustvima i izazovima.
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
                  <li>Komunikativnost</li>
                  <li>Znatiželja</li>
                  <li>Prilagodljivost</li>
                  <li>Brzina razmišljanja</li>
                  <li>Duhovitost</li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Slabosti</h3>
                <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                  <li>Neodlučnost</li>
                  <li>Nestalnost</li>
                  <li>Nemir</li>
                  <li>Sklonost tračanju</li>
                  <li>Površnost</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Love, Sex, and Romance */}
          <div className="border-t border-gray-700 pt-16 mt-16 space-y-8">
            <h2 className="text-3xl font-semibold text-white mb-4">Blizanci u ljubavi, seksu i romantici</h2>

            {/* How to Seduce a Gemini */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako zavesti Blizanca?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Zavođenje Blizanca nije stvar fizičke privlačnosti, već mentalne igre. Njihov mozak je njihova najveća erogena zona, pa ako želite osvojiti Blizanca, budite spremni na verbalni duel pun humora, brzih replika i neočekivanih tema. Oni vole razgovore koji skakuću s jedne teme na drugu, poput intelektualnog ping-ponga, gdje se misli stalno nadograđuju. Na primjer, jedan trenutak razgovarate o umjetnoj inteligenciji, a sljedeći ste već na temi najnovijih avanturističkih putovanja.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Blizanci vole izazove — ako možete pratiti njihovu dinamičnost i pritom dodati dašak originalnosti, brzo će vas zapaziti. Na primjer, pozovite ih na improvizirano večernje putovanje ili predložite spontani izlazak u obližnji muzej, a zatim nastavite s razgovorom o egzotičnim destinacijama koje planirate posjetiti. Njihovo srce će kucati brže jer ste pokazali da ne igrate na sigurno. S Blizancima je ključno održavati stvari svježima i zanimljivima — dosada je njihov najveći neprijatelj.              </p>
            </div>

            {/* Does Gemini Fall in Love Quickly? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Da li se Blizanci brzo zaljubljuju?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Blizanci su poput povjetarca — zaljubljuju se brzo, ali njihova osjećanja mogu se promijeniti jednako brzo kao što su se pojavila. Kada ih nešto ili netko oduševi, mogu se potpuno posvetiti tom trenutku, uživajući u svakoj sekundi. Međutim, njihova zaljubljenost je kao ljetna oluja — intenzivna, ali prolazna ako ne pronađu stalnu mentalnu stimulaciju. Jednog dana mogu biti potpuno očarani vašom sposobnošću da im pričate o najnovijim tehnološkim inovacijama ili zanimljivim filozofskim pitanjima, no već sljedećeg dana, ako nema izazova, mogu izgubiti interes.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Blizanci traže partnera koji može pratiti njihov tempo i intelektualnu znatiželju. Ako želite zadržati Blizanca zaljubljenog, trebate biti spremni na stalne promjene i nove ideje. Oni traže osobu koja će ih neprestano iznenađivati — bilo kroz razgovore, nova iskustva ili spontana putovanja. Primjerice, možete planirati vikend izlet bez određenog plana, samo s kartom i otvorenošću za istraživanje novog grada, što će ih potpuno oduševiti.              </p>
            </div>

            {/* Who Attracts a Gemini */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko privlači Blizance?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Blizance privlače ljudi koji su jednako znatiželjni, spontani i društveni kao i oni sami. Oni vole biti okruženi osobama koje ne samo da mogu pratiti njihove stalne promjene raspoloženja, već su i spremni na improvizaciju i istraživanje. Blizanci vole ljude koji su otvoreni za nove ideje i iskustva, one koji su uvijek spremni na razgovor o bilo kojoj temi — od najnovijih znanstvenih otkrića do putovanja u egzotične zemlje.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Zamislite partnera koji se bez oklijevanja pridruži Blizancu u spontanom plesnom natjecanju na ulici ili koji predloži da zajedno pohađaju kurs na kojem mogu naučiti novu vještinu, poput slikanja ili stranih jezika. Takva osoba brzo će osvojiti srce Blizanca. Ako pokažete da ste fleksibilni i spremni na sve, brzo ćete privući njihovu pažnju. Oni vole izazov i potiču ljude da budu otvoreni prema novim mogućnostima.              </p>
            </div>

            {/* How to Love a Gemini */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako voljeti Blizanca?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Voljeti Blizanca znači voljeti promjenu. Oni su poput vjetra — stalno u pokretu, uvijek tražeći novu avanturu, bilo fizičku ili intelektualnu. Da biste voljeli Blizanca, morate prihvatiti njihovu dvojakost. U jednom trenutku mogu biti vaš najbliži prijatelj, spremni na duge, duboke razgovore, a u sljedećem trenutku mogu se povući u svoje misli kako bi se koncentrirali na nešto novo i uzbudljivo što su otkrili. Da biste voljeli Blizanca, morate razumjeti da njihova sloboda nije prijetnja vašem odnosu, već njihova najdragocjenija osobina.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Blizanci cijene partnere koji ih podržavaju, ali koji ih ne sputavaju. Ako ih pustite da lete i istražuju, uvijek će vam se vratiti s novim pričama, iskustvima i idejama. Na primjer, ako im dopustite da sami istražuju nove hobije ili se upuste u kratke solo avanture, bit će vam zahvalni i osjećat će se bliže vama. U ljubavi, Blizanci traže partnera koji je spreman na stalno prilagođavanje i koji ih potiče na rast i učenje.              </p>
            </div>

            {/* Who is a Gemini's Soulmate? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko je srodna duša Blizanca?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Srodna duša Blizanca je netko tko može intelektualno parirati njihovoj brzoj, dinamičnoj prirodi. Njihov idealan partner nije samo osoba koja ih zabavlja, već i izaziva. Zamislite dugačke razgovore koji se prebacuju s filozofskih pitanja na spontane planove za vikend. Blizanci vole partnere koji su svestrani i koji mogu pratiti njihove intelektualne skokove.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Njihova srodna duša je netko tko može živjeti u trenutku, ali istovremeno planirati za budućnost. Oni žele partnera koji će s njima dijeliti spontane odluke poput odlaska na putovanje bez plana ili istraživanja novih koncepata kroz dugačke rasprave. Blizanac treba nekoga tko će ih zaintrigirati i intelektualno stimulirati, ali i osobu koja razumije njihovu promjenjivu prirodu. Njihov idealan partner je netko tko im daje slobodu, ali je uvijek spreman na nove avanture zajedno s njima.              </p>
            </div>
          </div>

          {/* Best Careers */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Najbolje karijere za Blizance</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Blizanci su najbolji u karijerama koje zahtijevaju komunikaciju, kreativnost i stalnu prilagodbu novim situacijama. Oni su izvrsni u novinarstvu, marketingu, prodaji, tehnologiji i svim poslovima koji zahtijevaju brzo razmišljanje i fleksibilnost. Njihova sposobnost da brzo uče i prenose informacije čini ih idealnima za uloge koje zahtijevaju svestranost i inovaciju.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiSection;

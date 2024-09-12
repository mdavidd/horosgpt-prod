import React from 'react';
import Image from 'next/image';

const VirgoSection = () => {
  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Djevica</h1>
          <p className="text-gray-300 text-xl mb-6">
            23. kolovoz – 22. rujan
          </p>
          <p className="text-gray-400 text-lg mb-16">
            Djevica, simbolizirana Djevicom, poznata je po svojoj analitičnoj prirodi, perfekcionizmu i sposobnosti da primijeti svaki detalj. Ljudi rođeni pod ovim znakom usmjereni su na organizaciju i preciznost te imaju izražen osjećaj odgovornosti.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-16">
          <Image
            src="/zodiac/virgo.png" // Ensure this image is in the public folder
            alt="Djevica"
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
                <td className="py-2">Djevica</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Datumi</td>
                <td className="py-2">23. kolovoz – 22. rujan 2024</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Element</td>
                <td className="py-2">Zemlja</td>
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
              Djevice su izuzetno analitične, praktične i sklone perfekcionizmu. Ljudi rođeni pod ovim znakom neprestano traže način kako poboljšati sebe i sve oko sebe. Oni su racionalni i precizni, uvijek primjećujući detalje koje drugi zanemaruju. Njihov život je često organiziran, a njihova sposobnost da rješavaju probleme čini ih pouzdanim prijateljima i partnerima.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Djevice cijene red i strukturu, a njihova prirodna sklonost ka organizaciji često ih čini osobama koje su u stanju postaviti ciljeve i planirati svaki korak prema uspjehu. Međutim, njihova težnja prema perfekciji može ih učiniti kritičnima prema sebi i drugima, što može izazvati stres. Unatoč tome, njihova briga za druge i posvećenost detaljima čini ih izuzetno brižnim osobama.
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
                  <li>Analitičnost</li>
                  <li>Praktičnost</li>
                  <li>Perfekcionizam</li>
                  <li>Sposobnost rješavanja problema</li>
                  <li>Snažan osjećaj odgovornosti</li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Slabosti</h3>
                <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                  <li>Kritičnost</li>
                  <li>Sklonost stresu</li>
                  <li>Perfekcionizam (do te mjere da izaziva nezadovoljstvo)</li>
                  <li>Samokritičnost</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Love, Sex, and Romance */}
          <div className="border-t border-gray-700 pt-16 mt-16 space-y-8">
            <h2 className="text-3xl font-semibold text-white mb-4">Djevica u ljubavi, seksu i romantici</h2>

            {/* How to Seduce a Virgo */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako zavesti Djevicu?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Zavesti Djevicu nije stvar grandioznih romantičnih pokreta; za njih, zavođenje počinje u umu. Djevice privlači inteligencija, praktičnost i pažnja prema detaljima. Ako želite pridobiti Djevicu, trebate im pokazati da cijenite njihove napore i promišljen pristup životu. Na primjer, dar koji pokazuje da ste slušali ono što im je važno — bilo da je to knjiga iz njihovog omiljenog područja interesa ili jednostavno nešto što im olakšava svakodnevicu — bit će više nego dovoljan da im privuče pažnju.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Zavođenje Djevice također uključuje pokazivanje vaše organiziranosti. Na primjer, ako planirate večeru, iznenadite ih savršeno pripremljenim jelom ili promišljenim detaljima, poput pažljivo postavljenog stola ili zajedničkog kuhanja koje uključuje njihovu omiljenu rutinu. Djevice vole strukturu i planiranje, pa će ih impresionirati vaš trud i osjećaj za red. U ljubavi, najmanje ih privlače kaotične situacije — njihovo srce osvaja netko tko ih razumije na dubokoj, intelektualnoj razini.              </p>
            </div>

            {/* Does Virgo Fall in Love Quickly? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Da li se Djevica brzo zaljubljuje?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Djevica se zaljubljuje polako, pažljivo analizirajući svaki detalj potencijalnog partnera. Dok drugi znakovi mogu ući u vezu spontano, Djevica voli sigurno graditi odnos na stabilnim temeljima. Za njih, zaljubljivanje je proces koji zahtijeva vrijeme i povjerenje — žele biti sigurni da je osoba s kojom su povezani ozbiljna i pouzdana. Na primjer, ako primijete da im pomažete u stvarima koje su važne ili da dijelite njihovu strast za redom i planiranjem, to će ih duboko dirnuti.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Djevica ne voli gubiti vrijeme na površne odnose, pa će se zaljubiti tek kad shvati da je veza vrijedna njezinog truda. Jednom kad se Djevica zaljubi, njihov partner može očekivati iskrenu, posvećenu ljubav koja je dugoročna i stabilna. Djevice ne traže vatromete i dramatične geste, već osobu koja je dosljedna, pouzdana i spremna rasti s njima kroz život.              </p>
            </div>

            {/* Who Attracts a Virgo? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko privlači Djevicu?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Djevice privlače ljudi koji su inteligentni, praktični i stabilni. Ako imate jasno postavljene ciljeve i organizirate svoj život na način koji pokazuje vašu sposobnost upravljanja svakodnevnim izazovima, brzo ćete osvojiti Djevičinu pažnju. Oni cijene ljude koji dijele njihovu sklonost prema redu i jasnoći. Zamislite partnera koji zna kako upravljati financijama, organizirati putovanje do najmanjih detalja ili čak postaviti plan za zajedničke ciljeve — to su vrste osoba koje privlače Djevice.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Primjerice, ako ih možete impresionirati pažljivim upravljanjem svojih obaveza ili pokazivanjem interesa za unaprjeđenje vašeg zajedničkog života, lako ćete privući njihovo srce. Djevice cijene duboku pažnju i predanost u vezi, pa ako možete pokazati istu sklonost ka redovitosti i planiranju, imate šanse za dugu i stabilnu vezu.              </p>
            </div>

            {/* How to Love a Virgo */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako voljeti Djevicu?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Voljeti Djevicu znači voljeti nekoga tko je praktičan, analitičan i uvijek težiti poboljšanju. Oni traže stabilne i pouzdane partnere koji dijele njihovu viziju za strukturiran i organiziran život. Najbolji način da volite Djevicu je kroz male, promišljene geste koje pokazuju da primjećujete i cijenite njihov trud. Na primjer, pripremite im organizirani plan za vikend ili im pomozite s nekom zadatkom koji su možda zanemarili — to su sitnice koje će osvojiti njihovo srce.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Djevice ne trebaju bučne javne izjave ljubavi, već suptilne, dosljedne geste. Ako možete razumjeti njihove potrebe za redom i stabilnošću te im pružiti siguran prostor u kojem se mogu razvijati, bit ćete idealan partner za Djevicu. Ova ljubav može biti tiha, ali je izuzetno snažna i pouzdana.              </p>
            </div>

            {/* Who is Virgo's Soulmate? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko je srodna duša Djevice?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Srodna duša Djevice je netko tko cijeni red, organizaciju i pažnju prema detaljima jednako kao i oni. Osoba koja razumije Djevičinu potrebu za strukturom i ne boji se rješavati izazove kroz analitički pristup brzo će osvojiti njihovo srce. Oni traže partnere koji su praktični, koji znaju balansirati svakodnevne obaveze i dugoročne ciljeve, te koji su voljni uložiti napor u zajednički rast i razvoj.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Djevica traži osobu koja ne samo da razumije važnost svakodnevnog reda, već i koja cijeni i podržava njihovu težnju ka perfekcionizmu. Ako volite pomagati i unaprjeđivati život kroz promišljene poteze i praktična rješenja, Djevica će vas smatrati idealnim partnerom za cijeli život.              </p>
            </div>
          </div>

          {/* Best Careers */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Najbolje karijere za Djevicu</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Djevice su idealne za karijere koje zahtijevaju preciznost, analitičnost i organizacijske vještine. Zanimanja poput analitičara podataka, savjetnika, istraživača, liječnika ili učitelja savršeno odgovaraju njihovom praktičnom i metodičkom pristupu životu. Njihova pažnja prema detaljima i strpljenje čine ih uspješnima u svim područjima koja zahtijevaju temeljitost i odgovornost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirgoSection;

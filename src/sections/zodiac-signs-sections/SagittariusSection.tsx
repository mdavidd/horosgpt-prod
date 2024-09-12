import React from 'react';
import Image from 'next/image';

const SagittariusSection = () => {
  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Strijelac</h1>
          <p className="text-gray-300 text-xl mb-6">
            22. studeni – 21. prosinac
          </p>
          <p className="text-gray-400 text-lg mb-16">
            Strijelac, simboliziran strijelom, poznat je po svojoj nezasitnoj želji za avanturom, slobodom i spoznajom. Ljudi rođeni pod ovim znakom uvijek su u potrazi za novim iskustvima, novim znanjima i uzbuđenjima.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-16">
          <Image
            src="/zodiac/sagittarius.png" // Ensure this image is in the public folder
            alt="Strijelac"
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
                <td className="py-2">Strijelac</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Datumi</td>
                <td className="py-2">22. studeni – 21. prosinac 2024</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Element</td>
                <td className="py-2">Vatra</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Modalitet</td>
                <td className="py-2">Promjenjivi</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Vladajući planet</td>
                <td className="py-2">Jupiter</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Personality Section */}
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Osobnost</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Strijelci su poznati po svojoj ljubavi prema slobodi, optimizmu i entuzijazmu. Ovaj znak uvijek traži nova iskustva, neustrašivo istražujući nepoznato. Osobe rođene u ovom znaku imaju duboku želju za osobnim razvojem i stalnim širenjem svojih horizonta. Njihov entuzijazam i ljubav prema životu čine ih izuzetno privlačnima i zanimljivima.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Zbog njihove prirodne znatiželje i nemirnog duha, Strijelci mogu djelovati nepredvidivo. Iako često slijede vlastite putove, oni su lojalni prijatelji koji uvijek traže istinu. Njihova otvorenost i sposobnost da vide širu sliku života čini ih inspirativnima za one koji ih okružuju.
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
                  <li>Optimizam</li>
                  <li>Slobodoljubivost</li>
                  <li>Znatiželja</li>
                  <li>Filozofski duh</li>
                  <li>Prilagodljivost</li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Slabosti</h3>
                <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                  <li>Nestrpljivost</li>
                  <li>Prekomjerna iskrenost</li>
                  <li>Nemir</li>
                  <li>Nedostatak takta</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Love, Sex, and Romance */}
          <div className="border-t border-gray-700 pt-16 mt-16 space-y-8">
            <h2 className="text-3xl font-semibold text-white mb-4">Strijelac u ljubavi, seksu i romantici</h2>

            {/* How to Seduce a Sagittarius */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako zavesti Strijelca?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Zavođenje Strijelca znači zavoditi kroz avanturu. Oni vole spontane i uzbudljive situacije, pa ih privlače ljudi koji su jednako otvoreni za nova iskustva. Pozovite ih na putovanje u nepoznato, bilo da se radi o planinarenju, kampiranju ili jednostavnom izlasku koji uključuje nešto novo i neistraženo. Strijelac voli osjećaj slobode, pa ga nikako nemojte pokušati vezati ili ograničiti.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Na primjer, možete ih iznenaditi spontanim vikend izletom ili ponuditi neku neobičnu aktivnost poput skakanja s padobranom. Strijelci su oduševljeni ljudima koji su jednako entuzijastični i spremni na istraživanje svijeta. Najbrži način da pridobijete njihovu pažnju je da pokažete svoju spremnost na avanturu i zabavu.
              </p>
            </div>

            {/* Does Sagittarius Fall in Love Quickly? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Da li se Strijelac brzo zaljubljuje?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Strijelac se često brzo zaljubljuje jer ga privlači uzbuđenje koje dolazi s novim iskustvima. Ipak, njihova ljubav prema slobodi znači da se ponekad mogu brzo povući ako osjete da se veza previše ozbiljno razvija ili ih ograničava. Oni žele partnera koji im može pružiti osjećaj slobode dok istovremeno dijele njihovu strast prema životu.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Kad se Strijelac zaljubi, on voli strastveno i intenzivno, no uvijek će tražiti partnera koji razumije njihovu potrebu za neovisnošću. Ako želite zadržati Strijelčevu pažnju, budite spremni na izazove i pokažite da ste spremni dijeliti njihove nepredvidive puteve.
              </p>
            </div>

            {/* Who Attracts a Sagittarius? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko privlači Strijelca?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Strijelce privlače ljudi koji su otvoreni, iskreni i spremni na avanturu. Njih privlače partneri koji ih mogu pratiti u njihovim spontanim pothvatima, a istovremeno poštivati njihovu potrebu za neovisnošću. Ako ste spremni na duge filozofske razgovore, kao i na spontane planove, brzo ćete osvojiti srce Strijelca.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Pokažite im svoju ljubav prema istraživanju i učenju, te budite spremni biti njihov partner u svakom smislu — od fizičke avanture do intelektualnog istraživanja. Ako ih možete zabaviti i iznenaditi, Strijelac će biti vaš odani pratitelj.
              </p>
            </div>

            {/* How to Love a Sagittarius */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako voljeti Strijelca?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Voljeti Strijelca znači prihvatiti njihovu potrebu za slobodom i pustolovinom. Oni ne podnose ograničenja, pa je važno da im date prostora da budu ono što jesu. Ako ih želite voljeti na pravi način, budite njihov partner u avanturama, ali im također dajte slobodu da istražuju i rastu kao pojedinci. Strijelci cijene lojalnost i prijateljstvo u ljubavi, ali uvijek će tražiti partnera koji razumije i poštuje njihov nemiran duh.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Primjerice, iznenadite ih spontanom avanturom ili podržite njihove osobne projekte i ciljeve. Oni ne traže rutinu — traže uzbuđenje i partnera koji može pratiti njihov nemiran ritam.
              </p>
            </div>

            {/* Who is Sagittarius' Soulmate? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko je srodna duša Strijelca?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Srodna duša Strijelca je osoba koja dijeli njihovu strast za životom i avanturom. To je netko tko razumije njihovu potrebu za slobodom i istraživanjem, te tko je spreman podijeliti njihovu želju za učenjem i rastom. Ako ste osoba koja voli izazove, nova iskustva i slobodan duh, Strijelac će vas smatrati savršenim partnerom.
              </p>
            </div>
          </div>

          {/* Best Careers */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Najbolje karijere za Strijelca</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Strijelci su najbolji u karijerama koje im omogućuju putovanja, istraživanje i učenje. Zanimanja poput profesora, putopisca, filozofa, novinara ili avanturističkog vodiča idealna su za njih. Sve što uključuje neprestano učenje i osobni rast odgovara njihovoj nemirnoj prirodi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SagittariusSection;

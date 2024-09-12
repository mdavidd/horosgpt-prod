import React from 'react';
import Image from 'next/image';

const TaurusSection = () => {
  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Bik</h1>
          <p className="text-gray-300 text-xl mb-6">
            20. travanj – 20. svibanj
          </p>
          <p className="text-gray-400 text-lg mb-16">
            Bik je drugi znak Zodijaka, simboliziran bikom. Bik odražava stabilnost, upornost i ljubav prema zadovoljstvima.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-16">
          <Image
            src="/zodiac/taurus.png" // Ensure this image is in the public folder
            alt="Bik"
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
                <td className="py-2">Bik</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Datumi</td>
                <td className="py-2">20. travanj – 20. svibanj 2024</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Element</td>
                <td className="py-2">Zemlja</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Modalitet</td>
                <td className="py-2">Fiksni</td>
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
              Bik je zemljani znak poznat po svojoj stabilnosti, odanosti i ljubavi prema materijalnom svijetu. Ljudi rođeni pod ovim znakom vole uživati u životnim zadovoljstvima, od dobre hrane do luksuznih iskustava. Oni su marljivi i pouzdani, uvijek spremni preuzeti odgovornost i brinuti se o onima koje vole.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Bikova tvrdoglavost može ih učiniti nepopustljivima, ali njihova posvećenost i ustrajnost često ih vode do uspjeha. Cijene sigurnost i stabilnost, bilo u poslu, ljubavi ili prijateljstvima.
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
                  <li>Odanost</li>
                  <li>Strpljenje</li>
                  <li>Upornost</li>
                  <li>Praktičnost</li>
                  <li>Užitak u jednostavnim stvarima</li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Slabosti</h3>
                <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                  <li>Tvrdoglavost</li>
                  <li>Materijalizam</li>
                  <li>Lijenost (kada su previše udobni)</li>
                  <li>Otpor promjenama</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Love, Sex, and Romance */}
          <div className="border-t border-gray-700 pt-16 mt-16 space-y-8">
            <h2 className="text-3xl font-semibold text-white mb-4">Bik u ljubavi, seksu i romantici</h2>

            {/* How to Seduce a Taurus */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako zavesti Bika?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Ako želite zavesti Bika, morat ćete to učiniti na način koji je senzualan, stabilan i dugotrajan. Bik je znak koji voli uživati u fizičkim užicima i udobnosti, stoga ga možete privući stvaranjem opuštene, luksuzne atmosfere. Primjerice, večera u restoranu s odličnom hranom i vinom, ili romantična večera kod kuće uz svijeće, prava je stvar za privlačenje Bika. Budite pažljivi i nježni, pokažite im da ste strpljivi i spremni graditi odnos polako. Zavoditi Bika znači zavoditi sva njegova osjetila — okusom, dodirom, mirisom, pa čak i muzikom koja stvara pravo raspoloženje.              </p>
            </div>

            {/* Does Taurus Fall in Love Quickly? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Da li se Bik brzo zaljubljuje?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Bikovi se ne zaljubljuju preko noći. Njihova ljubav raste polako, ali kad jednom razviju osjećaje, oni su duboki i trajni. Bik je znak koji traži sigurnost i stabilnost, a to znači da žele biti potpuno sigurni prije nego što se emocionalno otvore. Ako ih pokušate natjerati da prebrzo uskoče u vezu, Bik će se povući. Ali kad osjete da ste pouzdani, lojalni i ozbiljni, oni će se posvetiti cijelim srcem. Ljubav Bika je poput pouzdane rijeke — polagana, mirna, ali nevjerojatno moćna kad se jednom stvori.              </p>
            </div>

            {/* Who Attracts a Taurus */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko privlači Bika?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Bikove privlače ljudi koji im pružaju osjećaj sigurnosti i stabilnosti. Traže partnere koji su praktični, pouzdani i imaju smirenu energiju. Fizička privlačnost je također izuzetno važna za Bikove — vole ljepotu i senzualnost u vezi, ali to nije jedino što traže. Ono što ih zaista privlači je osjećaj povjerenja i dosljednosti. Na primjer, osoba koja zna kako cijeniti jednostavne životne užitke, poput ugodne večeri kod kuće ili šetnje prirodom, osvojit će Bikovo srce.              </p>
            </div>

            {/* How to Love a Taurus */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako voljeti Bika?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Voljeti Bika zahtijeva strpljenje i duboku emocionalnu stabilnost. Oni vole rutinu i predvidljivost, pa partneri moraju biti spremni na dugoročne, stabilne odnose. Mali znakovi pažnje, poput pripreme njihovog omiljenog obroka ili nježnog fizičkog kontakta, mogu učiniti čuda za vašu vezu s Bikom. Oni su odani i očekuju isto od svog partnera. Također, Bikovi ne vole drame ili promjene, pa pokušajte održavati stabilnost i harmoniju u vezi. Nikada ih nemojte tjerati da donose brze odluke — za Bika je ključna riječ „strpljenje“.              </p>
            </div>

            {/* Who is a Taurus' Soulmate? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko je srodna duša Bika?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Srodna duša Bika je osoba koja dijeli njegovu potrebu za sigurnošću, lojalnošću i dugoročnim obvezama. Ova osoba cijeni jednostavne životne radosti, poput zajedničkih večera ili večeri provedenih kod kuće. Bikovi ne vole kaos ili nepredvidljivost, stoga njihova srodna duša mora biti netko tko im može pružiti stabilnost i emocionalnu sigurnost. Primjerice, partner koji može pružiti osjećaj smirenosti i tko je dosljedan u pokazivanju ljubavi idealan je za Bika. Kada pronađu nekoga tko se uklapa u njihovu potrebu za mirom i pouzdanošću, Bikovi će biti lojalni i predani do kraja života.              </p>
            </div>
          </div>

          {/* Best Careers */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Najbolje karijere za Bika</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Bikovi su odlični u karijerama koje zahtijevaju strpljenje, praktičnost i dugoročno planiranje. Njihova sposobnost da ostanu fokusirani i pouzdani čini ih izvrsnim kandidatima za menadžerske pozicije, financije, nekretnine, kao i poslove koji zahtijevaju dugoročnu posvećenost, poput agronomije, kuharstva ili umjetnosti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaurusSection;

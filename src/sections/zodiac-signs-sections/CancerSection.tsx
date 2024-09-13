import React from 'react';
import Image from 'next/image';

const CancerSection = () => {
  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Rak</h1>
          <p className="text-gray-300 text-xl mb-6">
            21. lipanj – 22. srpanj
          </p>
          <p className="text-gray-400 text-lg mb-16">
            Rak, simboliziran rakom, poznat je po svojoj emocionalnoj dubini, intuiciji i zaštitničkoj prirodi. Ljudi rođeni pod ovim znakom imaju izražene osjećaje i cijene obitelj, sigurnost i dom.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-16">
          <Image
            src="/zodiac/cancer.png" // Ensure this image is in the public folder
            alt="Rak"
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
                <td className="py-2">Rak</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Datumi</td>
                <td className="py-2">21. lipanj – 22. srpanj 2024</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Element</td>
                <td className="py-2">Voda</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Modalitet</td>
                <td className="py-2">Kardinalni</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Vladajući planet</td>
                <td className="py-2">Mjesec</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Personality Section */}
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Osobnost</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Raka često vodi njegov snažan osjećaj intuicije i emocija. Osobe rođene u ovom znaku su izuzetno povezane sa svojim osjećajima, a njihova osjetljivost ih čini izuzetno empatičnim prema drugima. Rakovi su odani, zaštitnički nastrojeni, a njihova najvažnija životna vrijednost je obitelj. Njihova priroda je poput valova — povremeno povučena, a povremeno snažna i moćna. 
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Zbog svoje emotivne dubine, Rakovi mogu biti skloni promjenama raspoloženja, ali njihova sposobnost da stvaraju sigurno okruženje za sebe i svoje najdraže je ono što ih izdvaja. U svakom odnosu traže dublju povezanost, stabilnost i međusobno razumijevanje.
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
                  <li>Intuicija</li>
                  <li>Zaštitnički nastrojen</li>
                  <li>Odani</li>
                  <li>Njegovateljska priroda</li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Slabosti</h3>
                <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                  <li>Preosjetljivost</li>
                  <li>Povlačenje u sebe</li>
                  <li>Promjene raspoloženja</li>
                  <li>Emocionalna ovisnost</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Love, Sex, and Romance */}
          <div className="border-t border-gray-700 pt-16 mt-16 space-y-8">
            <h2 className="text-3xl font-semibold text-white mb-4">Rak u ljubavi, seksu i romantici</h2>

{/* How to Seduce a Cancer */}
<div>
  <h3 className="text-2xl font-semibold text-white mb-2">Kako zavesti Raka?</h3>
  <p className="text-gray-300 text-lg leading-relaxed">
    Rakovi su emotivni, ali ono što stvarno osvaja njihovo srce je osjećaj sigurnosti i emocionalne povezanosti. Zavođenje Raka znači pažljivo pristupanje kroz duboke razgovore i iskazivanje brižnih gesti. Primjerice, umjesto velikih romantičnih pokreta, Rak će više cijeniti večer provedenu u kućnoj atmosferi, gdje možete zajedno kuhati večeru i razgovarati o vašim snovima i strahovima. Stvorite atmosferu intimnosti — svijeće, lagana glazba, i osjećaj doma. Rak voli osjećaj pripadnosti, pa im pokažite da su vam prioritet.
  </p>
  <p className="text-gray-300 text-lg leading-relaxed">
    Šarmirat ćete ih ako pokažete svoju nježniju stranu i budete spremni slušati. Jednostavna pitanja poput &quot;Kako se stvarno osjećaš?&quot; ili &quot;Što ti pruža osjećaj sigurnosti?&quot; mogu biti ključna u stvaranju emotivne povezanosti s Rakom. Budite strpljivi i ne forsirajte ih da se otvore, jer kada vam jednom daju svoje povjerenje, to je dugoročno.
  </p>
</div>


            {/* Does Cancer Fall in Love Quickly? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Da li se Rak brzo zaljubljuje?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Rak ne ulazi brzo u ljubavnu vezu, jer voli biti siguran da su njihovi osjećaji duboki i iskreni. Njima je važno graditi povjerenje i stvarati emocionalne temelje prije nego se potpuno posvete nekome. Dok se drugi znakovi možda zaljube brzo i nepromišljeno, Rak to radi polako i oprezno, ali kada se jednom zaljube, to je često na dubljoj razini. Njihova ljubav je poput oceana — valovi osjećaja se polako razvijaju, ali kada se zaljube, njihova ljubav je beskrajna i iskrena.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Rak će, recimo, više uživati u dugim šetnjama uz more gdje mogu osjetiti sigurnost partnera, nego u uzbudljivim, spontanima avanturama. Njihovo srce traži stabilnost i emocionalnu sigurnost prije nego što se potpuno prepuste ljubavi.              </p>
            </div>

            {/* Who Attracts a Cancer? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko privlači Raka?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Rakove privlače osobe koje su duboko empatične i sposobne pružiti emocionalnu sigurnost. Oni traže partnere koji razumiju njihov emotivni svijet i koji će im pružiti podršku u trenucima kada im je najpotrebnija. Ljudi koji su strpljivi, razumni i spremni ulagati u stvaranje sigurnog doma, privući će Raka poput magneta.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Također, partneri koji uživaju u zajedničkom stvaranju intimnih trenutaka — bilo da se radi o jednostavnom gledanju filma ispod deke ili zajedničkom uređenju doma — uvijek su privlačni Raku. Oni traže partnere koji cijene male stvari u životu, poput zajedničkog ručka ili šetnje po prirodi, jer to gradi emocionalnu povezanost.              </p>
            </div>

{/* How to Love a Cancer */}
<div>
  <h3 className="text-2xl font-semibold text-white mb-2">Kako voljeti Raka?</h3>
  <p className="text-gray-300 text-lg leading-relaxed">
    Voljeti Raka znači biti emocionalno otvoren i prisutan. Oni traže partnere koji su spremni biti tu za njih u trenucima ranjivosti i emocionalnih previranja. Rakovi su izuzetno intuitivni i brzo će osjetiti kada netko nije iskren ili ih ne shvaća ozbiljno. Ako volite Raka, važno je da pokažete svoju ljubav kroz kontinuirane geste — zagrljaji, nježne riječi, i male pažnje koje govore &quot;tu sam za tebe.&quot;
  </p>
  <p className="text-gray-300 text-lg leading-relaxed">
    Primjerice, ako primijetite da je Rak imao težak dan, organizirajte zajednički opuštajući trenutak, možda kroz pripremu njihovog omiljenog jela ili jednostavno kroz razgovor o tome što ih muči. Rakovi će to cijeniti više od bilo kojeg materijalnog poklona. Njima je najvažnije znati da su voljeni i da imaju emocionalnu podršku.
  </p>
</div>


            {/* Who is Cancer's Soulmate? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko je srodna duša Raka?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Srodna duša Raka je osoba koja dijeli njihove temeljne vrijednosti o obitelji, sigurnosti i dubljoj emocionalnoj povezanosti. Rakovi žele partnera koji će im biti stabilan oslonac, netko tko razumije i cijeni osjećajnost i intimnost u vezi.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Oni traže srodnu dušu koja ne samo da razumije njihovu emocionalnu dubinu, već je i voljna graditi dom i zajednički život pun ljubavi. To nije nužno vezano uz tradiciju, već više uz osjećaj pripadnosti. Rak je osoba koja će uložiti cijelo srce u stvaranje emotivnog utočišta, a njihova srodna duša će biti netko tko to razumije i cijeni. Ako ste osoba koja voli provoditi večeri u miru doma, uz obitelj ili voljene osobe, a uz to cijenite osjećaj sigurnosti i duboke povezanosti, Rak je znak s kojim ćete naći savršenu harmoniju.              </p>
            </div>
          </div>

          {/* Best Careers */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Najbolje karijere za Raka</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Rakovi su najbolji u karijerama koje im omogućuju da iskoriste svoju njegujuću i zaštitničku prirodu. Zanimanja poput medicinskih sestara, terapeuta, savjetnika, odgajatelja ili profesionalaca u ugostiteljstvu savršeno odgovaraju ovom znaku. Sve što uključuje brigu o drugima i stvaranje ugodnog okruženja idealno je za njih.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CancerSection;

import React from 'react';
import Image from 'next/image';

const LeoSection = () => {
  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Lav</h1>
          <p className="text-gray-300 text-xl mb-6">
            23. srpanj – 22. kolovoz
          </p>
          <p className="text-gray-400 text-lg mb-16">
            Lav, simboliziran lavom, predstavlja hrabrost, ponos i snažnu prisutnost. Ljudi rođeni pod ovim znakom vole biti u središtu pažnje i izražavaju svoj život kroz kreativnost, ljubav i strast.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-16">
          <Image
            src="/zodiac/leo.png" // Ensure this image is in the public folder
            alt="Lav"
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
                <td className="py-2">Lav</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Datumi</td>
                <td className="py-2">23. srpanj – 22. kolovoz 2024</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Element</td>
                <td className="py-2">Vatra</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Modalitet</td>
                <td className="py-2">Fiksni</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Vladajući planet</td>
                <td className="py-2">Sunce</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Personality Section */}
        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Osobnost</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Lavovi su poznati po svojoj toplini, samopouzdanju i karizmi. Rođeni vođe, Lavovi vole biti u centru pažnje, ali također imaju veliko srce i snažnu potrebu za zaštitom onih koje vole. Njihova strastvena priroda očituje se u svemu što rade, bilo da se radi o poslu, kreativnim projektima ili odnosima. Lavovi su optimisti koji vjeruju u veličinu i žele živjeti život pun sjaja.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Međutim, njihova želja za pažnjom može ih učiniti povremeno dramatičnima, ali sve to proizlazi iz njihove snažne potrebe da budu viđeni i cijenjeni. Lavovi su veliki prijatelji i partneri, uvijek spremni staviti druge ispred sebe i pružiti podršku i ohrabrenje kada je potrebno.
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
                  <li>Samopouzdanje</li>
                  <li>Toplina i velikodušnost</li>
                  <li>Vodstvo</li>
                  <li>Kreativnost</li>
                  <li>Strast</li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Slabosti</h3>
                <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                  <li>Egocentričnost</li>
                  <li>Dramatičnost</li>
                  <li>Tvrdoglavost</li>
                  <li>Potreba za priznanjem</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Love, Sex, and Romance */}
          <div className="border-t border-gray-700 pt-16 mt-16 space-y-8">
            <h2 className="text-3xl font-semibold text-white mb-4">Lav u ljubavi, seksu i romantici</h2>

            {/* How to Seduce a Leo */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako zavesti Lava?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Zavesti Lava znači staviti ih u centar pozornosti i pustiti ih da zablistaju u svom punom sjaju. Lavovi vole biti primijećeni, pa se nemojte sramiti iskazivati divljenje. Dajte im komplimente, ali neka budu iskreni — Lav će odmah prepoznati laskanje. Možete ih zavesti organiziranjem elegantne večere ili čak neočekivanim, grandioznim gestama poput spontanog izleta u luksuzni restoran. Na primjer, planirajte večer gdje će oni biti zvijezda, i neka svi u društvu osjete njihovu moćnu energiju.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Lavovi vole osjećaj posebnosti, pa ako želite osvojiti njihovo srce, tretirajte ih kraljevski. Mali znakovi pažnje, poput personaliziranih darova ili poruka koje pokazuju koliko vam znače, duboko će ih impresionirati. Ali najvažnije je pokazati im da ih cijenite zbog njihove jedinstvenosti i karizme — to je ključ za ulazak u njihov svijet.              </p>
            </div>

            {/* Does Leo Fall in Love Quickly? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Da li se Lav brzo zaljubljuje?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Lavovi se često brzo zaljubljuju jer uživaju u osjećaju romantične avanture. Njihova srčana priroda ih vodi prema intenzivnim i strastvenim vezama. Lav će se brzo povezati s osobom koja im pruži pažnju, podršku i divljenje, a neće oklijevati pokazati svoju ljubav. No, važno je napomenuti da Lav, iako se brzo zaljubi, očekuje istu razinu energije i predanosti od svog partnera. Kada vole, oni to rade dramatično i bez zadrške — cijelim srcem i dušom.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Zamislite scenarij u kojem se Lav zaljubljuje na prvi pogled na nekom društvenom događaju, gdje ga netko osvoji jednostavnom, ali moćnom gestom poput spontanog plesa pred svima. To je Lavova priroda — ljubav mora biti puna života, uzbuđenja i naravno, malo drame.              </p>
            </div>

            {/* Who Attracts a Leo? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko privlači Lava?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Lavovi su prirodno privučeni ljudima koji odišu samopouzdanjem i neovisnošću. Oni žele partnera koji može biti jednako strastven i odvažan kao i oni sami. Na primjer, osoba koja se ne boji stati u središte pažnje i pokazati svoju osobnost odmah će privući Lavov pogled. Lav cijeni hrabrost i ljude koji mogu pratiti njihov ritam u životu punom avantura i izazova.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Partneri koji se ne boje izazvati ih na duhovnoj, emocionalnoj i fizičkoj razini posebno su privlačni Lavovima. Recimo, organizirati uzbudljivu aktivnost kao što je skok s padobranom ili improvizirani ples na ulici moglo bi ih oduševiti. Oni vole osobe koje ih potiču da rastu, ali istovremeno ostaju dovoljno neovisni da zadrže vlastitu snagu i osobnost.              </p>
            </div>

            {/* How to Love a Leo */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Kako voljeti Lava?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Voljeti Lava znači biti spreman na odnos ispunjen energijom, strašću i daškom drame. Oni ne traže pasivnog partnera — Lavovi žele nekoga tko će ih obožavati, ali istovremeno biti dovoljno snažan da stoji uz njih. Njihovi partneri moraju biti spremni za uzbudljive pustolovine, ali i pružiti emocionalnu podršku kada je to potrebno.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Na primjer, ako Lav ima ambiciju voditi vlastiti projekt ili postati lider u nekom području, partner koji im pruža potporu, ali ih istovremeno gura prema naprijed, osvojiće ih zauvijek. Ključno je nikada ne zaboraviti iskazati ljubav i pažnju — čak i male geste, poput iznenađenja na poslu ili javnog priznanja koliko ih volite, imaju ogroman učinak na Lava.              </p>
            </div>

            {/* Who is Leo's Soulmate? */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Tko je srodna duša Lava?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
              Srodna duša Lava je netko tko može podijeliti njihovu strast za životom i ne boji se živjeti velikim, odvažnim stilom. Lavovi žele partnera koji ih obožava, ali koji također zrači vlastitom snagom i samopouzdanjem. Oni traže nekoga tko će s njima dijeliti svjetla reflektora, ali i biti njihov najveći obožavatelj iza scene.
              </p ><p className="text-gray-300 text-lg leading-relaxed">
Zamislite vezu u kojoj Lav i njegov partner zajednički kreću u nove pustolovine, grade život pun uzbuđenja, podržavajući jedno drugo kroz sve izazove. Ako ste osoba koja voli život ispunjen strašću, sjajem i intenzivnim iskustvima, Lav je vaš idealan partner. Njihova srodna duša mora biti netko tko razumije da Lavovi trebaju pažnju i obožavanje, ali također i nekoga tko će ih držati prizemljenima kada zatreba.              </p>
            </div>
          </div>

          {/* Best Careers */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Najbolje karijere za Lava</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Lavovi su idealni za karijere koje im omogućuju da budu u središtu pažnje. Zanimanja u zabavnoj industriji, politici, menadžmentu ili sportu odgovaraju njihovoj ambicioznoj i karizmatičnoj prirodi. Njihova sposobnost da motiviraju druge čini ih odličnim liderima, a njihova kreativnost i strast pokreću ih prema uspjehu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeoSection;

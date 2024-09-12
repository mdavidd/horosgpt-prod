import Image from 'next/image';

const WhatIsNatal = () => {
  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title Section */}
        <h1 className="text-4xl font-bold mb-6 text-white">
          Što je natalna karta?
        </h1>
        <p className="text-gray-300 uppercase tracking-widest mb-16">
          Mapa svemira u trenutku vašeg rođenja
        </p>

        {/* First Section */}
        <div className="grid gap-10 lg:grid-cols-2 items-center mb-16">
          <div className="text-left">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Što je natalna karta?
            </h2>
            <p className="text-gray-300 mb-4">
              Natalna karta je dijagram koji prikazuje položaj planeta, Sunca i
              Mjeseca u trenutku vašeg rođenja. To je osobna kozmička mapa, koja
              daje uvid u vašu osobnost, životne izazove i potencijal. Ova karta
              simbolizira način na koji kozmičke sile djeluju u trenutku vašeg
              ulaska u svijet.
            </p>
            <p className="text-gray-300">
              Svaka natalna karta je jedinstvena, baš kao i vi, jer kombinira
              vrijeme i lokaciju vašeg rođenja, zajedno s položajima planeta.
            </p>
          </div>
          <div className="p-4 flex justify-center items-center">
            <Image
              src="/whatIsNatal/natal1.png"
              alt="Što je natalna karta"
              width={500}
              height={300}
              className="rounded-lg"
              unoptimized // To prevent image optimization
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid gap-10 lg:grid-cols-2 items-center mb-16">
          <div className="p-4 flex justify-center items-center">
            <Image
              src="/whatIsNatal/natal2.png"
              alt="Sastavni dijelovi natalne karte"
              width={500}
              height={300}
              className="rounded-lg"
              unoptimized
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Sastavni dijelovi natalne karte
            </h2>
            <p className="text-gray-300 mb-4">
              Natalna karta se sastoji od 12 astroloških kuća koje prikazuju
              različite aspekte vašeg života, kao što su ljubav, karijera i
              obitelj. Svaka kuća odgovara na različita pitanja o vama i
              vašem životnom putu.
            </p>
            <p className="text-gray-300">
              Unutar karte nalaze se i ključni astrološki čimbenici poput
              Sunčevog znaka, Mjesečevog znaka i Ascendenta (podznaka). Ti
              elementi čine temeljnu strukturu vaše osobnosti i načina na koji
              se odnosite prema svijetu.
            </p>
          </div>
        </div>

        {/* Third Section */}
        <div className="grid gap-10 lg:grid-cols-2 items-center mb-16">
          <div className="text-left">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Sunčev znak i Mjesečev znak
            </h2>
            <p className="text-gray-300 mb-4">
              Vaš Sunčev znak odražava vaš temeljni identitet – način na koji
              izražavate svoju životnu energiju. Predstavlja vašu srž i
              ključne karakteristike. Mjesečev znak, s druge strane, opisuje
              vaš unutarnji svijet, vaše emocionalne reakcije i intuiciju.
            </p>
            <p className="text-gray-300">
              Kombinacija Sunčevog i Mjesečevog znaka pruža cjelovitu sliku
              vašeg unutarnjeg i vanjskog svijeta, ukazujući na dublje
              aspekte vaše prirode.
            </p>
          </div>
          <div className="p-4 flex justify-center items-center">
            <Image
              src="/whatIsNatal/natal3.png"
              alt="Sunčev znak i Mjesečev znak"
              width={500}
              height={300}
              className="rounded-lg"
              unoptimized
            />
          </div>
        </div>

        {/* Fourth Section */}
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="p-4 flex justify-center items-center">
            <Image
              src="/whatIsNatal/natal4.png"
              alt="Ascendent ili podznak"
              width={500}
              height={300}
              className="rounded-lg"
              unoptimized
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Ascendent (Podznak)
            </h2>
            <p className="text-gray-300 mb-4">
              Ascendent, ili podznak, je znak koji se nalazio na istočnom
              horizontu u trenutku vašeg rođenja. On opisuje način na koji vas
              drugi vide i kako se prezentirate svijetu. Ascendent je vaša
              vanjska maska, dok Sunčev znak predstavlja vašu unutarnju
              energiju.
            </p>
            <p className="text-gray-300">
              Iako Sunčev znak odražava vašu bit, Ascendent pokazuje način na
              koji pristupate životu i kako vas okolina doživljava.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsNatal;

import Image from 'next/image';

const WhatIsAstrology = () => {
  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-white">
          Što je astrologija?
        </h1>
        <p className="text-gray-300 uppercase tracking-widest mb-16">
          Povezanost svemira i čovječanstva kroz tisućljeća
        </p>

        <hr className="border-gray-700 my-8" />

        {/* First Content Block */}
        <div className="grid gap-10 md:grid-cols-2 items-center mb-16 p-8 rounded-lg">
          <div className="p-4 rounded-lg">
            <Image
              src="/whatisAstro/1.gif"
              alt="Heliocentrični model: Sunce u središtu"
              width={500}
              height={300}
              className="rounded-lg"
              unoptimized
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Astrologija: Znanost o kozmičkim utjecajima
            </h2>
            <p className="text-gray-300">
              Astrologija i astronomija bile su povezane tisućama godina. Do 1700-ih, proučavanje kretanja zvijezda (astronomija) i proučavanje njihovih učinaka na ljude (astrologija) bili su jedna disciplina.
            </p>
            <p className="text-gray-300 mt-4">
              Astrologija omogućuje razumijevanje kako se čovječanstvo povezuje s beskonačnim, stalno promjenjivim svemirom, dajući kontekst našem životu.
            </p>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Second Content Block */}
        <div className="grid gap-10 md:grid-cols-2 items-center mb-16 p-8 rounded-lg">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Geocentrični model: Zemlja u središtu
            </h2>
            <p className="text-gray-300">
              Sve do 1500-ih, ljudi su vjerovali da je Zemlja u središtu svemira, a da Sunce i planeti kruže oko nje. Ovaj model, poznat kao geocentrični, pruža perspektivu kako nebo izgleda s našeg položaja na Zemlji.
            </p>
            <p className="text-gray-300 mt-4">
              Iako znamo da Sunce sjedi u središtu našeg Sunčevog sustava (heliocentrični model), geocentrični model i dalje točno opisuje kretanje planeta s našeg zemaljskog gledišta.
            </p>
          </div>
          <div className="p-4 rounded-lg">
            <Image
              src="/whatisAstro/2.gif"
              alt="Geocentrični model: Zemlja u središtu"
              width={500}
              height={300}
              className="rounded-lg"
              unoptimized
            />
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Third Content Block */}
        <div className="grid gap-10 md:grid-cols-2 items-center mb-16 p-8 rounded-lg">
          <div className="p-4 rounded-lg">
            <Image
              src="/whatisAstro/3.gif"
              alt="Kretanje Marsa s geocentrične perspektive"
              width={500}
              height={300}
              className="rounded-lg"
              unoptimized
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Mars: Putanja kroz svemir
            </h2>
            <p className="text-gray-300">
              Marsovo kretanje s naše točke gledišta na Zemlji izgleda drugačije nego s heliocentričnog gledišta. Dok se Sunce i Zemlja kreću svojim orbitama, Marsova putanja stvara iluziju retrogradnog gibanja — kao da Mars ide unatrag.
            </p>
            <p className="text-gray-300 mt-4">
              Ovo retrogradno gibanje ima značajnu ulogu u astrologiji, jer se vjeruje da utječe na osobne izazove i promjene u životu.
            </p>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Fourth Content Block */}
        <div className="grid gap-10 md:grid-cols-2 items-center mb-16 p-8 rounded-lg">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Zodijak: Nevidljivi pojas konstelacija
            </h2>
            <p className="text-gray-300">
              Zodijak je prsten konstelacija na istoj latitudi kao naš Sunčev sustav. Planeti se na nebu uvijek nalaze ispred jedne od ovih konstelacija, a njihovo kretanje kroz znakove Zodijaka definira astrološke tranzite i utjecaje.
            </p>
            <p className="text-gray-300 mt-4">
              Ovi planetarni pomaci, u odnosu na pozicije konstelacija, čine osnovu astrologije — kako se planeti pomiču kroz Zodijak, tako se mijenjaju energije koje oblikuju naše živote.
            </p>
          </div>
          <div className="p-4 rounded-lg">
            <Image
              src="/whatisAstro/4.png"
              alt="Zodijak i pozicija planeta"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Fifth Content Block */}
        <div className="grid gap-10 md:grid-cols-2 items-center p-8 rounded-lg">
          <div className="p-4 rounded-lg">
            <Image
              src="/whatisAstro/5.png"
              alt="Zodijak s gledišta Zemlje"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Zodijak iz perspektive Zemlje
            </h2>
            <p className="text-gray-300">
              Sa Zemlje, znakovi Zodijaka koje vidimo ovise o pozicijama planeta i Sunca. Na primjer, Mars može biti u Strijelcu ili Vodenjaku, ovisno o tome gdje se nalazi u svojoj orbiti u odnosu na Zemlju.
            </p>
            <p className="text-gray-300 mt-4">
              Poznavanje ovih pozicija pomaže nam razumjeti kako astrološki tranziti utječu na naš svakodnevni život, a planeti poput Marsa mogu značajno utjecati na naše strasti, motivacije i ciljeve.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatIsAstrology;

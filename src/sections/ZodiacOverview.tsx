import Link from 'next/link';
import Image from 'next/image';

const ZodiacOverview = () => {
  const signs = [
    { name: 'Ovan', slug: 'aries', dates: '21. ožujak – 19. travanj', imgSrc: '/zodiac/aries.png' },
    { name: 'Bik', slug: 'taurus', dates: '20. travanj – 20. svibanj', imgSrc: '/zodiac/taurus.png' },
    { name: 'Blizanci', slug: 'gemini', dates: '21. svibanj – 20. lipanj', imgSrc: '/zodiac/gemini.png' },
    { name: 'Rak', slug: 'cancer', dates: '21. lipanj – 22. srpanj', imgSrc: '/zodiac/cancer.png' },
    { name: 'Lav', slug: 'leo', dates: '23. srpanj – 22. kolovoz', imgSrc: '/zodiac/leo.png' },
    { name: 'Djevica', slug: 'virgo', dates: '23. kolovoz – 22. rujan', imgSrc: '/zodiac/virgo.png' },
    { name: 'Vaga', slug: 'libra', dates: '23. rujan – 22. listopad', imgSrc: '/zodiac/libra.png' },
    { name: 'Škorpion', slug: 'scorpio', dates: '23. listopad – 21. studeni', imgSrc: '/zodiac/scorpio.png' },
    { name: 'Strijelac', slug: 'sagittarius', dates: '22. studeni – 21. prosinac', imgSrc: '/zodiac/sagittarius.png' },
    { name: 'Jarac', slug: 'capricorn', dates: '22. prosinac – 19. siječanj', imgSrc: '/zodiac/capricorn.png' },
    { name: 'Vodenjak', slug: 'aquarius', dates: '20. siječanj – 18. veljača', imgSrc: '/zodiac/aquarius.png' },
    { name: 'Ribe', slug: 'pisces', dates: '19. veljača – 20. ožujak', imgSrc: '/zodiac/pisces.png' },
  ];

  return (
    <section className="py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title Section */}
        <h1 className="text-4xl font-bold mb-6 text-white">
          Dio astrologije koji vjerojatno najbolje poznajete je Sunčev znak
        </h1>
        <p className="text-gray-300 mb-6">
          Kada kažete: "Ja sam Riba", mislite na svoj Sunčev znak u znaku Riba.
        </p>
        <p className="text-gray-400 mb-16">
          Sunčev znak odgovara znaku Zodijaka koji je Sunce zauzimalo u trenutku vašeg rođenja. Otkrijte više o svakom znaku ispod.
        </p>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {signs.map((sign) => (
            <Link href={`/zodiac-signs/${sign.slug}`} key={sign.slug}>
              <div className="group border border-gray-600 rounded-lg p-6 relative hover:bg-gray-800 transition">
                {/* Image in the top-right corner */}
                <div className="absolute top-4 right-4">
                  <Image
                    src={sign.imgSrc}
                    alt={sign.name}
                    width={40} // Set proper width
                    height={40} // Set proper height
                    className="opacity-60 group-hover:opacity-100 transition-opacity"
                    unoptimized // Since it's in public folder, it's better unoptimized to avoid Next.js image optimization
                  />
                </div>
                {/* Content */}
                <h2 className="text-2xl font-semibold text-white mb-2">{sign.name}</h2>
                <p className="text-gray-400">{sign.dates}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZodiacOverview;

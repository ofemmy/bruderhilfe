import Head from "next/head";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { sanityStaticProps, useSanityQuery, PortableText } from "lib/sanity";
import { groq } from "next-sanity";
import { Navbar } from "../components/Navbar";
export default function Home(props) {
  const { data } = props;

  const features = [
    {
      title: "Education",
      img: "education.jpeg",
      features: [
        "Scholarship",
        "Renovation of schools",
        "Provision of educational materials",
      ],
    },
    {
      title: "Health",
      img: "health-new.jpeg",
      features: [
        "Renovation of health centers",
        "Medical outraches to rural areas",
        "Training of health workers",
      ],
    },
    {
      title: "Socio-economic empowerment",
      img: "empowerment-2.jpeg",
      features: [
        "Provision of mobility carts to people living with disabilities",
        "Provision of seed grants to women and youth",
        "Economic empowerment and training",
        "Access to financial services",
      ],
    },
    {
      title: "Advocacy",
      img: "advocacy.jpeg",
      features: [
        "Engaging in advocacy for inclusive governance.",
        "Organising seminars and training on transparency and accountability.",
        "Local community engagement.",
        "Creating awareness through the media.",
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>Welcome | Bruder Hilfe Social Development Initiative</title>
      </Head>
      <section>
        <Navbar />
        <Hero hero={data.hero} />
      </section>
      <section className="md:h-[633px] relative">
        <div className="absolute inset-x-0 md:left-1/3 top-0 w-full h-full bg-green-light bg-opacity-60"></div>
        <div className="max-w-7xl px-4 mx-auto py-16 lg:py-24 xl:py-32 sm:px-6 font-body flex justify-center items-center h-full md:space-x-8 relative">
          <div className="hidden md:block w-1/2 h-full rounded-lg overflow-hidden shadow-2xl">
            <img
              className="h-full w-full object-cover"
              src="mission.jpeg"
              alt="People distributing clothes"
            />
          </div>
          <div className="md:w-1/2 h-full">
            <h2 className="font-header text-4xl text-green-dark md:text-white uppercase">
              Our Mission
            </h2>
            <p className="text-green-900 mt-6 text-base lg:text-md">
              Bruder Hilfe is a charity organization located in Nigeria and
              Germany, dedicated to improving the health, education, of
              children, men and women both in cities and rural areas through
              community projects, infrastructural projects thereby creating more
              opportunities for children, adults and families in rural areas and
              communities.
            </p>
            <p className="text-green-900 mt-6 lg:text-md">
              Our mission is to embark on sustainable social-economic
              initiatives and programmes that will lead to the empowerment of
              the disadvantaged and marginalized members of the society and
              ensure the fulfilment of the right of all humans to live in
              security, dignity and peace.
            </p>
            <a
              href="/about"
              className="mt-5 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-white uppercase bg-green-dark hover:bg-green sm:w-auto"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="lg:h-[633px] relative">
        <div className="absolute inset-y-0 md:right-1/3 w-full top-0 h-full md:bg-custom-black"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 xl:py-32 sm:px-6 font-body flex justify-center h-full space-x-8 relative items-center">
          <div className="md:w-1/2 h-full">
            <h2 className="font-header text-4xl text-gray-800 md:text-white uppercase text-yellow">
              PROJECT K&Aacute;R&Agrave; -K&Aacute;T&Agrave;
            </h2>
            <p className="text-gray-700 md:text-gray-300 mt-6 lg:text-md font-body">
              Project K&aacute;r&agrave; -K&aacute;t&agrave;
              &#40;K&aacute;r&agrave; -K&aacute;t&agrave; being a Yoruba
              parlance name for economic and commercial activites that is
              inclusive&#41; focuses on deploying and implementing practical and
              sustainable economic empowerment and skill acquisition programmes
              for 200 women in rural and urban poor communities in Lagos, Ogun
              and Niger states in Nigeria who have little access to sustainable
              economic livelihoods.
            </p>
            <p className="text-gray-700 md:text-gray-300 mt-6 lg:text-md font-body">
              The project focuses on deploying interventions that will lead to
              the drastic reduction of poverty in rural and urban poor
              communities, ensuring gender equality, ensuring decent work and
              economic growth for all regardless of sex or status, reduce
              inequalities at all levels, and partnership between all sectors of
              the society including the government, private sector, civil
              society, academia, and local communities.
            </p>
            <Link href="/about">
              <a className="mt-5 inline-flex items-center justify-center px-5 py-3 border border-transparent font-bold text-lg rounded-md text-white uppercase bg-yellow hover:bg-yellow-dark sm:w-auto">
                Learn more
              </a>
            </Link>
          </div>
          <div className="hidden md:block w-1/2 h-full rounded-lg overflow-hidden shadow-2xl">
            <img
              className="h-full w-full object-cover"
              src="karakata.jpeg"
              alt="People working on laptops"
            />
          </div>
        </div>
      </section>
      <section className="h-auto relative bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 font-body h-full space-x-8 relative">
          <h2 className="font-header text-4xl text-gray-900 uppercase text-center">
            Our Thematic areas
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-16">
            {features.map((feature) => (
              <li className="relative">
                <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-light group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img
                    src={feature.img}
                    alt="boy with flower"
                    className="group-hover:opacity-75 object-cover pointer-events-none"
                  />
                  <button type="button" className="absolute inset-0">
                    <span className="sr-only">View details</span>
                  </button>
                </div>
                <div className="mt-4">
                  <h3 className="uppercase text-lg font-header tracking-wide">
                    {feature.title}
                  </h3>
                  <ul className="text-gray-700 mt-4 space-y-4">
                    {feature.features.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
// const query = groq`*[_type=='page'&& title=='Home Page']{sections}[0]`;
const query = groq`*[_type=='page'&& title=='Home Page']{
  "hero":sections[0]{heading,tagline,backgroundImage{"url":asset->url}},
 "mission":sections[1]->{cta{title,"route":route->slug.current},title,sectionImage{"url":asset->url},sectionTitle,text}
 }[0]`;
export async function getStaticProps(context) {
  const page = await await sanityStaticProps({ context, query: query });

  return {
    props: {
      data: page.data,
    },
  };
}

import { Navbar } from "../components/Navbar";
import Head from "next/head";
export default function Volunteer() {
  const projects = [
    {
      title: "Kemta Village, Ogun State",
      description: [
        "Training of women on financial literacy.",
        "Provision of revolving loan, monitoring and evaluation activity trainings.",
      ],
      budget: "NGN 1,100,000 / $2686.79",
    },
    {
      title: "Ajegunle community, Ikorodu, Lagos",
      description: [
        "Procurement of mobile technology tools to drive rural women socio-economic activities.",
        "Revolving loan scheme.",
        "Monthly monitoring and evaluation of project activities.",
      ],
      budget: "NGN 1,100,000 / $2686.79",
    },
    {
      title: "Kwana-Makeri Village, Niger State",
      description: [
        "Training of women on socio-economic skills and business that thrives in their context.",
        "Financial empowerment grant- Kwana-Makeri Community.",
        "Procurement of destoning machine for the Women Cooperative Society.",
        "Monthly monitoring and evaluation of the utilisation of the project.",
      ],
      budget: "NGN 1,7000,000 / $4152.32",
    },
  ];
  return (
    <>
      <Head>
        <title>Volunteer | Bruder Hilfe Social Development Initiative</title>
      </Head>
      <Navbar />
      <section className="mb-32">
        <div className="max-w-7xl mx-auto px-4 mt-4 sm:px-6 font-body h-full relative">
          <div className="h-[625px] rounded-lg overflow-hidden">
            <img
              className="h-full w-full object-cover object-top"
              src="/karakata.jpeg"
              alt="People working on laptops"
            />
          </div>
          <div className="flex items-center mt-12">
            <h2 className="font-semibold  text-4xl  uppercase font-header text-yellow mr-12">
              PROJECT K&Aacute;R&Agrave; -K&Aacute;T&Agrave;
            </h2>
            <a
              href="https://www.givingway.com/campaign/97accf"
              className="w-full inline-flex items-center justify-center px-5 py-2 border border-transparent font-bold text-lg rounded-md text-white uppercase bg-yellow hover:bg-yellow-dark sm:w-auto"
            >
              Donate now
            </a>
          </div>
          <div className="space-y-6 text-gray-700 font-body mt-12">
            <p>
              Project Karakata (Kara-kata been a Yoruba parlance name for
              Economic and commercial activities that is inclusive) focuses on
              deploying and implementing practical and sustainable economic
              empowerment and skill acquisitions programmes for 200 women in
              rural and urban poor communities in Lagos, Ogun and Niger States
              in Nigeria who have little access to sustainable economic
              livelihoods.
            </p>
            <p>
              The project focuses on deploying interventions that will lead to
              the drastic reduction of poverty in rural and urban poor
              communities, ensuring gender equality, ensuring decent work and
              economic growth for all regardless of sex or status, reduce
              inequalities at all levels, and partnership between all sectors of
              the society including the government, private sector, civil
              society, academia, and local communities.
            </p>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-medium font-semibold text-gray-900 font-header uppercase">
              Planned Use of funds
            </h3>
            <dl className="mt-6 grid grid-cols-1 rounded-lg overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
              {projects.map((item) => (
                <div
                  className={`bg-gray-100 px-4 py-5 sm:p-6`}
                  key={item.title}
                >
                  <dt className="text-lg font-bold text-gray-800">
                    {item.title}
                  </dt>
                  <dd className="mt-8 flex flex-col justify-between">
                    <ul className="space-y-4 h-[300px] text-gray-500">
                      {item.description.map((desc) => (
                        <li>{desc}</li>
                      ))}
                    </ul>
                    <h3 className="text-lg font-semibold text-green-dark">
                      <span className="uppercase">Budget: </span>
                      <span>{item.budget}</span>
                    </h3>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

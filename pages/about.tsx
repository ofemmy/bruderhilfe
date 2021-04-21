import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { groq } from "next-sanity";
import { sanityStaticProps, useSanityQuery, PortableText } from "lib/sanity";
import { extractParagraph } from "lib/extractParagraph";
export default function About(props) {
  const { data } = props;

  const interventionAreas = [
    {
      title: "Education",
      body:
        "We work on promoting rights to qualitative education through the human rights based approach to development. Bruderhilfe through community sensitization, mobilization, capacity building, scholarships, and project modelling with specific emphasis on basis education is working and will continue to work in the basic education sector in different parts of Nigeria.",
    },
    {
      title: "Social Inclusion",
      body:
        "We are committed to working on the sustainabile ways of improving the terms of participation in society, particularly for people who are disadvantaged, through enhancing opportunities, access to resources, voice and respect for rights.",
    },
    {
      title: "Women and children",
      body:
        "We are working on promoting rights of women and children with specific emphasis on gender equity and gender sensitivity. We do these through empowerment like disbursement of seed grant to boost local businesses of women, renovation and provision of educational materials for childreb in educationally disadvantaged regions, all with the aim of improving livelihoods of families in rural communities.",
    },
  ];
  const coreValues = [
    {
      title: "Godliness",
      img: "help.jpeg",
      description:
        "We are moved and are guided by a sense of godliness manifested in showing love and concerns to our neighbours especially the disadvantaged and lowly ones as we love and value ourselved which God Himself exemplified.",
    },
    {
      title: "Helping",
      img: "helping-woman.jpeg",
      description:
        "We see ourselves as a group of people with helping hand to lift up the downtrodden from their lowly positions.",
    },
    {
      title: "Brotherhood",
      img: "brotherhood.jpeg",
      description:
        "To be part of a people with the mind of extending hands of love and devoted service to make the society a better and more equitable one.",
    },
    {
      title: "Integrity",
      img: "integrity.jpeg",
      description:
        "We are determined to be steadfast, thorough, consistent in our activities, planning, and implementation and in abiding with values, principles that shaped our work.",
    },
    {
      title: "Transparency",
      img: "campaign1-pic.jpeg",
      description:
        "We are open in our conduct, in making decision and interaction with people regardless of status and condition.",
    },
    {
      title: "Accountability",
      img: "raise-hands.jpeg",
      description:
        "We are responsible and accountable for our actions as an organisation. We owe it as stewards to be accountable to God and to people He surrounds us with.",
    },
    {
      title: "Equity",
      img: "equality.jpeg",
      description:
        "We are committed to a fair and impartial view of people and strongly believe in equal opportunities for everyone regardless of age, gender, race, religion, disability, location and health status.",
    },
    {
      title: "Positive Attitude",
      img: "positive-attitude.jpeg",
      description:
        "We are always guided by a sense of optimism in the successful implementation of our programmes despite the internal and external challenges that surrounds us.",
    },
    {
      title: "Teamwork",
      img: "teamwork.jpeg",
      description:
        "We energetically work together to bring an end to discrimination, socio-economic exclusion and poverty.",
    },
  ];
  const objectives = [
    {
      title: "1.",
      color: "green",
      description:
        "To ensure an increased accessibility and provision of socio-economic services for the less-privileged and the social excluded members of the society.",
    },
    {
      title: "2.",
      color: "yellow",
      description:
        "To promote and advocate for the rights of children and support young people in building a just,democartic and inclusive society, enhancing human security and improving livelihood for the poor and excluded.",
    },
    {
      title: "3.",
      color: "yellow-dark",
      description:
        "To build the capacity and strengthen the ability of the less privileged and poor people mostly in rural areas to hold governments at all levels and corporate bodies accountable towards enhancing their access to quality services.",
    },
    {
      title: "4.",
      color: "green-dark",
      description:
        "To improve and increase the literacy level of women, boys and girls in rural communities and put in place material and non-material facilities that will promote their safety and participation in public and private spaces.",
    },
  ];
  return (
    <>
      <Head>
        <title>About us | Bruder Hilfe Social Development Initiative</title>
      </Head>
      <Navbar />
      <section className="relative h-96">
        <div className="absolute inset-0 h-full">
          <img
            className="h-full w-full object-left-top object-cover"
            src="team.jpeg"
          />
          <div
            className="absolute inset-0 bg-gray-400 bg-opacity-60"
            style={{ mixBlendMode: "multiply" }}
          ></div>
        </div>
        {/* <h2
          className="absolute left-28 bottom-4 shadow-4xl text-6xl text-yellow font-header uppercase z-10"
        >
          About us
        </h2> */}
      </section>
      <section className="relative bg-gray-50">
        <div className="absolute inset-x-0 right-1/2 top-0 w-1/2 h-full bg-white"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 font-body flex justify-center items-center h-full space-x-8">
          <div className="w-1/2 relative h-full aspect-w-16 aspect-h-6 rounded-lg shadow-2xl overflow-hidden">
          
            <img
              className="h-full w-full object-cover"
              src="/whoweare.jpeg"
              alt="People working on laptops"
            />
         
          </div>
          <div className="w-1/2 px-8">
            <p className="text-gray-900 mt-6 text-base">
              Bruderhilfe is a non-governmental organization duly registered
              with the Corporate Affairs Commission &#40;CAC&#41; in 2017.
              Bruderhilfe is dedicated to improving the health, education of
              children and youth in rural and urban societies, embarking on
              sustainable community development projects, and creating
              socio-economic opportunities for children, women and families in
              rural communities.
            </p>
            <p className="text-gray-900 mt-6 text-base">
              We focus on the excluded members of the societies, the less
              privileged and rural, hard-to-reach communities with little access
              to socio-economic development programmes of government and private
              corporations. The organisation &#40;as our name translated into
              English <em>Brotherly Help</em> indicates&#41; seeks as a broad
              goal to improve the quality of life for all, but with particular
              emphasis on the vulnerable and undeserved populations.
            </p>
          </div>
        </div>
      </section>
      <section className="relative bg-green">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 font-body h-full relative">
          <ul className="grid grid-cols-3 gap-4 text-white">
            {interventionAreas.map((item) => (
              <li className="flex flex-col px-4 py-6">
                <h3 className="text-4xl font-header uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-6 text-lg">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="relative py-16 sm:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 h-full relative">
          <p className="mt-2 text-3xl font-extrabold text-green-dark tracking-tight sm:text-6xl font-header">
            Our core values
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((item) => (
                <div className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-12">
                      <div>
                        <span className="inline-flex items-center justify-center h-24 w-24 bg-yellow rounded-full shadow-lg relative">
                          <div className="absolute inset-0 overflow-hidden p-1">
                            <img
                              src={item.img}
                              alt=""
                              className="h-full w-full rounded-full object-center object-cover"
                            />
                          </div>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-semibold text-gray-900 tracking-tight font-body">
                        {item.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-500 font-body">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex">
        <div className="w-1/2 relative">
          <div className="absolute inset-0">
            <img
              src="objectives-new.jpeg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gray-600"
              style={{ mixBlendMode: "multiply" }}
            ></div>
          </div>
          <div className="absolute right-7 top-7 font-header text-6xl text-yellow capitalize">
            <span className="block">our</span>
            <span className="block">objectives</span>
          </div>
        </div>
        <div className="w-1/2 relative h-full grid grid-cols-2 text-white">
          {objectives.map((item) => (
            <div
              className={`h-full px-8 py-8 text-lg bg-${item.color}  flex flex-col space-y-4`}
              key={item.title}
            >
              <span className="text-6xl font-header">{item.title}</span>
              <p className="">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 h-full relative mx-auto py-12 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-extrabold text-green-dark tracking-tight sm:text-6xl font-header">
              Meet our team
            </h2>

            <ul className="grid grid-cols-2 gap-8">
              {data.map((leader) => (
                <li className="flex flex-col space-y-8 items-center px-4">
                  <div className="relative h-48 w-48 rounded-full border-2 border-gray-200 overflow-hidden">
                    <div className="absolute inset-0 h-full w-full">
                      <img
                        src={leader.image}
                        alt=""
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>

                  <div className="text-left text-base text-gray-700 space-y-2 font-body">
                    <p className="text-center font-semibold text-green-dark">
                      {leader.name}{" "}
                    </p>
                    <p className="text-center text-sm text-gray-500 pb-4">
                      {leader.position}
                    </p>
                    {extractParagraph(leader.bio).map((item) => (
                      <p>{item}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
const leadersquery = groq`
*[_type=='leaders'&& name!="Kemi Asemota"] | order(orderNum){
  name,
  position,
  "bio":bio[].children[],
  "image":image.asset->url,
}`;
export async function getStaticProps(context) {
  const leaders = await sanityStaticProps({
    context,
    query: leadersquery,
  });
  return {
    props: { data: leaders.data },
  };
}

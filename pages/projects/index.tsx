import Head from "next/head";
import { sanityStaticProps, useSanityQuery, PortableText } from "lib/sanity";
import { groq } from "next-sanity";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
export default function Projects(props) {
  // console.log({ props });
  // const { data, loading, error } = useSanityQuery(query, props);
  // // const data = d["data"];
  // console.log(data);
  const { data } = props;
  return (
    <>
      <Head>
        <title>Projects | Bruder Hilfe Social Development Initiative</title>
      </Head>
      <Navbar />
      <section className="relative h-96">
        <div className="absolute inset-0 h-full">
          <img
            className="h-full w-full object-center object-cover"
            src="projects.jpeg"
          />
          <div
            className="absolute inset-0 bg-gray-600 bg-opacity-60"
            style={{ mixBlendMode: "multiply" }}
          ></div>
        </div>
        <h2 className="hidden lg:block absolute left-28 bottom-4 shadow-4xl text-6xl text-yellow font-header capitalize z-10">
          Our Projects
        </h2>
      </section>
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 font-body h-full relative">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 xl:gap-x-8"
          >
            {data.map((project) => (
              <li key={project.id} className="relative group">
                <Link href={`/projects/${encodeURIComponent(project.slug)}`}>
                  <a>
                    <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-yellow-dark block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                      <img
                        src={project.coverImg}
                        alt=""
                        className="group-hover:opacity-75 object-cover pointer-events-none"
                      />
                      <button type="button" className="absolute inset-0">
                        <span className="sr-only">
                          View details for {project.title}
                        </span>
                      </button>
                    </div>
                    <h3 className="mt-2 block text-lg uppercase font-semibold text-gray-900 truncate group-hover:text-yellow-dark">
                      {project.title}
                    </h3>

                    <button
                      type="button"
                      className="absolute hidden left-[40%] top-1/3 group-hover:inline-flex items-center px-2.5 py-1.5 border border-yellow-dark shadow-sm text-xs font-medium rounded text-yellow-dark bg-custom-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-dark uppercase"
                    >
                      Open
                    </button>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

const query = groq`
  *[_type=='project']
  {"id":_id,
    "title":projectName,
    "coverImg":coverImage.asset->url,
    "slug":titleSlug.current
  }`;
export async function getStaticProps(context) {
  const page = await sanityStaticProps({ context, query: query });
  // console.log(page);
  return {
    props: {
      data: page.data,
    },
  };
}

//
// *[_type=='project']
// {
//     projectName,
//     "img":coverImage.asset->url,
//   date,
//     "paragraphs":description[].children[],
//   location,
//   "slug":titleSlug.current,
//   "imagesUrl":images[].asset->url
//   }

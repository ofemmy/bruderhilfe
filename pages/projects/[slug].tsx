import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { sanityStaticProps, useSanityQuery, PortableText } from "lib/sanity";
import { extractParagraph } from "lib/extractParagraph";
import { CalendarIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import { groq } from "next-sanity";
export default function Project(props) {
  const { data } = props;

  //   console.log(data["content"][0]);
  return (
    <>
      <Head>
        <title>Projects | Bruder Hilfe Social Development Initiative</title>
      </Head>
      <Navbar />
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 mt-4 sm:px-6 font-body h-full relative">
          <div className="lg:h-[625px] rounded-lg overflow-hidden">
            <img
              className="h-full w-full object-cover object-top"
              src={data?.coverImage}
              alt="People working on laptops"
            />
          </div>
          <h2 className="font-semibold text-custom-black text-4xl mt-8 uppercase font-header">
            {data?.title}
          </h2>
          <div>
            <div className="text-yellow-dark flex items-center space-x-2 mt-6">
              <CalendarIcon height={20} />
              <span className="text-sm ">
                {new Date(data?.date).toLocaleDateString()}
              </span>
            </div>
            <div className="text-yellow-dark flex items-center space-x-2 mt-3">
              <LocationMarkerIcon height={20} />
              <span className="text-sm">{data?.location}</span>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 font-body mt-8">
            {extractParagraph(data?.content)?.map((p) => (
              <p>{p}</p>
            ))}
          </div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 my-16"
          >
            {data?.images?.map((img) => (
              <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-yellow-dark block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="group-hover:opacity-75 object-cover pointer-events-none"
                />
              </div>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
const query = groq`
  *[_type=='project']
  {
    "slug":titleSlug.current
  }`;
export async function getStaticPaths(context) {
  const slugs = await await sanityStaticProps({ context, query: query });
  const { data }: any = slugs;
  const paths = data.map((slug) => ({
    params: { slug: slug.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { slug } = context.params;
  const projectQuery = groq`*[_type=='project'&&titleSlug.current=='${slug}']{
        "coverImage":coverImage.asset->url,
        date,
        location,
        "title":projectName,
        "slug":titleSlug.current,
        "content":description[].children[],
        "images":images[].asset->url    
      }[0]`;
  const project = await sanityStaticProps({
    context,
    query: projectQuery,
  });
  return {
    props: { data: project.data },
  };
}

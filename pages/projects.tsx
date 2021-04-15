import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Bruder Hilfe Social Development Initiative</title>
      </Head>
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
        <h2 className="absolute left-28 bottom-4 shadow-4xl text-6xl text-yellow font-header capitalize z-10">
          Our Projects
        </h2>
      </section>
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 font-body h-full relative">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          ></ul>
        </div>
      </section>
    </>
  );
}

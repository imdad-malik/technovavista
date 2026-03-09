import Image from "next/image";

export const metadata = {
  title: "Imdad Malik | AI SEO & Technical SEO Expert Portfolio",
  description:
    "Professional SEO portfolio of Imdad Malik – AI SEO strategist, technical SEO expert, on-page SEO specialist helping businesses grow organic traffic globally.",
  keywords: [
    "AI SEO expert",
    "technical SEO consultant",
    "SEO expert portfolio",
    "international SEO strategist",
    "on page SEO expert",
    "SEO consultant for SaaS",
    "ecommerce SEO specialist",
    "AEO optimization expert",
    "GEO generative engine optimization",
    "AI search optimization",
    "SEO freelancer global",
  ],
};

export default function Portfolio() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Imdad Malik  
            <span className="block text-blue-500 mt-2">
              AI SEO & Technical SEO Expert
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            SEO specialist helping global businesses grow with 
            AI-driven search optimization, advanced technical SEO,
            and modern organic growth strategies.
          </p>

          <p className="mt-4 text-gray-500">
            Since 2021 I have successfully worked on multiple real SEO projects
            including SaaS SEO, ecommerce SEO, technical audits and
            international search growth strategies.
          </p>

          <div className="mt-6 flex gap-4">
            <span className="bg-gray-100 px-4 py-2 rounded-lg text-sm">
              AI SEO
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-lg text-sm">
              Technical SEO
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-lg text-sm">
              AEO Optimization
            </span>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative group">

            <Image
              src="/imdad-malik-seo-expert.jpg"
              width={350}
              height={350}
              alt="Imdad Malik SEO Expert"
              className="rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-blue-500 opacity-0 group-hover:opacity-10 blur-2xl transition duration-500"></div>

          </div>
        </div>
      </section>


      {/* AI SEO OVERVIEW SECTION */}

      <section className="mt-24">

        <h2 className="text-3xl font-bold mb-6">
          AI SEO Strategy & Search Optimization
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Modern search engines are evolving beyond traditional ranking
          algorithms. Today search visibility depends on AI-driven
          indexing systems, semantic search understanding and
          large language model discovery.

          My SEO strategy focuses on optimizing content and websites
          for both search engines and AI systems including
          answer engines and generative search models.
        </p>

      </section>


      {/* SERVICES */}

      <section className="mt-20 grid md:grid-cols-2 gap-10">

        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Technical SEO
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>✔ Website technical audits</li>
            <li>✔ Core Web Vitals optimization</li>
            <li>✔ crawlability & indexing improvements</li>
            <li>✔ structured data implementation</li>
            <li>✔ advanced internal linking strategies</li>
          </ul>
        </div>


        <div>
          <h3 className="text-2xl font-semibold mb-4">
            AI Search Optimization
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>✔ AI SEO strategies</li>
            <li>✔ AEO (Answer Engine Optimization)</li>
            <li>✔ GEO (Generative Engine Optimization)</li>
            <li>✔ semantic search optimization</li>
            <li>✔ LLM visibility optimization</li>
          </ul>
        </div>

      </section>



      {/* EXPERIENCE */}

      <section className="mt-24">

        <h2 className="text-3xl font-bold mb-6">
          Professional Experience
        </h2>

        <p className="text-gray-600">
          SEO professional since 2021 with experience working on
          international projects across multiple industries
          including SaaS platforms, ecommerce stores,
          content publishers and local businesses.
        </p>

        <p className="mt-4 text-gray-600">
          Successfully completed 10+ practical SEO projects
          involving keyword research, technical optimization,
          AI search optimization and organic traffic growth.
        </p>

      </section>



      {/* CTA */}

      <section className="mt-24 text-center">

        <h2 className="text-3xl font-bold">
          Let's Grow Your Organic Traffic
        </h2>

        <p className="mt-4 text-gray-600">
          If you're looking for an SEO expert who understands both
          traditional search engines and modern AI-driven search
          systems, let's connect.
        </p>

      </section>

    </main>
  );
}
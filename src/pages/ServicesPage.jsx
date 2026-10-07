import { useMemo, useState } from "react";
import Seo from "../lib/seo";
import { services, serviceCategories } from "../data/services";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import ServiceCard from "../components/ServiceCard";

const ServicesPage = () => {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    return services.filter((service) => {
      const inCategory = category === "All" || service.category === category;
      const matches = !value || [service.title, service.description, service.category, ...service.symptoms].join(" ").toLowerCase().includes(value);
      return inCategory && matches;
    });
  }, [query, category]);

  return (
    <>
      <Seo title="Services | Circuit Savant" description="Key programming, ECU coding, injector coding, diagnostics, and 40+ automotive services in Harare." path="/services" />
      <section className="py-16">
        <SectionTitle eyebrow="Services" title="Automotive Services" description="Search and request specialized diagnostics, programming, and coding support." />
        <Container className="mt-8">
          <label htmlFor="serviceSearch" className="sr-only">Search services</label>
          <input
            id="serviceSearch"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search service or category"
            className="w-full rounded-lg border border-line bg-panel px-4 py-3 text-sm"
          />

          <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {["All", ...Object.keys(serviceCategories)].map((name) => (
              <button
                key={name}
                onClick={() => setCategory(name)}
                aria-pressed={category === name}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${category === name ? "border-accent bg-accent text-white" : "border-line text-textMuted hover:border-accent/50 hover:text-textPrimary"}`}
              >
                {name}
              </button>
            ))}
          </div>
          {filtered.length === 0 ? <p className="mt-6 text-textMuted">No match. Try a symptom like "rough idle", or WhatsApp us and we will advise.</p> : null}

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <SectionTitle eyebrow="More" title="40+ Automotive Services" description="Expanded coverage across diagnostics, programming, electrical, and module systems." />
        <Container className="mt-8">
          <button className="rounded-lg border border-accent/40 px-4 py-2 text-sm font-semibold text-accent hover:bg-accent hover:text-white" onClick={() => setShowAll((current) => !current)}>
            {showAll ? "Hide categories" : "View all services"}
          </button>

          {showAll ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(serviceCategories).map(([category, items]) => (
                <div key={category} className="rounded-xl border border-line bg-surface p-5">
                  <h3 className="font-semibold text-accent">{category}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-textMuted">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
};

export default ServicesPage;
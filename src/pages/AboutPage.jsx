import Seo from "../lib/seo";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

const AboutPage = () => (
  <>
    <Seo title="About Circuit Savant" description="Professional automotive key and ECU specialists serving Harare with mobile support." path="/about" />
    <section className="py-16">
      <SectionTitle eyebrow="About" title="Professional Automotive Key & ECU Solutions" description="Circuit Savant delivers specialized mobile automotive diagnostics and programming services across Harare." />
      <Container className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-line bg-surface p-6">
          <h3 className="text-lg font-semibold">Company Overview</h3>
          <p className="mt-3 text-textMuted">We focus on practical diagnostics and coding services that restore reliability fast. Our process emphasizes accurate fault tracing, transparent communication, and dependable workmanship.</p>
          <h4 className="mt-6 font-semibold text-accent">Mission & Values</h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-textMuted">
            <li>Deliver fast and accurate solutions.</li>
            <li>Keep pricing fair and transparent.</li>
            <li>Use professional-grade tools and proven workflows.</li>
            <li>Support customers with clear updates and documentation.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-line bg-surface p-6">
          <h3 className="text-lg font-semibold">Tools & Technology</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-textMuted">
            <li>Advanced diagnostic scanners with live data capabilities</li>
            <li>ECU programmer for module coding and adaptation</li>
            <li>Key programmer for transponder and remote key pairing</li>
            <li>Electrical testing tools for circuit and sensor diagnostics</li>
          </ul>
          <div className="mt-6 rounded-lg border border-accent/30 bg-accent/10 p-4">
            <p className="font-semibold">We come to you anywhere in Harare.</p>
            <p className="mt-1 text-sm text-textMuted">Mobile service support for homes, offices, and roadside situations.</p>
          </div>
        </div>
      </Container>
    </section>
  </>
);

export default AboutPage;
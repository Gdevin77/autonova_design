import Container from "./Container";

const SectionTitle = ({ eyebrow, title, description, centered = false }) => (
  <Container className={centered ? "text-center" : ""}>
    {eyebrow ? <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p> : null}
    <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
    {description ? <p className="mt-3 max-w-3xl text-textMuted sm:text-lg">{description}</p> : null}
  </Container>
);

export default SectionTitle;
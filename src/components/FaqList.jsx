import { useState } from "react";
import { faqs } from "../data/faqs";
import Card from "./ui/Card";

const FaqList = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto grid max-w-4xl gap-3">
      {faqs.map((faq, index) => (
        <Card key={faq.q} className="p-0">
          <button
            className="flex w-full items-center justify-between px-5 py-4 text-left"
            onClick={() => setOpen(open === index ? -1 : index)}
            aria-expanded={open === index}
          >
            <span className="font-semibold">{faq.q}</span>
            <span className="text-accent">{open === index ? "-" : "+"}</span>
          </button>
          {open === index ? <p className="border-t border-line px-5 py-4 text-sm text-textMuted">{faq.a}</p> : null}
        </Card>
      ))}
    </div>
  );
};

export default FaqList;
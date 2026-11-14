import { useState } from "react";

const questions = [
  {
    question: "How long does delivery take?",
    answer: "Orders are usually delivered within 3–5 business days.",
  },
  {
    question: "Is delivery free?",
    answer: "Standard delivery is free on orders over $100.",
  },
  {
    question: "Can I return an item?",
    answer: "Unused items can be returned within 30 days of delivery.",
  },
];

export default function DeliveryPage({ onShop }) {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <section className="mx-auto max-w-[900px] px-4 py-12 sm:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">Shop with confidence</p>
      <h1 className="mt-2 text-3xl font-bold text-emerald-950">Delivery & Returns</h1>
      <p className="mt-3 max-w-2xl leading-7 text-slate-600">
        We offer free standard delivery on orders over $100 and a 30-day return window on unused items.
      </p>
      <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200">
        {questions.map(({ question, answer }, index) => (
          <div key={question} className="p-5">
            <button
              className="flex w-full items-center justify-between gap-4 text-left font-semibold text-slate-900"
              aria-expanded={openQuestion === index}
              onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
            >
              {question}<span aria-hidden="true">{openQuestion === index ? "−" : "+"}</span>
            </button>
            {openQuestion === index && <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>}
          </div>
        ))}
      </div>
      <button className="mt-8 rounded-full bg-emerald-950 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800" onClick={onShop}>
        Continue shopping
      </button>
    </section>
  );
}

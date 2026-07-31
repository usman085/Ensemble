import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import { brand, collections, products } from "../data/site";
import { stagger, cardItem } from "../motion";

const filters = [{ id: "all", name: "All" }, ...collections.map((c) => ({ id: c.id, name: c.name }))];

export default function Collections() {
  const [params, setParams] = useSearchParams();
  const initial = params.get("cat") || "all";
  const [active, setActive] = useState(
    filters.some((f) => f.id === initial) ? initial : "all"
  );

  const filtered = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  const setFilter = (id) => {
    setActive(id);
    if (id === "all") setParams({});
    else setParams({ cat: id });
  };

  return (
    <PageTransition>
      <section className="page-hero">
        <Reveal>
          <p className="eyebrow">Collections</p>
          <h1 className="page-title">Curated Pakistani fashion</h1>
          <p className="page-lede">
            Browse festive, Ramadan, summer, and new arrivals — then enquire on
            WhatsApp for availability and sizing.
          </p>
        </Reveal>
      </section>

      <section className="section pt-0">
        <div className="filter-bar" role="tablist" aria-label="Collection filters">
          {filters.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={active === f.id}
              className={`filter-chip ${active === f.id ? "active" : ""}`}
              onClick={() => setFilter(f.id)}
            >
              {f.name}
            </button>
          ))}
        </div>

        <motion.div
          className="product-grid"
          key={active}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {filtered.map((p) => (
            <motion.article key={p.id} className="product-card" variants={cardItem}>
              <div className="product-media tall">
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <div className="product-meta">
                <p className="product-brand">{p.brand}</p>
                <h3>{p.name}</h3>
                <div className="product-row">
                  <p className="product-price">{p.price}</p>
                  <a
                    href={`${brand.whatsappLink}%20I%27m%20interested%20in%20${encodeURIComponent(p.name)}.`}
                    className="text-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  );
}

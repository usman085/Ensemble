import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import {
  brand,
  collections,
  heroImage,
  highlights,
  products,
} from "../data/site";
import { fadeUp, ease, stagger, cardItem } from "../motion";

export default function Home() {
  const reduce = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const featured = products.slice(0, 4);

  return (
    <PageTransition>
      <section className="hero" ref={heroRef}>
        <motion.div
          className="hero-media"
          style={reduce ? undefined : { y: imageY }}
          initial={reduce ? false : { scale: 1.08, opacity: 0.55 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease }}
        >
          <img src={heroImage} alt="Ensemble Dubai fashion" fetchPriority="high" />
          <div className="hero-veil" />
        </motion.div>

        <motion.div
          className="hero-content"
          style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        >
          <motion.p
            className="eyebrow light"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            Jumeirah · Dubai
          </motion.p>
          <motion.h1
            className="hero-title"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            Ensemble
            <span>Dubai</span>
          </motion.h1>
          <motion.p
            className="hero-lede"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            The largest Pakistani fashion multi-brand store in Dubai — curated
            labels for festive nights, Ramadan gatherings, and everyday luxury.
          </motion.p>
          <motion.div
            className="btn-row"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
          >
            <Link to="/collections" className="btn btn-accent">
              Explore collections
            </Link>
            <a
              href={brand.whatsappLink}
              className="btn btn-ghost-light"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp the boutique
            </a>
          </motion.div>
        </motion.div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <i />
        </div>
      </section>

      <section className="section">
        <Reveal className="section-head">
          <p className="eyebrow">The boutique</p>
          <h2 className="section-title">A destination for Pakistani fashion</h2>
          <p className="section-copy">
            From Al Wasl Road, Ensemble Dubai brings together leading labels in
            pret, formal, and occasion wear — styled for the Gulf calendar.
          </p>
        </Reveal>

        <div className="highlight-grid">
          {highlights.map((item, i) => (
            <Reveal key={item.title} className="highlight-card" delay={i * 0.08}>
              <p className="highlight-index">0{i + 1}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <Reveal className="section-head">
          <p className="eyebrow">Shop by moment</p>
          <h2 className="section-title">Collections</h2>
        </Reveal>

        <motion.div
          className="collection-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {collections.map((c) => (
            <motion.div key={c.id} variants={cardItem}>
              <Link to={`/collections?cat=${c.id}`} className="collection-card">
                <img src={c.image} alt={c.name} loading="lazy" />
                <div className="collection-card-copy">
                  <h3>{c.name}</h3>
                  <p>{c.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section">
        <Reveal className="section-head split">
          <div>
            <p className="eyebrow">New arrivals</p>
            <h2 className="section-title">Selected pieces</h2>
          </div>
          <Link to="/collections" className="text-link">
            View all
          </Link>
        </Reveal>

        <motion.div
          className="product-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          {featured.map((p) => (
            <motion.article key={p.id} className="product-card" variants={cardItem}>
              <div className="product-media">
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <div className="product-meta">
                <p className="product-brand">{p.brand}</p>
                <h3>{p.name}</h3>
                <p className="product-price">{p.price}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="cta-band">
        <Reveal>
          <p className="eyebrow light">Visit the villa</p>
          <h2>Come try the pieces in person</h2>
          <p>
            Villa 259, Al Wasl Road · Open late most evenings · Styling available
            for festive and bridal appointments.
          </p>
          <div className="btn-row">
            <Link to="/visit" className="btn btn-accent">
              Store details
            </Link>
            <Link to="/contact" className="btn btn-ghost-light">
              Book a visit
            </Link>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}

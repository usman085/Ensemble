import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import { brand, visitImage } from "../data/site";

export default function Visit() {
  return (
    <PageTransition>
      <section className="page-hero">
        <Reveal>
          <p className="eyebrow">Visit</p>
          <h1 className="page-title">The villa on Al Wasl</h1>
          <p className="page-lede">
            Step into Dubai&apos;s destination for Pakistani multi-brand fashion —
            personal styling, occasion dressing, and new arrivals every week.
          </p>
        </Reveal>
      </section>

      <section className="section pt-0">
        <div className="visit-layout">
          <Reveal className="visit-media">
            <img src={visitImage} alt="Ensemble Dubai boutique atmosphere" />
          </Reveal>

          <Reveal className="visit-panel" delay={0.1}>
            <div className="info-block">
              <p className="footer-label">Address</p>
              <p>{brand.address}</p>
            </div>

            <div className="info-block">
              <p className="footer-label">Hours</p>
              {brand.hours.map((h) => (
                <p key={h.day} className="hours-row">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </p>
              ))}
            </div>

            <div className="info-block">
              <p className="footer-label">Reach us</p>
              <p>
                <a href={`tel:${brand.phoneTel}`}>{brand.phone}</a>
              </p>
              <p>
                <a href={brand.whatsappLink} target="_blank" rel="noreferrer">
                  WhatsApp {brand.whatsapp}
                </a>
              </p>
              <p>
                <a href={brand.instagram} target="_blank" rel="noreferrer">
                  {brand.handle}
                </a>
              </p>
            </div>

            <div className="btn-row">
              <a
                className="btn btn-primary"
                href={`https://maps.google.com/?q=${encodeURIComponent(brand.address)}`}
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
              </a>
              <a
                className="btn btn-ghost"
                href={brand.whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Message WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

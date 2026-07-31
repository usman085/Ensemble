import { useState } from "react";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import { brand } from "../data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const message = data.get("message");
    const text = `Hi Ensemble Dubai, I'm ${name}. ${message}`;
    window.open(
      `https://wa.me/971561799250?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  };

  return (
    <PageTransition>
      <section className="page-hero">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="page-title">Book a boutique visit</h1>
          <p className="page-lede">
            Ask about availability, sizing, festive appointments, or bridal
            styling. We typically reply within one business day.
          </p>
        </Reveal>
      </section>

      <section className="section pt-0">
        <div className="contact-layout">
          <Reveal className="contact-card">
            <form className="contact-form" onSubmit={onSubmit}>
              <label>
                Name
                <input name="name" required placeholder="Your name" />
              </label>
              <label>
                Phone or email
                <input name="contact" required placeholder="+971 or email" />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what you're looking for — occasion, size, preferred labels..."
                />
              </label>
              <button type="submit" className="btn btn-primary">
                Send via WhatsApp
              </button>
              {sent && (
                <p className="form-note">
                  Opening WhatsApp with your message…
                </p>
              )}
            </form>
          </Reveal>

          <Reveal className="contact-aside" delay={0.1}>
            <div className="info-block">
              <p className="footer-label">Call</p>
              <a href={`tel:${brand.phoneTel}`} className="contact-big">
                {brand.phone}
              </a>
            </div>
            <div className="info-block">
              <p className="footer-label">WhatsApp</p>
              <a
                href={brand.whatsappLink}
                className="contact-big"
                target="_blank"
                rel="noreferrer"
              >
                {brand.whatsapp}
              </a>
            </div>
            <div className="info-block">
              <p className="footer-label">Instagram</p>
              <a href={brand.instagram} target="_blank" rel="noreferrer">
                {brand.handle}
              </a>
            </div>
            <div className="info-block">
              <p className="footer-label">Store</p>
              <p>{brand.address}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

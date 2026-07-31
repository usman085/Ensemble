import { Link } from "react-router-dom";
import { brand } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <p className="footer-brand">
            Ensemble <span>Dubai</span>
          </p>
          <p className="footer-tagline">{brand.tagline}</p>
        </div>

        <div>
          <p className="footer-label">Visit</p>
          <p>{brand.address}</p>
        </div>

        <div>
          <p className="footer-label">Contact</p>
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

        <div>
          <p className="footer-label">Explore</p>
          <div className="footer-links">
            <Link to="/collections">Collections</Link>
            <Link to="/visit">Store hours</Link>
            <Link to="/contact">Book a visit</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ensemble Dubai · Pitch concept site</p>
        <a href={brand.instagram} target="_blank" rel="noreferrer">
          Follow on Instagram
        </a>
      </div>
    </footer>
  );
}

import { ArrowUpRight } from "lucide-react";
export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <p className="section-index">05 / Work with me</p>
      <h2>Open to thoughtful creative opportunities and collaborations.</h2>
      <p>
        Available for studio opportunities, commissioned artwork, wall art,
        decorative projects, freelance artistic work and creative
        collaborations.
      </p>
      <div className="contact-grid">
        <a href="mailto:">
          Email{" "}
          <span>
            <ArrowUpRight size={16} />
          </span>
        </a>
        <a href="#contact">
          Phone <span></span>
        </a>
        <a href="#contact">
          Instagram <span></span>
        </a>
        <a href="#contact">
          Portfolio <span></span>
        </a>
      </div>
    </section>
  );
}

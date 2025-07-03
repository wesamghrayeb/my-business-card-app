import React, { useRef, useState } from "react";

// Props interface (your info)
type Props = {
  logo: string;
  businessName: string;
  address: string;
  about: string;
  experience: string;
  phone: string;
  instagram?: string;
  whatsapp?: string;
  tiktok?: string;
  waze?: string;
  workingHours: string;
  services: string;
};

export default function BusinessCard({
  logo,
  businessName,
  address,
  about,
  experience,
  phone,
  instagram,
  whatsapp,
  tiktok,
  waze,
  workingHours,
  services,
}: Props) {
  const [showMore, setShowMore] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  // Helper for socials
  const socials = [
    whatsapp && {
      href: `https://wa.me/${whatsapp}`,
      icon: "/whatsapp.png",
      alt: "Whatsapp"
    },
    instagram && {
      href: instagram,
      icon: "/instagram.png",
      alt: "Instagram"
    },
    phone && {
      href: `tel:${phone}`,
      icon: "/phone.png",
      alt: "Phone"
    },
    tiktok && {
      href: tiktok,
      icon: "/tiktok.png",
      alt: "TikTok"
    },
    waze && {
      href: waze,
      icon: "/waze.png",
      alt: "Waze"
    }
  ].filter(Boolean) as { href: string; icon: string; alt: string }[];

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero is-image"
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.85)), url('${logo}') center center / cover no-repeat`
        }}
      >
        <div className="hero-body has-text-centered">
          <div className="container" data-aos="fade-up">
            <div
              style={{
                margin: "4rem auto 0 auto",               // Less top margin
                background: "rgba(0, 0, 0, 0.57)",
                backdropFilter: "blur(7px)",
                padding: "2.3rem 2.7rem",
                borderRadius: 24,
                boxShadow: "0 0 30px rgba(0, 204, 255, 0.14)",
                width: "100%",                            // Full width of parent
                maxWidth: 720,                            // Wide hero for desktop
                minWidth: 320,                            // Not too narrow on mobile
                textAlign: "center",
                wordBreak: "break-word",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1
                className="title is-2 has-text-white has-text-weight-bold"
                style={{
                  letterSpacing: 1,
                  wordBreak: "keep-all",
                  whiteSpace: "nowrap",
                  overflowWrap: "normal"
                }}
              >
                {businessName} <br />
                <span role="img" aria-label="emoji"></span>
              </h1>
              <p className="subtitle is-5 has-text-grey-light mt-2">
                {address}
              </p>
              <button
                className="button is-link is-inverted is-outlined mt-4"
                onClick={() => logoRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}
                style={{ cursor: "pointer" }}
              >
                ✦ Explore Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Logo + Social */}
      <section className="section has-text-centered" data-aos="fade-up">
        <div className="container">
          <div id="logo-container" ref={logoRef}>
            <img src={logo} alt="Business Logo" id="logo" />
          </div>
          <h1 className="title is-3 mt-3">{businessName}</h1>
          <h2 className="subtitle is-6">{address}</h2>

          <div className="social-icons mt-3">
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer">
                <img src={s.icon} alt={s.alt} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" data-aos="fade-up">
        <div className="container">
          <div className="box has-text-centered">
            <h3 className="title is-4">About Me</h3>
            <p className="mb-3">
              {about}
            </p>
            <p className="mb-3">
              <strong>Experience:</strong><br />
              {experience}
            </p>
            <p className="mb-3">
              <strong>Working Hours:</strong><br />
              {workingHours}
            </p>
            <p className="mb-3">
              <strong>Services:</strong><br />
              {services}
            </p>
            <button
              className="button is-dark is-small more-btn"
              onClick={() => setShowMore((v) => !v)}
              style={{ cursor: "pointer" }}
            >
              {showMore ? "Less Info" : "More Info"}
            </button>
            <div id="more-info" className="mt-4" style={{ display: showMore ? "block" : "none", animation: showMore ? "fadeIn 0.6s" : undefined }}>
              <p><strong>Phone:</strong> {phone}</p>
              <p><strong>Address:</strong> {address}</p>
              <p><strong>Working Hours:</strong> {workingHours}</p>
              <p><strong>Services:</strong> {services}</p>
              {instagram && (
                <p>
                  <strong>Instagram:</strong>{" "}
                  <a href={instagram} target="_blank" rel="noopener noreferrer">
                    {instagram}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        Powered and secured by{" "}
        <a href="https://wesamghrayeb.netlify.app/" target="_blank" rel="noopener noreferrer">
          Wesam Engineering
        </a>{" "}
        ©
      </footer>

      {/* EXACT CSS as your template */}
      <style jsx global>{`
        body {
          background-color: #121212;
          color: #e0e0e0;
        }

        .hero.is-image {
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.85));
          height: 80vh;
          position: relative;
          overflow: hidden;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px);}
          to   { opacity: 1; transform: translateY(0);}
        }
        #logo {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: 5px solid #333;
          object-fit: contain;
          object-position: center;
          padding: 2px;
          box-shadow: 0 0 12px rgba(255,255,255,0.2);
          margin-top: -80px;
          animation: float 3s ease-in-out infinite, fadeIn 1.5s ease-in-out;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-8px);}
        }
        .box {
          background-color: #1e1e1e;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.3);
        }
        .title, .subtitle, .box h3, .box p, .box strong {
          color: #f0f0f0;
        }
        .social-icons a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 44px;
          height: 44px;
          margin: 6px;
          border-radius: 50%;
          background-color: #222;
          border: 1px solid #444;
          transition: transform 0.2s, background-color 0.3s;
        }
        .social-icons a:hover {
          transform: scale(1.1);
          background-color: #00ccff;
        }
        .social-icons img {
          width: 22px;
          height: 22px;
          filter: brightness(0.9);
        }
        .more-btn {
          margin-top: 1rem;
        }
        .button.is-dark {
          background-color: #00ccff;
          color: #111;
        }
        .button.is-dark:hover {
          background-color: #00aacc;
          color: #fff;
        }
        #more-info {
          display: none;
        }
        footer {
          background-color: #000;
          color: #fff;
          padding: 1rem 0;
          text-align: center;
          font-size: 14px;
        }
        footer a {
          color: #00ccff;
          text-decoration: none;
        }
        footer a:hover {
          text-decoration: underline;
        }
        @media screen and (max-width: 480px) {
          .hero-body .title {
            font-size: 1.8rem !important;
            line-height: 2.2rem !important;
            white-space: normal !important;
          }
          .hero-body .subtitle {
            font-size: 1rem;
            line-height: 1.4rem;
          }
        }
      `}</style>
    </>
  );
}

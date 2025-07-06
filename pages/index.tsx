import Link from "next/link";
import PricingPage from "./pricing";
import { useState } from "react";

// Demo logo, replace with your own:
const logoUrl = "/logo.svg";

export default function Home() {
  // Example: Mobile menu toggle
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="main-hero-bg">
      {/* --- Navbar --- */}
      <header className="site-navbar">
        <div className="navbar-inner">
          <div className="navbar-logo">
            <Link href="/">
              <img src={logoUrl} alt="Logo" className="logo-img" />
            </Link>
          </div>
          <nav className="navbar-links">
            <Link href="/" className="nav-link active">Home</Link>
            <Link href="/pricing" className="nav-link">Pricing</Link>
            <a href="/create" className="nav-link">Create Card</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <button
            className="navbar-mobile-btn"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        {/* Mobile Nav */}
        {mobileMenu && (
          <nav className="mobile-nav">
            <Link href="/" className="nav-link active" onClick={()=>setMobileMenu(false)}>Home</Link>
            <Link href="/pricing" className="nav-link" onClick={()=>setMobileMenu(false)}>Pricing</Link>
            <a href="/create" className="nav-link" onClick={()=>setMobileMenu(false)}>Create Card</a>
            <a href="#contact" className="nav-link" onClick={()=>setMobileMenu(false)}>Contact</a>
          </nav>
        )}
      </header>

      {/* --- Hero Section --- */}
      <main className="main-hero-inner">
        {/* Left: Text */}
        <section className="hero-content">
          <div>
            <h1 className="hero-title">
              Digital<br />Business<br />Card
            </h1>
            <p className="hero-desc">
              Say goodbye to oldschool business cards<br />
              and unlock a new way to share your contact info
            </p>
            <a href="/create" className="hero-btn">Create Your Custom Card!</a>
          </div>
        </section>
        {/* Right: Card mockups */}
        <section className="hero-cards">
          <div className="card-stack">
            <div className="phone-card phone-card-left">
              <img src="/image.png" alt="Card Example Left" className="phone-img" />
              <div className="phone-gloss" />
            </div>
            <div className="phone-card phone-card-right">
              <img src="/image2.png" alt="Card Example Right" className="phone-img" />
              <div className="phone-gloss" />
            </div>
          </div>
        </section>
      </main>

      {/* Arrow/Separator for transition to pricing */}
      <div className="pricing-contact-nav">
        <span>Ready to see our plans?</span>
        <div className="arrow-down" />
      </div>

      {/* --- Pricing Section --- */}
      <section>
        <PricingPage />
      </section>

      {/* --- Global + Scoped CSS --- */}
      <style jsx global>{`
        html, body {
          font-family: 'Poppins', 'Montserrat', 'Inter', sans-serif;
          background: #0a0a0a;
        }
      `}</style>
      <style jsx>{`
        /* Navbar */
        .site-navbar {
          background: transparent;
          padding: 0.5rem 0;
          box-shadow: none;
          z-index: 100;
          position: sticky;
          top: 0;
        }
        .navbar-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 3vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-logo img {
          height: 44px;
          width: auto;
          margin-right: 12px;
        }
        .navbar-links {
          display: flex;
          gap: 1.8rem;
          align-items: center;
        }
        .nav-link {
          color: #eee;
          font-weight: 700;
          text-decoration: none;
          font-size: 1.08rem;
          padding: 0.3em 0.85em;
          border-radius: 10px;
          transition: background 0.17s;
        }
                  .hero-btn {
          display: inline-block;
          background: linear-gradient(90deg, #ff950088 0%, #ff950088 100%);
          color: #fff;
          font-weight: 800;
          font-size: 1.13rem;
          padding: 0.73rem 2.4rem;
          border: none;
          border-radius: 13px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s, box-shadow 0.18s;
          margin-top: 2.1rem;
          backdrop-filter: blur(2.5px);
          border: 1.5px solid #23f2ff44;
        }
        .nav-link:hover, .nav-link.active {
          background: #eed6b4;
          color: #161b21;
        }
        .navbar-mobile-btn {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          gap: 4px;
        }
        .navbar-mobile-btn span {
          display: block;
          width: 24px;
          height: 3px;
          background: #eed6b4;
          border-radius: 2px;
        }
        /* Mobile nav menu */
        .mobile-nav {
          position: absolute;
          top: 62px;
          left: 0;
          right: 0;
          background: #181818;
          box-shadow: 0 4px 24px #0008;
          display: flex;
          flex-direction: column;
          z-index: 1999;
          padding: 1.8rem 0 1.2rem 0;
        }
        .mobile-nav .nav-link {
          margin: 0.2em 0;
          color: #fff;
          text-align: center;
        }
        @media (max-width: 900px) {
          .navbar-links { display: none; }
          .navbar-mobile-btn { display: flex; }
        }
        /* Main hero area */
        .main-hero-bg {
          background: #0a0a0a;
          min-height: 100vh;
          width: 100vw;
          overflow-x: hidden;
        }
        .main-hero-inner {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: stretch;
          max-width: 1620px;
          margin: 0 auto;
          min-height: 80vh;
          padding: 5.2rem 4vw 3rem 6vw;
        }
        .hero-content {
          display: flex;
          flex: 1.16;
          align-items: flex-start;
          justify-content: flex-end;
        }
        .hero-title {
          font-size: 4.45rem;
          font-family: 'Montserrat', 'Poppins', sans-serif;
          font-weight: 900;
          color: #fff;
          line-height: 1.02em;
          margin-bottom: 2.3rem;
          letter-spacing: -2px;
          text-shadow: 0 4px 42px #0007, 0 1px 2px #fff1;
        }
        .hero-desc {
          color: #e3e3e3;
          font-size: 1.18rem;
          font-weight: 500;
          margin-bottom: 2.8rem;
          font-family: 'Inter', sans-serif;
        }
        .hero-btn {
          display: inline-block;
          background: linear-gradient(90deg, #ff950088 0%, #ff950088 100%);
          color: #fff;
          font-weight: 800;
          font-size: 1.13rem;
          padding: 0.73rem 2.4rem;
          border: none;
          border-radius: 13px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s, box-shadow 0.18s;
          margin-top: 2.1rem;
          backdrop-filter: blur(2.5px);
          border: 1.5px solid #23f2ff44;
        }
        .hero-btn:hover, .hero-btn:focus {
          background: linear-gradient(90deg, #ff950088 0%, #ff950088 100%);
          color: #fff;
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 0 22px #ff950088, 0 3px 18px #00ccff30;
          text-decoration: none;
        }
        /* Cards Area */
        .hero-cards {
          flex: 1.1;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: relative;
        }
        .card-stack {
          position: relative;
          width: 650px;
          height: 540px;
          z-index: 5;
        }
        .phone-card {
          position: absolute;
          width: 300px;
          height: 540px;
          border-radius: 32px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          box-shadow: 0 7px 38px #ff950066, 0 0 64px 4px #ffb86622, 0 3px 16px #0009;
        }
        .phone-card-left {
          left: 0;
          top: 40px;
          transform: translateX(60px) scale(0.96);
          z-index: 2;
          opacity: 0.95;
          box-shadow: 0 8px 90px #ff950045, 0 2px 12px #000b;
        }
        .phone-card-right {
          left: 280px;
          top: 0;
          transform: translateX(60px) scale(1.06);
          z-index: 3;
          box-shadow: 0 8px 90px #ff950088, 0 2px 12px #000b;
        }
        .phone-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 32px;
          box-shadow: 0 2px 16px #0008;
          background: #111;
          display: block;
        }
        .phone-gloss {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border-radius: 32px;
          pointer-events: none;
          background: linear-gradient(120deg,rgba(255,255,255,0.19) 0%,rgba(255,255,255,0) 60%);
          z-index: 5;
          mix-blend-mode: lighten;
        }
        .pricing-contact-nav {
          width: 100vw;
          text-align: center;
          margin: 3.2rem 0 0.5rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .pricing-contact-nav span {
          background: #eed6b4;
          color: #161b21;
          font-weight: 800;
          border-radius: 24px;
          padding: 0.8em 1.6em;
          font-size: 1.14rem;
          box-shadow: 0 2px 16px #eed6b460;
          margin-bottom: 0.3em;
          display: inline-block;
          letter-spacing: 0.03em;
        }
        .arrow-down {
          width: 0; height: 0;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-top: 20px solid #eed6b4;
          margin: 0 auto;
          filter: drop-shadow(0 3px 8px #eed6b477);
          animation: arrow-bounce 1.1s infinite;
        }
        @keyframes arrow-bounce {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(9px);}
        }
        @media (max-width: 900px) {
          .main-hero-inner {
            flex-direction: column;
            align-items: center;
            padding: 2.5rem 0.5rem 1.5rem 0.5rem;
          }
          .hero-content {
            flex: unset;
            justify-content: center;
            width: 100%;
          }
          .hero-title { font-size: 2.4rem; }
          .card-stack {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            width: 100vw;
            min-width: 0;
            max-width: 100vw;
            height: auto;
            margin: 0 auto;
            z-index: 1;
          }
          .phone-card {
            position: relative;
            width: 90vw;
            max-width: 320px;
            min-width: 160px;
            height: auto;
            aspect-ratio: 9/16;
            margin: 0 0 22px 0;
            border-radius: 18px;
            box-shadow: 0 4px 32px #ff950044, 0 1px 8px #0008;
            left: unset; top: unset;
            transform: none;
            opacity: 1;
            background: #181818;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .phone-card-left,
          .phone-card-right {
            margin: 0 0 22px 0;
            z-index: 1;
            opacity: 1;
            transform: none;
            box-shadow: 0 4px 32px #ff950044, 0 1px 8px #0008;
          }
          .phone-img {
            width: 100%;
            height: 100%;
            border-radius: 18px;
            object-fit: cover;
          }
        }
      `}</style>
    </div>
  );
}

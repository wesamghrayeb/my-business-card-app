import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleNavClick = () => setOpen(false);

  return (
    <nav className="nb-navbar">
      <div className="nb-navbar-inner">
        <Link href="/" className="nb-navbar-brand" tabIndex={-1}>
          <span className="nb-navbar-title">MY BUSINESS CARD</span>
        </Link>
        <div className={`nb-navbar-links${open ? " open" : ""}`}>
          <Link href="/" onClick={handleNavClick}><span>Home</span></Link>
          <Link href="/create" onClick={handleNavClick}><span>Create</span></Link>
          <Link href="/pricing" onClick={handleNavClick}><span>Pricing</span></Link>
        </div>
        <button
          className="nb-navbar-toggle"
          aria-label="menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
      <style jsx>{`
        .nb-navbar {
          position: fixed;
          top: 0; left: 0; width: 100vw;
          z-index: 999;
          background: rgba(16,16,16,0.98);
          border-bottom: 1.5px solid #242424;
          backdrop-filter: blur(11px) saturate(125%);
          box-shadow: 0 2px 15px #181818bb;
          font-family: 'Montserrat', 'Inter', sans-serif;
        }
        .nb-navbar-inner {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.17rem 1.1rem 0.17rem 1.1rem; /* very slim */
          min-height: 50px;
        }
        .nb-navbar-brand {
          display: flex;
          align-items: center;
          text-decoration: none;
          gap: 0.45rem;
          outline: none;
        }
        .nb-navbar-logo {
          width: 28px; height: 28px;
          border-radius: 8px;
          background: radial-gradient(circle at 70% 40%, #eed6b4 42%, #ff9500 100%);
          box-shadow: 0 2px 12px #ffb86628, 0 0 0 2.5px #181818;
        }
        .nb-navbar-title {
          color: #eed6b4;
          font-size: 1.04rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          letter-spacing: 1.1px;
          text-shadow: 0 2px 10px #ff950040;
          transition: color 0.17s;
        }
        .nb-navbar-links {
          display: flex;
          gap: 20px;
          align-items: center;
          margin: 0; /* NO gap */
          padding: 0;
        }
        .nb-navbar-links span {
          color: #fff;
          font-family: 'Inter', 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.10em;
          padding: 2px 6px 2px 6px;
          border-radius: 5px 5px 0 0;
          position: relative;
          cursor: pointer;
          transition: color 0.18s, background 0.15s;
        }
        .nb-navbar-links span:hover,
        .nb-navbar-links span:focus {
          color: #ff9500;
          background: #222;
        }
        .nb-navbar-links span::after {
          content: "";
          display: block;
          height: 2px;
          border-radius: 2px;
          margin-top: 4px;
          background: linear-gradient(90deg, #eed6b4 0%, #ff9500 99%);
          opacity: 0;
          transition: opacity 0.15s, transform 0.15s;
          transform: scaleX(0.4);
        }
        .nb-navbar-links a:hover span::after,
        .nb-navbar-links a:focus span::after {
          opacity: 1;
          transform: scaleX(1);
        }
        .nb-navbar-toggle {
          display: none;
          flex-direction: column;
          gap: 3.5px;
          background: none;
          border: none;
          outline: none;
          cursor: pointer;
          margin-left: 10px;
        }
        .nb-navbar-toggle span {
          display: block;
          width: 26px;
          height: 3px;
          border-radius: 2px;
          background: #ff9500;
        }
        /* Mobile styles */
        @media (max-width: 900px) {
          .nb-navbar-inner { padding-right: 0.5rem; min-height: 46px;}
          .nb-navbar-links {
            position: fixed;
            left: 0; top: 0;
            width: 100vw; height: 100vh;
            background: rgba(22, 18, 8, 0.99);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 42px;
            z-index: 150;
            transform: translateY(-120%);
            opacity: 0;
            pointer-events: none;
            transition: transform 0.33s cubic-bezier(.79,.15,.3,1.01), opacity 0.19s;
          }
          .nb-navbar-links.open {
            transform: translateY(0%);
            opacity: 1;
            pointer-events: auto;
          }
          .nb-navbar-toggle { display: flex; }
        }
      `}</style>
      {/* Font preload or load globally */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat:800,700,600|Inter:400,700&display=swap');
      `}</style>
    </nav>
  );
}

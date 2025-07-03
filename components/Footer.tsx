import React from "react";

export default function Footer() {
  return (
    <footer className="pretty-footer">
      <div className="footer-content">
        <div>
          Powered by{" "}
          <a
            href="https://wesamghrayeb.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Wesam Engineering
          </a>{" "}
          &copy; {new Date().getFullYear()}
        </div>
        <a
          href="https://wa.me/+972585291291"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-wa"
          aria-label="WhatsApp"
        >
          <img src="/whatsapp.png" alt="WhatsApp" className="footer-wa-icon" />
        </a>
      </div>
      <style jsx>{`
        .pretty-footer {
          width: 100vw;
          background: #181b22;
          color: #eed6b4;
          font-size: 1.05rem;
          box-shadow: 0 -2px 18px #00ccff14;
          border-top: 2.5px solid #00ccff22;
          margin-top: 0;
          padding: 0.85rem 0 0.25rem 0;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 14px;
          min-height: 54px;
        }
        .footer-link {
          color: #fff;
          font-weight: 700;
          text-decoration: none;
          border-bottom: 1.5px solid #eed6b4;
          transition: color 0.15s, border-color 0.15s;
        }
        .footer-link:hover {
          color: #00ccff;
          border-bottom: 1.5px solid #00ccff;
        }
        .footer-wa {
          display: inline-flex;
          align-items: center;
          margin-left: 15px;
          border-radius: 50%;
          box-shadow: 0 2px 12px #00ccff44, 0 0 0 3px #232a3440;
          transition: box-shadow 0.18s, transform 0.16s;
        }
        .footer-wa:hover,
        .footer-wa:focus {
          box-shadow: 0 4px 20px #00ccff88, 0 0 0 4px #eed6b470;
          transform: scale(1.07);
        }
        .footer-wa-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #222;
          padding: 4px;
          border: 1.5px solid #444;
        }
        @media (max-width: 700px) {
          .footer-content {
            flex-direction: column;
            gap: 8px;
            min-height: 40px;
          }
          .footer-wa {
            margin-left: 0;
          }
          .footer-wa-icon {
            width: 34px;
            height: 34px;
          }
        }
      `}</style>
    </footer>
  );
}

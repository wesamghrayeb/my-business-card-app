import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import BusinessCard from "../../components/BusinessCard"; // adjust path if needed
import { FaWhatsapp, FaFacebook, FaTelegram, FaLink } from "react-icons/fa";

export default function CardPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [card, setCard] = useState<any>(null);
  const [loading, setLoading] = useState(true);
const [showCopied, setShowCopied] = useState(false);

const shareBtnStyle: React.CSSProperties = {
  width: 38,
  height: 38,
  borderRadius: "50%",
  border: "none",
  background: "#161b21",
  color: "#00ccff",
  fontSize: 23,
  boxShadow: "0 2px 14px #00ccff18, 0 1.5px 7px #0008",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "background 0.19s, color 0.17s",
  outline: "none"
};
  useEffect(() => {
    if (!slug) return;
    const fetchCard = async () => {
      setLoading(true);
      const q = query(collection(db, "cards"), where("slug", "==", slug));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        setCard(snapshot.docs[0].data());
      }
      setLoading(false);
    };
    fetchCard();
  }, [slug]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 70% 10%, #00ccff22 0%, #191b21 55%, #131415 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem 0",
      }}
    >
      <div
        className="card-glow"
        style={{
          background: "#181b22",
          borderRadius: 20,
          boxShadow: "0 6px 40px #00ccff33, 0 1.5px 18px #000b",
          maxWidth: 540,
          width: "98vw",
          margin: "2rem auto",
          padding: "2.1rem 2rem 2.3rem 2rem",
          border: "1.5px solid #222",
          position: "relative",
        }}
      >
        {loading ? (
          <div
            style={{
              color: "#00ccff",
              fontWeight: 800,
              fontSize: "1.37rem",
              textAlign: "center",
              minHeight: 320,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading...
          </div>
        ) : !card ? (
          <div
            style={{
              color: "#ff3355",
              fontWeight: 700,
              fontSize: "1.19rem",
              textAlign: "center",
              minHeight: 320,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Card not found.
          </div>
        ) : (
          <div style={{ animation: "fadein .6s" }}>
            <BusinessCard {...card} />
            {/* Share Bar */}
            <div style={{
              display: "flex", justifyContent: "center", alignItems: "center",
              gap: 18, margin: "1.8rem 0 0 0"
            }}>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(window?.location?.href)}`}
                target="_blank"
                rel="noopener"
                title="Share via WhatsApp"
                style={shareBtnStyle}
              >
                <FaWhatsapp />
              </a>
              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(window?.location?.href)}`}
                target="_blank"
                rel="noopener"
                title="Share via Telegram"
                style={shareBtnStyle}
              >
                <FaTelegram />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window?.location?.href)}`}
                target="_blank"
                rel="noopener"
                title="Share via Facebook"
                style={shareBtnStyle}
              >
                <FaFacebook />
              </a>
              <button
                type="button"
                title="Copy Link"
                style={shareBtnStyle}
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setShowCopied(true);
                  setTimeout(() => setShowCopied(false), 1500);
                }}
              >
                <FaLink />
              </button>
              {showCopied && (
                <span style={{
                  color: "#00ccff",
                  marginLeft: 12,
                  fontWeight: 700,
                  fontSize: "1.09rem"
                }}>
                  Link copied!
                </span>
              )}
            </div>
            
          </div>
        )}
        <style>{`
          .card-glow { animation: fadein .8s; }
          @keyframes fadein { from { opacity: 0; transform: translateY(34px);} to { opacity: 1; transform: none; } }
        `}</style>
      </div>
    </div>
  );
}

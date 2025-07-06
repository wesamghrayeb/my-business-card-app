import { useEffect, useState } from "react";
import BusinessCard from "../components/BusinessCard";

type CardForm = {
  logo: string;
  businessName: string;
  address: string;
  about: string;
  experience: string;
  phone: string;
  instagram: string;
  whatsapp: string;
  tiktok: string;
  waze: string;
  workingHours: string;
  services: string;
};

export default function Pay() {
  const [form, setForm] = useState<CardForm | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [waUrl, setWaUrl] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("cardForm");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  function validateCardForm(form: CardForm): string[] {
    const errors = [];
    if (!form.businessName || form.businessName.trim().length < 2) {
      errors.push("Business name is required.");
    }
    if (!form.address || form.address.trim().length < 3) {
      errors.push("Address is required.");
    }
    if (!form.phone || !/^05\d{8}$/.test(form.phone.trim())) {
      errors.push("Valid Israeli phone number is required.");
    }
    if (!form.about || form.about.trim().length < 10) {
      errors.push("About section should be at least 10 characters.");
    }
    // Add more rules if needed
    return errors;
  }

  const handleContactAndSave = () => {
    if (!form) return;

    const validationErrors = validateCardForm(form);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      alert("You have to fill all the fields allright.");
      return;
    }
    setErrors([]);
    setLoading(true);

    // Build WhatsApp message text
    const message =
      `Hi, I just completed my digital business card! Here are my details:\n\n` +
      `Business Name: ${form.businessName}\n` +
      `Address: ${form.address}\n` +
      `About: ${form.about}\n` +
      `Experience: ${form.experience}\n` +
      `Phone: ${form.phone}\n` +
      (form.instagram ? `Instagram: ${form.instagram}\n` : '') +
      (form.whatsapp ? `WhatsApp: ${form.whatsapp}\n` : '') +
      (form.tiktok ? `TikTok: ${form.tiktok}\n` : '') +
      (form.waze ? `Waze: ${form.waze}\n` : '') +
      `Working Hours: ${form.workingHours}\n` +
      `Services: ${form.services}\n\n` +
      `Logo: (Please upload/attach your logo image as a file in this chat)\n`;

    const whatsappUrl = `https://wa.me/972585291291?text=${encodeURIComponent(message)}`;
    setWaUrl(whatsappUrl);
    setShowModal(true);
    setLoading(false);
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    if (waUrl) {
      window.open(waUrl, "_blank");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 60% 10%, #00ccff22 0%, #121213 55%, #181920 100%)",
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
          boxShadow: "0 6px 40px #00ccff35, 0 1.5px 18px #000b",
          maxWidth: 500,
          width: "96vw",
          margin: "2rem auto",
          padding: "2.3rem 2.1rem 1.7rem 2.1rem",
          border: "1.5px solid #222",
          position: "relative",
        }}
      >
        {!form ? (
          <div
            style={{
              textAlign: "center",
              color: "#00ccff",
              fontWeight: 700,
              fontSize: "1.32rem",
            }}
          >
            Loading...
          </div>
        ) : (
          <>
            <h1
              className="title has-text-centered mb-5"
              style={{
                color: "#00ccff",
                letterSpacing: 2,
                fontWeight: 900,
                fontSize: "2.25rem",
                marginBottom: "1.9rem",
                textShadow: "0 2px 12px #00ccff88",
              }}
            >
              Preview & Get Your Link
            </h1>
            <div style={{ marginBottom: 36 }}>
              <BusinessCard {...form} />
            </div>
            <div className="has-text-centered mt-5" style={{ textAlign: "center" }}>
              <button
                onClick={handleContactAndSave}
                className="button is-success"
                style={{
                  fontSize: "1.17rem",
                  fontWeight: 800,
                  marginTop: 14,
                  background: "linear-gradient(95deg,#25d366 0%,#6befff 100%)",
                  color: "#0e232a",
                  border: "none",
                  borderRadius: 11,
                  boxShadow: "0 2px 10px #00ccff55",
                  padding: "0.88rem 2.4rem",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.65em",
                  transition: "filter .16s, box-shadow .16s",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.6 : 1,
                }}
                disabled={loading}
              >
                <img
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    marginRight: 7,
                    background: "#fff",
                  }}
                />
                {loading ? "Sending..." : "Contact Us to Get Your Link"}
              </button>
              <p
                className="help mt-2"
                style={{
                  color: "#00ccff",
                  marginTop: "1.3em",
                  fontWeight: 500,
                }}
              >
                Complete your business card and <b>contact us</b> to receive your personal link!
                <br />
                <span style={{ color: "#fff", fontSize: "0.97em" }}>
                  <b>Note:</b> Please attach your logo image in the WhatsApp chat after clicking the button.
                </span>
              </p>
            </div>
          </>
        )}

        {/* Modal for WhatsApp reminder */}
        {showModal && (
          <div
            style={{
              position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
              background: "rgba(0,0,0,0.64)", zIndex: 99, display: "flex",
              alignItems: "center", justifyContent: "center"
            }}
            onClick={handleModalConfirm}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 13,
                padding: "2.2rem 2.5rem",
                maxWidth: 370,
                textAlign: "center",
                boxShadow: "0 2px 20px #0004",
                position: "relative"
              }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ marginBottom: 22 }}>
                <span role="img" aria-label="Attach" style={{ fontSize: 48 }}>📎</span>
              </div>
              <h2 style={{ color: "#00ccff", fontSize: "1.25rem", marginBottom: 15, fontWeight: 700 }}>
                Don't Forget Your Logo!
              </h2>
              <p style={{ color: "#0e232a", marginBottom: 14, fontSize: "1.07rem" }}>
                Please click the paperclip (<b>📎</b>) in WhatsApp and attach your logo image as a file in the chat so we can build your card!
              </p>
              <button
                onClick={handleModalConfirm}
                style={{
                  background: "linear-gradient(95deg,#25d366 0%,#6befff 100%)",
                  color: "#0e232a",
                  fontWeight: 800,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.73em 2em",
                  marginTop: 6,
                  cursor: "pointer"
                }}
              >
                Got it!
              </button>
            </div>
          </div>
        )}
        <style>{`
          .card-glow { animation: fadein .7s; }
          @keyframes fadein { from { opacity: 0; transform: translateY(32px);} to { opacity: 1; transform: none; } }
        `}</style>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import BusinessCard from "../components/BusinessCard";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Timestamp } from "firebase/firestore";

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

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/--+/g, "-");
}

export default function Pay() {
  const [form, setForm] = useState<CardForm | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("cardForm");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  const whatsappLink =
    "https://wa.me/972585291291?text=Hi,%20I%20just%20completed%20my%20digital%20business%20card.%20Can%20I%20get%20my%20unique%20link?";

  const handleContactAndSave = async () => {
      if (!form) return;

      const validationErrors = validateCardForm(form);
      if (validationErrors.length > 0) {
        setErrors(validationErrors);
        alert("You have to fill all the fields allright.");

        return; // Do not save if errors!
      }
        setErrors([]);
    setLoading(true);

    // Generate slug (unique card path)
    const slug = slugify(form.businessName || "my-card");

    try {
      await addDoc(collection(db, "cards"), {
        ...form,
        slug,
        createdAt: Timestamp.now()
      });
    } catch (err) {
      alert("Could not save card to database.");
      setLoading(false);
      return;
    }
    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank");
    setLoading(false);
  };
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
                  background:
                    "linear-gradient(95deg,#25d366 0%,#6befff 100%)",
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
              </p>
            </div>
          </>
        )}
        <style>{`
          .card-glow { animation: fadein .7s; }
          @keyframes fadein { from { opacity: 0; transform: translateY(32px);} to { opacity: 1; transform: none; } }
        `}</style>
      </div>
    </div>
  );
}

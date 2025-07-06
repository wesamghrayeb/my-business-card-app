import React, { useState } from "react";
import BusinessCard from "../components/BusinessCard";
import Head from "next/head";

const INITIAL_STATE = {
  logo: "",
  businessName: "",
  address: "",
  about: "",
  experience: "",
  phone: "",
  instagram: "",
  whatsapp: "",
  tiktok: "",
  waze: "",
  workingHours: "",
  services: "",
};

const steps = [
  "Logo",
  "Business Name",
  "Address",
  "About",
  "Experience",
  "Phone & Socials",
  "Working Hours & Services",
  "Preview",
];

export default function Create() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [step, setStep] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        logo: typeof reader.result === "string" ? reader.result : "",
      }));
    };
    reader.readAsDataURL(file);
  };

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  // Handle form submit (before pay)
  const handlePreview = () => {
    localStorage.setItem("cardForm", JSON.stringify(form));
    window.location.href = "/pay";
  };

  // --- Required checks for each step
  const requiredChecks = [
    !!form.logo,                            // Logo required
    form.businessName.trim().length > 0,    // Business Name required
    form.address.trim().length > 0,         // Address required
    form.about.trim().length > 0,           // About required
    form.experience.trim().length > 0,      // Experience required
    form.phone.trim().length > 0,           // Phone required
    form.workingHours.trim().length > 0 && form.services.trim().length > 0 // Both required
  ];

  return (
    <>
      {/* Fonts for Montserrat, Poppins, Inter */}
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:800,700,600|Poppins:400,700,900|Inter:400,700&display=swap" rel="stylesheet" />
      </Head>
      {/* Global Elegant Styles */}
      <style jsx global>{`
        html, body {
          font-family: 'Poppins', 'Montserrat', 'Inter', sans-serif !important;
          background: #111010;
          color: #fff;
        }
        .label, label, .title {
          font-family: 'Montserrat', 'Poppins', sans-serif !important;
          font-weight: 900;
          letter-spacing: 0.02em;
        }
        .input, .textarea {
          font-family: 'Inter', 'Poppins', sans-serif !important;
          font-weight: 600;
          letter-spacing: 0.01em;
        }
        .button {
          font-family: 'Montserrat', 'Poppins', sans-serif !important;
          font-weight: 800;
          letter-spacing: 0.03em;
        }
        .progress.is-info::-webkit-progress-bar {
          background-color: #232323;
          border-radius: 4px;
        }
        .progress.is-info::-webkit-progress-value {
          background: linear-gradient(90deg,#ffb866 0%,#ff8800 99%);
          border-radius: 4px;
          box-shadow: 0 1px 12px #ff950060;
        }
        .progress.is-info {
          background: #232323 !important;
          height: 7px !important;
          border-radius: 4px;
        }
        .input:focus, .textarea:focus, .button:focus {
          outline: none !important;
          box-shadow: 0 0 0 2px #ff980030 !important;
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#181818 70%,#181818 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2.5rem 0",
        }}
      >
        <div
          className="card-glow"
          style={{
            background: "#161616",
            borderRadius: 26,
            boxShadow: "0 9px 44px #ff950040, 0 1.5px 18px #000b, 0 0px 0px #ff880040 inset",
            maxWidth: 440,
            width: "97vw",
            margin: "2rem auto",
            padding: "2.3rem 2rem 1.3rem 2rem",
            border: "1.5px solid #242424",
            position: "relative",
          }}
        >
          <h1
            className="title has-text-centered mb-3"
            style={{
              letterSpacing: 2,
              fontSize: "2.3rem",
              fontWeight: 900,
              color: "#fff",
              textAlign: "center",
              margin: "0 0 1.5rem 0",
              fontFamily: "'Montserrat', 'Poppins', sans-serif",
              textShadow: "0 4px 22px #ff950040",
            }}
          >
            Create Your Card
          </h1>
          <progress
            className="progress is-info mb-5"
            value={step + 1}
            max={steps.length}
            style={{
              height: 7,
              marginBottom: 26,
              boxShadow: "0 2px 6px #ffb86630",
              background: "#232323",
              borderRadius: 6,
            }}
          />
          <div style={{ minHeight: 180 }}>
            {/* Steps */}
            {step === 0 && (
              <FadeIn>
                <label className="label" style={labelStyle}>
                  Upload Logo <span style={{ color: '#ff9800' }}>*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogo}
                  className="input"
                  style={inputStyle}
                />
                {form.logo && (
                  <div className="mt-3" style={{ textAlign: "center" }}>
                    <img
                      src={form.logo}
                      alt="Logo Preview"
                      style={{
                        width: 90,
                        borderRadius: "50%",
                        border: "2.5px solid #ffb866",
                        boxShadow: "0 2px 20px #ffb86680",
                        margin: "0.7rem auto",
                        background: "#fff1e2"
                      }}
                    />
                  </div>
                )}
              </FadeIn>
            )}
            {step === 1 && (
              <FadeIn>
                <label className="label" style={labelStyle}>
                  Business Name <span style={{ color: '#ff9800' }}>*</span>
                </label>
                <input
                  name="businessName"
                  className="input"
                  value={form.businessName}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="e.g. BUSINESS TOGETHER"
                  autoFocus
                />
              </FadeIn>
            )}
            {step === 2 && (
              <FadeIn>
                <label className="label" style={labelStyle}>
                  Address <span style={{ color: '#ff9800' }}>*</span>
                </label>
                <input
                  name="address"
                  className="input"
                  value={form.address}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="e.g. Tel-Aviv, Israel"
                />
              </FadeIn>
            )}
            {step === 3 && (
              <FadeIn>
                <label className="label" style={labelStyle}>
                  About Me <span style={{ color: '#ff9800' }}>*</span>
                </label>
                <textarea
                  name="about"
                  className="textarea"
                  value={form.about}
                  onChange={handleChange}
                  style={{ ...inputStyle, minHeight: 76, resize: "vertical" }}
                  placeholder="Tell us about your business"
                />
              </FadeIn>
            )}
            {step === 4 && (
              <FadeIn>
                <label className="label" style={labelStyle}>
                  Experience <span style={{ color: '#ff9800' }}>*</span>
                </label>
                <input
                  name="experience"
                  className="input"
                  value={form.experience}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Years of experience, specialties"
                />
              </FadeIn>
            )}
            {step === 5 && (
              <FadeIn>
                <label className="label" style={labelStyle}>
                  Phone <span style={{ color: '#ff9800' }}>*</span>
                </label>
                <input
                  name="phone"
                  className="input"
                  value={form.phone}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="e.g. 050-1234567"
                />
                <label className="label mt-3" style={labelStyle}>
                  Instagram (URL)
                </label>
                <input
                  name="instagram"
                  className="input"
                  value={form.instagram}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="https://instagram.com/..."
                />
                <label className="label mt-3" style={labelStyle}>
                  WhatsApp (number only)
                </label>
                <input
                  name="whatsapp"
                  className="input"
                  value={form.whatsapp}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="e.g. 972501234567"
                />
                <label className="label mt-3" style={labelStyle}>
                  TikTok (URL)
                </label>
                <input
                  name="tiktok"
                  className="input"
                  value={form.tiktok}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="https://tiktok.com/@..."
                />
                <label className="label mt-3" style={labelStyle}>
                  Waze (URL)
                </label>
                <input
                  name="waze"
                  className="input"
                  value={form.waze}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="https://waze.com/ul?..."
                />
              </FadeIn>
            )}
            {step === 6 && (
              <FadeIn>
                <label className="label" style={labelStyle}>
                  Working Hours <span style={{ color: '#ff9800' }}>*</span>
                </label>
                <input
                  name="workingHours"
                  className="input"
                  value={form.workingHours}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="e.g. Mon-Sat: 10:00–20:00"
                />
                <label className="label mt-3" style={labelStyle}>
                  Services <span style={{ color: '#ff9800' }}>*</span>
                </label>
                <input
                  name="services"
                  className="input"
                  value={form.services}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="e.g. Service 1 • Service 2 • Service 3"
                />
              </FadeIn>
            )}
            {step === 7 && (
              <FadeIn>
                <label
                  className="label"
                  style={{
                    fontSize: "1.24rem",
                    color: "#ff9800",
                    textAlign: "center",
                    display: "block",
                    fontWeight: 900,
                    letterSpacing: 1.5,
                  }}
                >
                  Preview
                </label>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.81)",
                    borderRadius: 22,
                    boxShadow: "0 8px 32px #ffb86618, 0 2px 12px #0007",
                    padding: "1.6rem 0.8rem 1.2rem 0.8rem",
                    margin: "1.4rem 0 0 0",
                  }}
                >
                  <div style={{ marginBottom: 36 }}>
                    <BusinessCard {...form} />
                  </div>
                </div>
                <p
                  className="help has-text-info mt-4"
                  style={{
                    fontSize: "1.15rem",
                    textAlign: "center",
                    color: "#ff9800",
                    fontFamily: "'Montserrat', 'Poppins', sans-serif"
                  }}
                >
                  🎉🎉🎉<br /> 
                  This is how your card will look!<br />
                  You can go back to edit any step<br /> 
                  or continue to The Last Preview.
                </p>
              </FadeIn>
            )}
          </div>
          {/* Navigation Buttons */}
          <div
            className="buttons is-centered mt-5"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 36,
              gap: 14,
            }}
          >
            <button
              className="button"
              style={{
                background: "#191a1c",
                color: "#ff9800",
                border: "2px solid #ffb86699",
                fontWeight: 700,
                fontSize: "1.07rem",
                padding: "0.7rem 1.6rem",
                borderRadius: 11,
                opacity: step === 0 ? 0.55 : 1,
                pointerEvents: step === 0 ? "none" : "auto",
              }}
              onClick={back}
              disabled={step === 0}
            >
              Back
            </button>
            {step < steps.length - 1 ? (
              <button
                className="button"
                style={{
                  background: "linear-gradient(95deg,#ffb866 0%,#ff8800 99%)",
                  color: "#191919",
                  fontWeight: 900,
                  fontSize: "1.13rem",
                  padding: "0.74rem 1.9rem",
                  borderRadius: 11,
                  border: "none",
                  boxShadow: "0 3px 14px #ffb86644",
                }}
                onClick={next}
                disabled={!requiredChecks[step]}
              >
                Next
              </button>
            ) : (
              <button
                className="button"
                style={{
                  background: "linear-gradient(95deg,#ffb866 0%,#ff8800 99%)",
                  color: "#191919",
                  fontWeight: 900,
                  fontSize: "1.13rem",
                  padding: "0.74rem 1.9rem",
                  borderRadius: 11,
                  border: "none",
                  boxShadow: "0 3px 14px #ffb86644",
                }}
                onClick={handlePreview}
              >
                Preview
              </button>
            )}
          </div>
        </div>
        {/* Animations */}
        <style>{`
          .card-glow { animation: fadein .7s; }
          @keyframes fadein { from { opacity: 0; transform: translateY(32px);} to { opacity: 1; transform: none; } }
        `}</style>
      </div>
    </>
  );
}

// --- Animated fade-in helper ---
function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        animation: "fadein .45s",
      }}
    >
      {children}
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(16px);}
          to   { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}

// --- Elegant modern styles ---
const labelStyle: React.CSSProperties = {
  color: "#ff9800",
  fontWeight: 900,
  fontSize: "1.13rem",
  margin: "0.7rem 0 0.37rem 0",
  fontFamily: "'Montserrat', 'Poppins', sans-serif"
};

const inputStyle: React.CSSProperties = {
  background: "#232323",
  color: "#fff",
  border: "1.5px solid #ffb86680",
  borderRadius: 11,
  fontSize: "1.09rem",
  padding: "0.62rem 1rem",
  marginBottom: "0.6rem",
  boxShadow: "0 1.5px 7px #ffb86633",
  outline: "none",
  fontFamily: "'Inter', 'Poppins', sans-serif"
};

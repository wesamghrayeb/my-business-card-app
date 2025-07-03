import React, { useEffect, useState } from "react";

// Type for your card form
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

// Main Preview Page
export default function Preview() {
  const [form, setForm] = useState<CardForm | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("cardForm");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  // Inline editing
  const handleEdit = (field: keyof CardForm, value: string) => {
    if (!form) return;
    const updated = { ...form, [field]: value };
    setForm(updated);
    localStorage.setItem("cardForm", JSON.stringify(updated));
  };

  if (!form) return <p>Loading...</p>;

  return (
    <div className="container" style={{ maxWidth: 700, margin: "2rem auto" }}>
      <div className="has-text-centered">
        <h2 className="title" style={{ color: "#00ccff" }}>Card Preview</h2>
        <div
          style={{
            display: "inline-block",
            background: "rgba(0,0,0,0.7)",
            borderRadius: "22px",
            boxShadow: "0 8px 32px rgba(0,204,255,0.12), 0 2px 12px rgba(0,0,0,0.26)",
            padding: "1.5rem 2.5rem",
            margin: "1.5rem 0",
            minWidth: 350,
          }}
          data-aos="zoom-in"
        >
          <BusinessCardEditable form={form} onEdit={handleEdit} />
        </div>
        <p className="help has-text-info mt-4" style={{ fontSize: "1.1rem" }}>
          🎉 This is your live card!<br />
          Click any field to edit, or continue to payment.
        </p>
        <button
          className="button is-success mt-4"
          style={{ minWidth: 170 }}
          onClick={() => (window.location.href = "/pay")}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}

// Editable version of your BusinessCard as a subcomponent
function BusinessCardEditable({
  form,
  onEdit,
}: {
  form: CardForm;
  onEdit: (field: keyof CardForm, value: string) => void;
}) {
  const [editing, setEditing] = useState<keyof CardForm | null>(null);
  const [tempValue, setTempValue] = useState<string>("");

  const startEdit = (field: keyof CardForm, value: string) => {
    setEditing(field);
    setTempValue(value);
  };

  const commitEdit = (field: keyof CardForm) => {
    onEdit(field, tempValue);
    setEditing(null);
  };

  return (
    <div>
      {/* Logo */}
      <div id="logo-container">
        <img src={form.logo || "/logo.jpg"} alt="Business Logo" id="logo" />
      </div>
      {/* Business Name */}
      {editing === "businessName" ? (
        <input
          className="input is-large mt-3"
          value={tempValue}
          onChange={e => setTempValue(e.target.value)}
          onBlur={() => commitEdit("businessName")}
          onKeyDown={e => e.key === "Enter" && commitEdit("businessName")}
          autoFocus
        />
      ) : (
        <h1
          className="title is-3 mt-3"
          style={{ cursor: "pointer" }}
          onClick={() => startEdit("businessName", form.businessName)}
          title="Click to edit"
        >
          {form.businessName || "Business Name"}
        </h1>
      )}
      {/* Address */}
      {editing === "address" ? (
        <input
          className="input is-small mt-2"
          value={tempValue}
          onChange={e => setTempValue(e.target.value)}
          onBlur={() => commitEdit("address")}
          onKeyDown={e => e.key === "Enter" && commitEdit("address")}
          autoFocus
        />
      ) : (
        <h2
          className="subtitle is-6"
          style={{ cursor: "pointer" }}
          onClick={() => startEdit("address", form.address)}
          title="Click to edit"
        >
          {form.address || "Address"}
        </h2>
      )}
      {/* Social icons, not editable here */}
      <div className="social-icons mt-3">
        {form.whatsapp && (
          <a href={`https://wa.me/${form.whatsapp}`} target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.png" alt="Whatsapp" />
          </a>
        )}
        {form.instagram && (
          <a href={form.instagram} target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" />
          </a>
        )}
        {form.phone && (
          <a href={`tel:${form.phone}`}>
            <img src="/phone.png" alt="Phone" />
          </a>
        )}
        {form.tiktok && (
          <a href={form.tiktok} target="_blank" rel="noopener noreferrer">
            <img src="/tiktok.png" alt="TikTok" />
          </a>
        )}
        {form.waze && (
          <a href={form.waze} target="_blank" rel="noopener noreferrer">
            <img src="/waze.png" alt="Waze" />
          </a>
        )}
      </div>
      {/* About, Experience, Working Hours, Services */}
      <div className="box has-text-centered mt-4">
        <h3 className="title is-4">About Me</h3>
        {/* About */}
        {editing === "about" ? (
          <textarea
            className="textarea"
            value={tempValue}
            onChange={e => setTempValue(e.target.value)}
            onBlur={() => commitEdit("about")}
            onKeyDown={e => e.key === "Enter" && commitEdit("about")}
            autoFocus
          />
        ) : (
          <p
            className="mb-3"
            style={{ cursor: "pointer" }}
            title="Click to edit"
            onClick={() => startEdit("about", form.about)}
          >
            {form.about || "About..."}
          </p>
        )}

        {/* Experience */}
        {editing === "experience" ? (
          <input
            className="input"
            value={tempValue}
            onChange={e => setTempValue(e.target.value)}
            onBlur={() => commitEdit("experience")}
            onKeyDown={e => e.key === "Enter" && commitEdit("experience")}
            autoFocus
          />
        ) : (
          <p
            className="mb-3"
            style={{ cursor: "pointer" }}
            title="Click to edit"
            onClick={() => startEdit("experience", form.experience)}
          >
            <strong>Experience:</strong> {form.experience}
          </p>
        )}
        {/* Working Hours */}
        {editing === "workingHours" ? (
          <input
            className="input"
            value={tempValue}
            onChange={e => setTempValue(e.target.value)}
            onBlur={() => commitEdit("workingHours")}
            onKeyDown={e => e.key === "Enter" && commitEdit("workingHours")}
            autoFocus
          />
        ) : (
          <p
            style={{ cursor: "pointer" }}
            title="Click to edit"
            onClick={() => startEdit("workingHours", form.workingHours)}
          >
            <strong>Working Hours:</strong> {form.workingHours}
          </p>
        )}
        {/* Services */}
        {editing === "services" ? (
          <input
            className="input"
            value={tempValue}
            onChange={e => setTempValue(e.target.value)}
            onBlur={() => commitEdit("services")}
            onKeyDown={e => e.key === "Enter" && commitEdit("services")}
            autoFocus
          />
        ) : (
          <p
            style={{ cursor: "pointer" }}
            title="Click to edit"
            onClick={() => startEdit("services", form.services)}
          >
            <strong>Services:</strong> {form.services}
          </p>
        )}
      </div>
    </div>
  );
}

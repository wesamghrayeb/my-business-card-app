import React from "react";

const PRICING = [
  {
    name: "Basic Business Digital Card",
    price: "79₪ / mo",
    features: [
      "One-click contact buttons",
      "Social media buttons",
      "Built-in lead form",
      "One-click share buttons",
      "Custom branding",
      "Generate a personal QR code for scanning",
    ],
    accent: "#eed6b4",
  },
  {
    name: "Full Business Digital Card",
    price: "189₪ / mo",
    features: [
      "Click-to-Contact Buttons",
      "Social Media Buttons",
      "Services and About the Business",
      "Luxurious Photo Gallery (up to 20)",
      "Testimonials from Satisfied Customers (up to 5)",
      "Built-in Lead Form",
      "Click-to-Share Buttons",
      "Custom Branding",
      "Generate a Personal QR Code for Scanning",
    ],
    accent: "#eed6b4",
  },
  {
    name: "Full Premium Digital Card",
    price: "399₪ / mo",
    features: [
      "Click-to-Contact Buttons",
      "Social Media Buttons",
      "Services and Business Information",
      "Luxurious Photo Gallery (up to 30)",
      "Testimonials from Satisfied Customers (up to 10)",
      "Built-in Lead Form",
      "Click-to-Share Buttons",
      "Custom Branding",
      "Generate a Personal QR Code for Scanning",
      "Another Open Option to Upgrade (Queue Management)",
    ],
    accent: "#eed6b4",
  },
];

export default function PricingPage() {
  return (
    <div className="pricing-bg">
      <div className="pricing-container">
        <br></br>
        <h1 className="pricing-title">Choose Your Digital Card Package</h1>
        <div className="pricing-grid">
          {PRICING.map((plan, idx) => (
            <div className="pricing-card" key={plan.name}>
              <h2 className="plan-title" style={{ color: plan.accent }}>
                {plan.name}
              </h2>
              <div className="plan-price" style={{ color: plan.accent }}>
                {plan.price}
              </div>
              <ul className="plan-features">
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <ul className="plan-features">
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

            </div>
            
          ))}
        </div>
        <div className="pricing-contact-nav">
          <span>For more info reach me out</span>
          <div className="arrow-down"></div>
        </div>
      </div>
      <style jsx>{`
      .pricing-contact-nav {
  margin: 2.5rem auto 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.28rem;
  font-weight: 900;
  color: #eed6b4;
  letter-spacing: 0.02em;
  text-shadow: 0 1px 10px #eed6b460;
  user-select: none;
  position: relative;
  z-index: 2;
  animation: navfadein 1.1s cubic-bezier(0.23, 1, 0.32, 1);
}
.arrow-down {
  width: 0; 
  height: 0; 
  border-left: 22px solid transparent;
  border-right: 22px solid transparent;
  border-top: 26px solid #eed6b4;
  margin-top: 0.6rem;
  filter: drop-shadow(0 8px 18px #eed6b477);
  animation: bounce 1.5s infinite alternate;
}
@keyframes bounce {
  from { transform: translateY(0); }
  to   { transform: translateY(18px); }
}
@keyframes navfadein {
  from { opacity: 0; transform: translateY(32px);}
  to   { opacity: 1; transform: none; }
}
        .pricing-bg {
          min-height: 100vh;
          width: 100vw;
          background: radial-gradient(circle at 70% 20%, #00ccff22 0%, #191b21 60%, #131415 100%);
          padding: 0;
        }
        .pricing-container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 3rem 1rem 3rem 1rem;
        }
        .pricing-title {
          text-align: center;
          font-size: 2.4rem;
          font-weight: 900;
          color:#eed6b4;
          margin-bottom: 3.1rem;
          letter-spacing: 1px;
          text-shadow: 0 2px 20px #00ccff33;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.2rem;
        }
        .pricing-card {
          background: #181b22;
          border-radius: 18px;
          box-shadow: 0 2px 32px #00ccff19, 0 1.5px 8px #0008;
          padding: 2.3rem 1.7rem 2.2rem 1.7rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.15s, box-shadow 0.15s;
          border: 2.7px solid #232a34;
          position: relative;
        }
        .pricing-card:hover {
          transform: translateY(-7px) scale(1.025);
          box-shadow: 0 10px 36px #00ccff44, 0 3px 16px #000a;
        }
        .plan-title {
          font-size: 1.34rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 0.5rem;
          letter-spacing: 0.04em;
        }
        .plan-price {
          font-size: 2.2rem;
          font-weight: 900;
          margin-bottom: 1.1rem;
          text-shadow: 0 2px 22px #00ccff1c;
        }
        .plan-features {
          list-style: none;
          padding: 0;
          margin: 0;
          margin-bottom: 0.4rem;
          width: 100%;
        }
        .plan-features li {
          color: #ff950088;
          font-size: 1.08rem;
          margin-bottom: 0.47rem;
          padding-left: 1.2em;
          position: relative;
        }
        .plan-features li::before {
          content: '✓';
          color: #ff950088;
          font-weight: bold;
          margin-right: 0.7em;
          position: absolute;
          left: 0;
        }
        @media (max-width: 700px) {
          .pricing-title { font-size: 1.28rem; margin-bottom: 2rem; }
          .pricing-card { padding: 1.4rem 0.6rem 1.4rem 0.6rem; }
          .plan-title { font-size: 1.1rem; }
          .plan-price { font-size: 1.42rem; }
          .plan-features li { font-size: 0.97rem; }
        }
      `}</style>
    </div>
  );
}

import { useRouter } from "next/router";
import BusinessCard from "../components/BusinessCard";

export default function CardPage() {
  const router = useRouter();
  const { cardId } = router.query;

  // TODO: fetch the actual card data by cardId (MVP: show placeholder)
  // Later you can use getServerSideProps or fetch from DB here

  return (
    <div style={{ marginTop: "4rem" }}>
      <h2 className="title has-text-centered">Business Card for: {cardId}</h2>
      <div className="box has-text-centered" style={{ maxWidth: 400, margin: "2rem auto" }}>
        <p>This page will show the public card for <b>{cardId}</b> after payment!</p>
      </div>
    </div>
  );
}

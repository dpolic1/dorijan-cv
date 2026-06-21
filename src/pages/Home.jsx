export default function Home({ onNext }) {
  return (
    <div className="slide">
      <h1>Dorijan CV</h1>

      <p style={{ marginTop: 12, opacity: 0.7, maxWidth: 280 }}>
        A mobile-first interactive CV presented as a simple slide experience.
      </p>

      <button className="bottom-button" onClick={onNext}>
        Next →
      </button>
    </div>
  );
}
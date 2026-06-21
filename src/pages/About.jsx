export default function About({ onNext, onPrev }) {
  return (
    <div className="slide">
      <h2>About Me</h2>

      <p style={{ maxWidth: 320, opacity: 0.8, marginTop: 12 }}>
        I’m Dorijan, a developer focused on building clean, responsive web apps.
        I enjoy React, UI design, and turning ideas into interactive experiences.
      </p>

      <div className="bottom-buttons">
        <button onClick={onPrev}>← Previous</button>
        <button onClick={onNext}>Next →</button>
      </div>
    </div>
  );
}
export default function Skills({ onNext, onPrev }) {
  return (
    <div className="slide">
      <h2>Skills</h2>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 16 }}>
        <li>⚛️ React / Vite</li>
        <li>🌐 HTML / CSS / JavaScript</li>
        <li>🎨 UI Design basics</li>
        <li>⚙️ Git & GitHub Pages</li>
      </ul>

      <div className="bottom-buttons">
        <button onClick={onPrev}>← Previous</button>
        <button onClick={onNext}>Next →</button>
      </div>
    </div>
  );
}
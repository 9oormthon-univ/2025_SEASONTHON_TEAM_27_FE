import "../styles/ArchiveMail.css";

export default function ArchiveMail({ onClose }) {

  return (
    <div className="archive-mail-container">
      <div className="archive-mail-content">
        <h2>Archive Mail</h2>
        <p>This is a placeholder for the Archive Mail component.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
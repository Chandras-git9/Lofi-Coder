import { useState, useEffect, useRef } from 'react';
import './App.css';
import MoodSelector from './components/MoodSelector';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function App() {
  const [currentMood, setCurrentMood] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);
  const defaultAudioRef = useRef(null); // ref for default bg music

  // Auto play mood song when mood or song changes
  useEffect(() => {
    if (currentMood && audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentMood, currentSongIndex]);

  // Remove muted on first user interaction so default music can play
  useEffect(() => {
    const handleUserInteraction = () => {
      if (defaultAudioRef.current) {
        defaultAudioRef.current.muted = false;
        defaultAudioRef.current.play();
      }
      window.removeEventListener('click', handleUserInteraction);
    };
    window.addEventListener('click', handleUserInteraction);
    return () => window.removeEventListener('click', handleUserInteraction);
  }, []);

  const handleMoodChange = (mood, songIndex = 0) => {
    setCurrentMood(mood);
    setCurrentSongIndex(songIndex);
  };

  const handleNext = () => {
    if (!currentMood) return;
    setCurrentSongIndex((prev) => (prev + 1) % currentMood.songs.length);
  };

  const handlePrev = () => {
    if (!currentMood) return;
    setCurrentSongIndex((prev) =>
      prev === 0 ? currentMood.songs.length - 1 : prev - 1
    );
  };

  const handleRepeat = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div
      className="app"
      style={{ backgroundColor: currentMood ? currentMood.color : "#f1f3f5" }}
    >
      {/* Default background music */}
      <audio
        ref={defaultAudioRef}
        src="/default.mp3"
        autoPlay
        loop
        muted // start muted so browsers allow autoplay
      />

      {/* Nav bar */}
      <header className="navbar">
        <div className="logo">
          <video
            src="/logo video/lofi coder.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ height: "100px", borderRadius: "5px" }}
          />
        </div>
        <h1 className="title">🎵 Lofi Coder 🎧</h1>
      </header>

      <MoodSelector onMoodChange={handleMoodChange} />

      {currentMood && (
        <>
          <p className="message">{currentMood.message}</p>
          <img
            src={currentMood.songs[currentSongIndex].image}
            alt="cover"
            style={{
              width: "200px",
              borderRadius: "10px",
              marginTop: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
            }}
          />
          <p style={{ color: "#fff", marginTop: "10px" }}>
            🎶 {currentMood.songs[currentSongIndex].title}
          </p>
          <audio ref={audioRef} controls style={{ marginTop: "10px" }} autoPlay>
            <source
              src={currentMood.songs[currentSongIndex].audio}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
          <div className="player-controls">
            <button onClick={handlePrev}>⏮ Prev</button>
            <button onClick={handleRepeat}>🔁 Repeat</button>
            <button onClick={handleNext}>⏭ Next</button>
          </div>
        </>
      )}

      <footer
        id="contact"
        style={{ marginTop: "40px", color: "#555", fontSize: "0.9rem" }}
      >
        <div>© 2025 Chandra Sekhar</div>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            gap: "15px"
          }}
        >
          <a
            href="https://www.linkedin.com/in/chandra9348/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#555",
              textDecoration: "none",
              display: "flex",
              alignItems: "center"
            }}
          >
            <FaLinkedin size={20} style={{ marginRight: "5px" }} /> LinkedIn
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?next=%2Fheys.chandra%2F%2522%2F&source=omni_redirect"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#555",
              textDecoration: "none",
              display: "flex",
              alignItems: "center"
            }}
          >
            <FaInstagram size={20} style={{ marginRight: "5px" }} /> Instagram
          </a>
          <a
            href="https://github.com/Chandras-git9"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#555",
              textDecoration: "none",
              display: "flex",
              alignItems: "center"
            }}
          >
            <FaGithub size={20} style={{ marginRight: "5px" }} /> GitHub
          </a>
        </div>
        <div style={{ marginTop: "10px" }}>
          Contact:{" "}
          <a
            href="mailto:chandrasekharkhatua234@gmail.com"
            style={{ color: "#555" }}
          >
            chandrasekharkhatua234@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

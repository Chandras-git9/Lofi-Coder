import React, { useState } from "react";

const moods = [
  {
    name: "Happy",
    color: "#ffe066",
    message: "You look happy!",
    songs: [
      { title: "Adayein Teri", audio: "/songs/HAPPY/Adayein Teri The Royals 320 Kbps.mp3", image: "/images/happy1.jpg" },
      { title: "Afreen", audio: "/songs/HAPPY/Afreen Rajvir Jawanda 320 Kbps.mp3", image: "/images/happy2.jpg" },
      { title: "Badtameez Dil", audio: "/songs/HAPPY/Badtameez Dil Yeh Jawaani Hai Deewani 128 Kbps.mp3", image: "/images/happy3.jpg" },
      { title: "Balam Pichkari", audio: "/songs/HAPPY/Balam Pichkari Yeh Jawaani Hai Deewani 128 Kbps.mp3", image: "/images/happy3.jpg" },
      { title: "Bom Diggy Diggy", audio: "/songs/HAPPY/Bom Diggy Diggy Sonu Ke Titu Ki Sweety 320 Kbps.mp3", image: "/images/happy3.jpg" },
      { title: "Dil Deewana", audio: "/songs/HAPPY/Dil Deewana The Royals 128 Kbps.mp3", image: "/images/happy3.jpg" },
      { title: "Fevicol Se", audio: "/songs/HAPPY/Fevicol Se Dabangg 2 128 Kbps.mp3", image: "/images/happy3.jpg" },
      { title: "Hua Main", audio: "/songs/HAPPY/Hua Main Animal 320 Kbps.mp3", image: "/images/happy3.jpg" },
      { title: "Khadke Glassy", audio: "songs/HAPPY/Khadke Glassy Jabariya Jodi 320 Kbps.mp3", image: "/images/happy3.jpg" },
      { title: "Love Mera Hit Hit", audio: "/songs/HAPPY/Love Mera Hit Hit Billu Barber 128 Kbps.mp3", image: "/images/happy3.jpg" },
      { title: "O Saki Saki", audio: "/songs/HAPPY/O Saki Saki Batla House 320 Kbps.mp3", image: "/images/happy3.jpg" },
      { title: "Pehle Bhi Main", audio: "/songs/HAPPY/Pehle Bhi Main Animal 128 Kbps.mp3", image: "/images/happy3.jpg" },
      { title: "Satranga Stripped", audio: "/songs/HAPPY/Satranga Stripped Animal 128 Kbps.mp3", image: "/images/happy3.jpg" },
      { title: "Subha Hone Na De (remix)", audio: "/songs/HAPPY/Subha Hone Na De (remix) Dishoom 128 Kbps.mp3", image: "/images/happy3.jpg" },
      { title: "Tooh", audio: "/songs/HAPPY/Tooh Gori Tere Pyaar Mein 320 Kbps.mp3", image: "/images/happy3.jpg" },

    ],
  },
  {
    name: "Sad",
    color: "#74c0fc",
    message: "It's totally ok to feel sad!",
    songs: [
      { title: "Baitha Reh", audio: "/songs/Baitha Reh Prabh Gill 320 Kbps.mp3", image: "/images/sad1.jpg" },
      { title: "Barbaad Saiyaara", audio: "/songs/Barbaad Saiyaara 128 Kbps.mp3", image: "/images/sad2.jpg" },
      { title: "Bekhayali", audio: "/songs/Bekhayali Kabir Singh 128 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Bewajah", audio: "/songs/Bewajah Sanam Teri Kasam 128 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Bulleya", audio: "/songs/Bulleya Ae Dil Hai Mushkil 128 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Channa Mereya", audio: "/songs/Channa Mereya Ae Dil Hai Mushkil 320 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Daayre", audio: "/songs/Daayre Dilwale 320 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Galliyan", audio: "/songs/Galliyan Ek Villain 128 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Hasi Female Version", audio: "/songs/Hasi Female Version Hamari Adhuri Kahani Original Motion Picturetrack 128 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Humnava", audio: "/songs/Humnava Hamari Adhuri Kahani Original Motion Picturetrack 128 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Judaai", audio: "/songs/Judaai Badlapur 128 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Kabira", audio: "/songs/Kabira Yeh Jawaani Hai Deewani 128 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Maye Ni", audio: "/songs/Maye Ni Raman Romana 128 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "O Bedardeya ", audio: "/songs/O Bedardeya Tu Jhoothi Main Makkaar 320 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Phir Bhi Tumko Chaahunga", audio: "/songs/Phir Bhi Tumko Chaahunga Half Girlfriend 128 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Pyaar Toh Tha", audio: "/songs/Pyaar Toh Tha Bala 320 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Raanjhan", audio: "/songs/Raanjhan Do Patti 128 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Tu Hi Hai Aashiqui", audio: "/songs/Tu Hi Hai Aashiqui Male Dishkiyaoon 128 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Tujhe Bhula Diya", audio: "/songs/Tujhe Bhula Diya Remix The Dance To Forget Mix Teri Yaadon Anjaana Anjaani 128 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Yeh Dooriyan", audio: "/songs/Yeh Dooriyan Love Aaj Kal 128 Kbps.mp3", image: "/images/sad3.jpg" },
      { title: "Zaroori Tha 2", audio: "/songs/Zaroori Tha 2 Rahat Fateh Ali Khan 320 Kbps.mp3", image: "/images/sad3.jpg" },


    ],
  },
  {
    name: "Lofi",
    color: "#dda0dd",
    message: "Take a deep breath",
    songs: [
      { title: "1AM Study lofi", audio: "/songs/lofi/1AM Study lofi (1).mp4"},
      { title: "90's Lofi", audio: "/songs/lofi/90's Lofi.mp4"},
      { title: "Bollywood lofi", audio: "/songs/lofi/Bollywood lofi.mp4"},
      { title: "Classic lofi", audio: "/songs/lofi/Classic lofi.mp4"},
      { title: "hindi romantic lofi", audio: "/songs/lofi/hindi romantic lofi.mp4"},
      { title: "Latest Song Lofi", audio: "/songs/lofi/Latest Song Lofi.mp4"},
      { title: "Mind refreshing lofi", audio: "/songs/lofi/Mind refreshing lofi.mp4"},
      { title: "Mind Relaxing lofi", audio: "/songs/lofi/Mind Relaxing lofi.mp4"},
      { title: "Night Lofi", audio: "/songs/lofi/Night Lofi.mp3"},
      { title: "Weekend lofi", audio: "/songs/lofi/Weekend lofi.mp4"}
    ],
  },
  {
    name: "relaxed",
    color: "#b2febb",
    message: "Go code and listen",
    songs: [
      { title: "Adayein Teri", audio: "/songs/Relaxed/Adayein Teri The Royals 320 Kbps.mp3"},
      { title: "Afreen", audio: "/songs/Relaxed/Afreen Rajvir Jawanda 320 Kbps.mp3"},
      { title: "Aur Ho ", audio: "/songs/Relaxed/Aur Ho Rockstar 128 Kbps.mp3"},
      { title: "Badtameez Dil", audio: "/songs/Relaxed/Badtameez Dil Yeh Jawaani Hai Deewani 128 Kbps.mp3"},
      { title: "Balam Pichkari", audio: "/songs/Relaxed/Balam Pichkari Yeh Jawaani Hai Deewani 128 Kbps.mp3"},
      { title: "Baliye Re ", audio: "/songs/Relaxed/Baliye Re Jersey 128 Kbps.mp3"},
      { title: "Bom Diggy Diggy ", audio: "/songs/Relaxed/Bom Diggy Diggy Sonu Ke Titu Ki Sweety 320 Kbps.mp3"},
      { title: "Channa Ve ", audio: "/songs/Relaxed/Channa Ve Bhoot Part One_ The Haunted Ship 128 Kbps.mp3"},
      { title: "Chashni", audio: "/songs/Relaxed/Chashni Bharat 128 Kbps.mp3"},
      { title: "Dil Deewana", audio: "/songs/Relaxed/Dil Deewana The Royals 128 Kbps.mp3"},
      { title: "Dil Jhoom ", audio: "/songs/Relaxed/Dil Jhoom  Gadar 2 128 Kbps.mp3"},
      { title: "Fevicol Se", audio: "/songs/Relaxed/Fevicol Se Dabangg 2 128 Kbps.mp3"},
      { title: "Hua Main ", audio: "/songs/Relaxed/Hua Main Animal 320 Kbps.mp3"},
      { title: "Jaan Ban Gaye", audio: "/songs/Relaxed/Jaan Ban Gaye Reprise Khuda Haafiz 320 Kbps.mp3"},
      { title: "Jhol", audio: "/songs/Relaxed/Jhol Acoustic Maanu 128 Kbps.mp3"},
      { title: "Khadke Glassy", audio: "/songs/Relaxed/Khadke Glassy Jabariya Jodi 320 Kbps.mp3"},
      { title: "Kya Mujhe Pyaar Hai ", audio: "/public/songs/Relaxed/Kya Mujhe Pyaar Hai Woh Lamhe 128 Kbps.mp3"},
      { title: "Labon Ko", audio: "/songs/Relaxed/Labon Ko Bhool Bhulaiyaa 128 Kbps.mp3"},
      { title: "Relaxed/Love Mera Hit Hit", audio: "/songs/Relaxed/Love Mera Hit Hit Billu Barber 128 Kbps.mp3"},
      { title: "Mera Pyar Tera Pyar", audio: "/songs/Relaxed/Mera Pyar Tera Pyar Jalebi 320 Kbps.mp3"},
      { title: "Naina Da Kya Kasoor", audio: "/songs/Relaxed/Naina Da Kya Kasoor Andhadhun 128 Kbps.mp3"},
      { title: "Naiyo Lagda", audio: "/songs/Relaxed/Naiyo Lagda Kisi Ka Bhai Kisi Ki Jaan 320 Kbps.mp3"},
      { title: "RNazm Nazm", audio: "/songs/Relaxed/Nazm Nazm Bareilly Ki Barfi 320 Kbps.mp3"},
      { title: "O Saathi", audio: "/songs/Relaxed/O Saathi Baaghi 2 128 Kbps.mp3"},
      { title: "O Saki Saki", audio: "/songs/Relaxed/O Saki Saki Batla House 320 Kbps.mp3"},
      { title: "Pal", audio: "/songs/Relaxed/Pal Jalebi 320 Kbps.mp3"},
      { title: "Paniyon Sa", audio: "/songs/Relaxed/Paniyon Sa Satyameva Jayate 128 Kbps.mp3"},
      { title: "Pehle Bhi Main ", audio: "/songs/Relaxed/Pehle Bhi Main Animal 128 Kbps.mp3"},
      { title: "Satranga", audio: "/songs/Relaxed/Satranga Stripped Animal 128 Kbps.mp3"},
      { title: "Saware", audio: "/songs/Relaxed/Saware Phantom 320 Kbps.mp3"},
      { title: "Shayad", audio: "/songs/Relaxed/Shayad Love Aaj Kal 128 Kbps.mp3"},
      { title: "Subha Hone Na De", audio: "/songs/Relaxed/Subha Hone Na De (remix) Dishoom 128 Kbps.mp3"},
      { title: "Tooh", audio: "/songs/Relaxed/Tooh Gori Tere Pyaar Mein 320 Kbps.mp3"},
      { title: "Tum Se ", audio: "/songs/Relaxed/Tum Se Teri Baaton Mein Aisa Uljha Jiya 320 Kbps.mp3"},
      { title: "Ve Maahi ", audio: "/songs/Relaxed/Ve Maahi Kesari 320 Kbps.mp3"},
      { title: "Zaalima", audio: "/songs/Relaxed/Zaalima Raees 128 Kbps.mp3"},


    ],
  }
];

const MoodSelector = ({ onMoodChange }) => {
  const [expandedMood, setExpandedMood] = useState(null);

  const handleMoodClick = (moodName) => {
    setExpandedMood(expandedMood === moodName ? null : moodName);
  };

  return (
    <div className="mood-buttons">
      {moods.map((mood) => (
        <div key={mood.name} style={{ marginBottom: "10px" }}>
          <button
            style={{
              backgroundColor: mood.color,
              margin: "5px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
            onClick={() => handleMoodClick(mood.name)}
          >
            {mood.name}
          </button>

          {expandedMood === mood.name && (
            <div className="playlist" style={{ marginTop: "5px" }}>
              {mood.songs.map((song, index) => (
                <button
                  key={index}
                  style={{
                    display: "block",
                    width: "100%",
                    marginTop: "5px",
                    padding: "6px 10px",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "#333",
                    border: "none",
                    borderRadius: "3px",
                    textAlign: "left",
                    cursor: "pointer"
                  }}
                  onClick={() => onMoodChange(mood, index)}
                >
                  {song.title}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MoodSelector;












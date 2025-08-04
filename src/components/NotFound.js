// import React, { useEffect, useState } from 'react';
// import './style.css';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// export default function NotFound() {
//   const navigate = useNavigate();
//   const [quote, setQuote] = useState(null);
//   const [playTitle, setPlayTitle] = useState(null);
// const playDataMap = {
//   AWW: { title: "All's Well That Ends Well", maxFTLN: 3000 },
//   Ant: { title: "Antony and Cleopatra", maxFTLN: 3700 },
//   AYL: { title: "As You Like It", maxFTLN: 2800 },
//   Err: { title: "The Comedy of Errors", maxFTLN: 1800 },
//   Cor: { title: "Coriolanus", maxFTLN: 3800 },
//   Cym: { title: "Cymbeline", maxFTLN: 3700 },
//   Ham: { title: "Hamlet", maxFTLN: 3900 },
//   "1H4": { title: "Henry IV, Part 1", maxFTLN: 3300 },
//   "2H4": { title: "Henry IV, Part 2", maxFTLN: 3700 },
//   H5: { title: "Henry V", maxFTLN: 3500 },
//   "1H6": { title: "Henry VI, Part 1", maxFTLN: 3300 },
//   "2H6": { title: "Henry VI, Part 2", maxFTLN: 3300 },
//   "3H6": { title: "Henry VI, Part 3", maxFTLN: 3300 },
//   H8: { title: "Henry VIII", maxFTLN: 3100 },
//   JC: { title: "Julius Caesar", maxFTLN: 2800 },
//   Jn: { title: "King John", maxFTLN: 2800 },
//   Lr: { title: "King Lear", maxFTLN: 3400 },
//   LLL: { title: "Love's Labor's Lost", maxFTLN: 2900 },
//   Mac: { title: "Macbeth", maxFTLN: 2800 },
//   MM: { title: "Measure for Measure", maxFTLN: 3100 },
//   MV: { title: "The Merchant of Venice", maxFTLN: 2600 },
//   Wiv: { title: "The Merry Wives of Windsor", maxFTLN: 3000 },
//   MND: { title: "A Midsummer Night's Dream", maxFTLN: 2200 },
//   Ado: { title: "Much Ado About Nothing", maxFTLN: 2800 },
//   Oth: { title: "Othello", maxFTLN: 3600 },
//   Per: { title: "Pericles", maxFTLN: 3400 },
//   R2: { title: "Richard II", maxFTLN: 3100 },
//   R3: { title: "Richard III", maxFTLN: 3600 },
//   Rom: { title: "Romeo and Juliet", maxFTLN: 3300 },
//   Shr: { title: "The Taming of the Shrew", maxFTLN: 2600 },
//   Tmp: { title: "The Tempest", maxFTLN: 2400 },
//   Tim: { title: "Timon of Athens", maxFTLN: 3100 },
//   Tit: { title: "Titus Andronicus", maxFTLN: 3300 },
//   Tro: { title: "Troilus and Cressida", maxFTLN: 3900 },
//   TN: { title: "Twelfth Night", maxFTLN: 2700 },
//   TGV: { title: "Two Gentlemen of Verona", maxFTLN: 2500 },
//   TNK: { title: "Two Noble Kinsmen", maxFTLN: 2900 },
//   WT: { title: "The Winter's Tale", maxFTLN: 3400 }
// };

// function getRandomShakespeareLineInfo() {
//   const keys = Object.keys(playDataMap);
//   const randomPlayCode = keys[Math.floor(Math.random() * keys.length)];
//   const playData = playDataMap[randomPlayCode];
//   const randomFTLN = Math.floor(Math.random() * playData.maxFTLN) + 1;

//   const url = `https://www.folgerdigitaltexts.org/${randomPlayCode}/ftln/${randomFTLN}`;

//   return {
//     playCode: randomPlayCode,
//     playTitle: playData.title,
//     ftln: randomFTLN,
//     url,
//   };
// }



// useEffect(() => {
//   const { playCode, playTitle, ftln, url } = getRandomShakespeareLineInfo();

//   fetch(url)
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }
//       return res.text();
//     })
//     .then((html) => {
//       const parser = new DOMParser();
//       const doc = parser.parseFromString(html, "text/html");
//       const lineLinks = doc.querySelectorAll("a");

//       if (!lineLinks || lineLinks.length === 0) {
//         setQuote({
//           text: "No <a> tags found in response.",
//           play: playTitle
//         });
//         setPlayTitle(playTitle);

//         return;
//       }

//       const cleanText = Array.from(lineLinks)
//         .map((a) => a.textContent)
//         .join("")
//         .trim();

//       if (!cleanText) {
//         setQuote({
//           text: "Found <a> tags, but they had no text content.",
//           play: playTitle
//         });
//         setPlayTitle(playTitle);
//         return;
//       }

//       setQuote({ text: cleanText, play: playTitle });
//     })
//     .catch((err) => {
//       console.error("Fetch error:", err);
//       setQuote({
//         text: `Fetch error: ${err.message}`,
//         play: playTitle
//       });
//       setPlayTitle(playTitle);

//     });
// }, []);






//   return (
//     <div className="home-page-wrapper">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -20 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//       >
//         <div className="home-screen">
//           <div className="titleText">
//             <br /><br /><br /><br />
//             <h2><b>404: Page Not Found</b></h2>
//             <section className="project-section">
//               <p className="lost">
//                 The page you're looking for doesn't exist or has been moved. Here's a random line from Shakespeare's {playTitle}:
//               </p>
//               {quote && (
//   <div className="shakespeare-quote">
//     <p className="lost" style={{ fontStyle: 'italic' }}>
//       “{quote.text}”
//     </p>
//     {/* {playTitle && (
//       <p className="quote-caption">
//         — from <em>{playTitle}</em>
//       </p>
//     )} */}
//   </div>
// )}
//             </section>
//             <br /><br />
//             <button
//               className="start-button"
//               onClick={() => navigate('/home')}
//             >
//               <b>Return to Home</b>
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import './style.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  const [fact, setFact] = useState(null);

  useEffect(() => {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
      .then((res) => res.json())
      .then((data) => setFact(data.text))
      .catch((err) => console.error('Error fetching useless fact:', err));
  }, []);

  return (
    <div className="home-page-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="home-screen">
          <div className="titleText">
            <br /><br /><br /><br />
            <h2><b>404: Page Not Found</b></h2>
            <section className="project-section">
              <p className="lost">
                The page you're looking for doesn't exist or has been moved.<br></br>
                Here's a <u>possibly</u> true useless fact to make up for it:
              </p>
              {fact && (
                <div className="useless-fact">
                  <p className="lost" style={{ fontStyle: 'italic' }}>
                    {fact}
                  </p>
                </div>
              )}
            </section>
            <br /><br />
            <button
              className="start-button"
              onClick={() => navigate('/')}
            >
              <b>Return to Home</b>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

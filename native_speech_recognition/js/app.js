window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'fr_FR';
  
  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')

      p.textContent = transcript;
      if (e.resulsts[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }

      if(transcript.includes('cactus')) {
        console.log(🌵🌵🌵🌵🌵🌵🌵🌵🌵🌵🌵🌵🌵🌵🌵🌵);
      }
  });

recognitionition.addEventListener('end', recognition.start); // Pour lui dire que quand on arrete de parler, tu te remets à couter. Sinon il écoute 1 fois et stop
recognition.start();
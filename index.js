
const speak = (msg) => {
    const sp = new SpeechSynthesisUtterance(msg);
    [sp.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(sp);
    
};

speak ("My name is Sonia Atsen," + 
    "I am software developer, "
    + " I Love what i do!");


console.log(speak);


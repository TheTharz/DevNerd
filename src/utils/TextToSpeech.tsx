import { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa'; // Import icons from React Icons

interface TextToSpeechProps {
  text: string;
}

const TextToSpeech = ({ text }: TextToSpeechProps) => {
  const [isPaused, setIsPaused] = useState(true);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null
  );
  const [selectedVoice, setSelectedVoice] =
    useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    console.log(voices);

    setUtterance(u);
    setSelectedVoice(voices[0]); // Set default voice

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    }

    if (utterance) {
      synth.speak(utterance);
    }

    if (utterance) {
      utterance.voice = selectedVoice; // Set selected voice
      synth.speak(utterance);
    }

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(true);
  };

  const handleChangeVoice = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVoiceIndex = parseInt(event.target.value, 10);
    const voices = window.speechSynthesis.getVoices();
    setSelectedVoice(voices[selectedVoiceIndex]);
  };

  return (
    <div className='fixed left-4 md:left-auto md:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center space-y-2'>
      <div>
        <select
          className='text-white bg-gray-900 px-4 py-2 rounded-full flex-shrink-0'
          onChange={handleChangeVoice}
        >
          {window.speechSynthesis.getVoices().map((voice, index) => (
            <option key={index} value={index}>
              {voice.name.slice(10, 15)}
            </option>
          ))}
        </select>
      </div>
      {isPaused ? (
        <button
          className='text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full flex items-center justify-center'
          onClick={handlePlay}
        >
          <FaPlay size={18} />
        </button>
      ) : (
        <button
          className='text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-full flex items-center justify-center'
          onClick={handlePause}
        >
          <FaPause size={18} />
        </button>
      )}
      <button
        className='text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full flex items-center justify-center'
        onClick={handleStop}
      >
        <FaStop size={18} />
      </button>
    </div>
  );
};

export default TextToSpeech;

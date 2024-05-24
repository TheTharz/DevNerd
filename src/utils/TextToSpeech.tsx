import { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa'; // Import icons from React Icons

interface TextToSpeechProps {
  text: string;
}

const TextToSpeech = ({ text }: TextToSpeechProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null
  );

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);

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

  return (
    <div className='flex space-x-2'>
      {isPaused ? (
        <button
          className='text-white bg-black px-4 py-2 rounded'
          onClick={handlePlay}
        >
          {isPaused ? <FaPlay size={18} /> : <FaPlay size={18} />}
        </button>
      ) : (
        <button
          className='text-white bg-black px-4 py-2 rounded '
          onClick={handlePause}
        >
          <FaPause size={18} />
        </button>
      )}
      <button
        className='text-white bg-black px-4 py-2 rounded '
        onClick={handleStop}
      >
        <FaStop size={18} />
      </button>
    </div>
  );
};

export default TextToSpeech;

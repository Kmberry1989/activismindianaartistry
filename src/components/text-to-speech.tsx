'use client';

import * as React from 'react';
import { Volume2, BookOpen, Square } from 'lucide-react'; // Megaphone alternative
import { Button } from '@/components/ui/button';

interface TextToSpeechProps {
  text: string;
  label?: string;
}

export function TextToSpeech({ text, label = "Listen" }: TextToSpeechProps) {
  const [isSpeaking, setIsSpeaking] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const utteranceRef = React.useRef<SpeechSynthesisUtterance | null>(null);

  React.useEffect(() => {
    // Clean up on unmount
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) {
      alert("Sorry, your browser doesn't support text-to-speech.");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleSpeak}
      className="gap-2 transition-all active:scale-95"
      aria-label={isSpeaking ? "Stop reading" : "Read text aloud"}
    >
      {isSpeaking ? (
        <>
          <Square className="h-4 w-4 fill-current" />
          Stop Reading
        </>
      ) : (
        <>
          <BookOpen className="h-4 w-4" />
          {label}
        </>
      )}
    </Button>
  );
}
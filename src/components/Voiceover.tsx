import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const KEY = "ig_voice_played_v1";

export function Voiceover() {
  const { t } = useI18n();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let played = false;
    try { played = localStorage.getItem(KEY) === "1"; } catch {}
    if (played) return;
    setVisible(true);
    const audio = new Audio("./audio/intro.mp3");
    audio.volume = 0.55;
    audioRef.current = audio;

    const tryPlay = async () => {
      try {
        await audio.play();
        setPlaying(true);
        try { localStorage.setItem(KEY, "1"); } catch {}
      } catch {
        // Autoplay blocked — wait for first user gesture
        const onGesture = async () => {
          try {
            await audio.play();
            setPlaying(true);
            try { localStorage.setItem(KEY, "1"); } catch {}
          } catch {}
          window.removeEventListener("pointerdown", onGesture);
          window.removeEventListener("keydown", onGesture);
        };
        window.addEventListener("pointerdown", onGesture, { once: true });
        window.addEventListener("keydown", onGesture, { once: true });
      }
    };
    tryPlay();

    audio.addEventListener("ended", () => {
      setPlaying(false);
      setTimeout(() => setVisible(false), 800);
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  if (!visible) return null;

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
      setVisible(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-24 right-4 z-30 flex items-center gap-2.5 rounded-full bg-[color:var(--ink)] py-2.5 pl-3 pr-4 text-xs font-semibold text-white shadow-2xl hover:scale-105 transition"
      aria-label={playing ? t("voice.mute") : t("voice.play")}
    >
      <span className={`relative flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--gold)] text-[color:var(--ink)] ${playing ? "pulse-ring" : ""}`}>
        {playing ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
      </span>
      <span className="hidden sm:inline">{playing ? t("voice.hint") : t("voice.play")}</span>
    </button>
  );
}

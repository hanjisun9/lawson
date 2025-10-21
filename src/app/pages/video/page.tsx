"use client";
import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react"; 

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="flex justify-center px-4 -mt-[110px] relative">
      <div className="w-full max-w-[1600px] rounded-[50px] shadow-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls
        >
          <source src="/video.mp4" type="video/mp4" />
          Browser kamu tidak mendukung video.
        </video>

        {/* Tombol Mute/Unmute */}
         <button
          onClick={toggleMute}
          className="mr-25 absolute bottom-6 right-6 w-15 h-15 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition"
        >
          {isMuted ? (
            <VolumeX className="text-white w-6 h-6" />
          ) : (
            <Volume2 className="text-white w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}

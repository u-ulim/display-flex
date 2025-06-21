"use client";
import { X, Play, Volume2, VolumeX, Heart } from "lucide-react";

import { ITrailerModalProps } from "./trailerModal.type";
import Image from "next/image";
import { Button } from "@/app/components/button";
import { useState } from "react";
import { Modal } from "../common";

// YouTube URL에서 비디오 ID 추출 함수
const getYouTubeVideoId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : "";
};

export const TrailerModal = ({
  isOpen,
  onClose,
  movieTitle,
  trailerUrl,
  trailerThumbnailUrl,
}: ITrailerModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <Modal.Content className="max-w-4xl w-full p-0 bg-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl">
        <Modal.Header className="absolute top-4 left-4 z-10">
          <Modal.Title className="text-white text-lg font-semibold">
            {movieTitle} - 예고편
          </Modal.Title>
        </Modal.Header>

        <Button
          type="button"
          size="default"
          onClick={onClose}
          className="absolute top-2 right-0 z-10 text-white"
        >
          <X className="w-6 h-6" />
        </Button>

        <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden">
          {!isPlaying ? (
            // Thumbnail with Play Button
            <div
              className="h-full relative cursor-pointer group "
              onClick={() => setIsPlaying(true)}
            >
              <Image
                src={trailerThumbnailUrl || "/placeholder-movie.jpg"}
                alt={`${movieTitle} 예고편 썸네일`}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-black ml-1" />
                </div>
              </div>
            </div>
          ) : (
            // YouTube Video Player
            <div className="w-full h-full">
              {trailerUrl && trailerUrl.includes("youtube.com") ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                    trailerUrl
                  )}?autoplay=1&mute=${isMuted ? 1 : 0}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                // Fallback for direct video files
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted={isMuted}
                  src={
                    trailerUrl ||
                    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  }
                >
                  <source
                    src={
                      trailerUrl ||
                      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    }
                    type="video/mp4"
                  />
                  브라우저가 비디오를 지원하지 않습니다.
                </video>
              )}
            </div>
          )}

          {/* Video Controls */}
          {!isPlaying ? (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button
                    type="button"
                    variant="modalIcon"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white hover:bg-white/20 !bg-transparent"
                  >
                    <Play className="w-5 h-5" />
                  </Button>

                  <Button
                    type="button"
                    variant="modalIcon"
                    size="sm"
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-white hover:bg-white/20 !bg-transparent"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </Button>

                  <div className="text-white text-sm">00:00 / 02:30</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-1 mt-3">
                <div
                  className="bg-orange-600 h-1 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        {/* Movie Info */}
        <div className="p-6 bg-gray-900 text-white rounded-b-xl">
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-bold">{movieTitle}</h3>
            <Button
              type="button"
              variant="modalIcon"
              size="md"
              className="!border-none group"
            >
              <Heart className="w-4 h-4 text-orange-500/80 fill-orange-500/20 group-hover:fill-orange-500 group-hover:text-orange-500 transition-all duration-300" />
            </Button>
          </div>

          <p className="text-gray-300 text-sm mb-4">
            액션, 드라마 • 2024 • 148분 • 15세 이상
          </p>
          <div className="flex space-x-3">
            <Button
              type="button"
              variant="play"
              size="md"
              className="bg-orange-600 hover:bg-orange-700"
            >
              <Play className="w-4 h-4 mr-2" />
              지금 시청하기
            </Button>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
};

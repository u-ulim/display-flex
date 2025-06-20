"use client";
import { X, Play, Volume2, VolumeX, Maximize, Settings } from "lucide-react";

import { NewVariants } from "./trailerModalVariants";

import { ITrailerModalProps } from "./trailerModal.type";
import Image from "next/image";
import { useVisibleItems } from "@/hooks/useVisibleItems";
import { Button } from "@/app/components/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { fetchNews } from "@/api/landing/fetchNews";
import { Modal } from "../common";

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
      <Modal.Content className="max-w-4xl w-full p-0 bg-black border-0">
        <Modal.Header className="absolute top-4 left-4 z-10">
          <Modal.Title className="text-white text-lg font-semibold">
            {movieTitle} - 예고편
          </Modal.Title>
        </Modal.Header>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="relative aspect-video bg-gray-900">
          {!isPlaying ? (
            // Thumbnail with Play Button
            <div
              className="w-full h-full relative cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              <Image
                src={trailerThumbnailUrl || "/placeholder-movie.jpg"}
                alt={`${movieTitle} 예고편 썸네일`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-black ml-1" />
                </div>
              </div>
            </div>
          ) : (
            // Video Player
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

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:bg-white/20"
                >
                  <Play className="w-5 h-5" />
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white hover:bg-white/20"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </Button>

                <div className="text-white text-sm">00:00 / 02:30</div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-white hover:bg-white/20"
                >
                  <Settings className="w-5 h-5" />
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-white hover:bg-white/20"
                >
                  <Maximize className="w-5 h-5" />
                </Button>
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
        </div>

        {/* Movie Info */}
        <div className="p-6 bg-gray-900 text-white">
          <h3 className="text-xl font-bold mb-2">{movieTitle}</h3>
          <p className="text-gray-300 text-sm mb-4">
            액션, 드라마 • 2024 • 148분 • 15세 이상
          </p>
          <div className="flex space-x-3">
            <Button type="button" className="bg-orange-600 hover:bg-orange-700">
              <Play className="w-4 h-4 mr-2" />
              지금 시청하기
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800"
            >
              찜하기
            </Button>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
};

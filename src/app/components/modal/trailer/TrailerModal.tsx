"use client";
import { X, Play, Volume2, VolumeX, Heart } from "lucide-react";

import { ITrailerModalProps } from "./trailerModal.type";
import Image from "next/image";
import { Button } from "@/app/components/button";
import { useState, useEffect } from "react";
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
  genres,
  year,
  runtime,
  certification,
}: ITrailerModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoDuration, setVideoDuration] = useState<string>("00:00");

  // 모달이 닫힐 때 비디오 재생 상태 리셋
  const handleClose = () => {
    setIsPlaying(false);
    onClose();
  };

  // YouTube 영상 길이 가져오기
  useEffect(() => {
    const fetchVideoDuration = async () => {
      console.log("🎬 fetchVideoDuration 호출됨");
      console.log("trailerUrl:", trailerUrl);
      console.log(
        "YouTube API 키:",
        process.env.NEXT_PUBLIC_YOUTUBE_API_KEY ? "설정됨" : "없음"
      );

      if (!trailerUrl || !trailerUrl.includes("youtube.com")) {
        console.log("❌ YouTube URL이 아님");
        setVideoDuration("00:00");
        return;
      }

      const videoId = getYouTubeVideoId(trailerUrl);
      console.log("Video ID:", videoId);

      if (!videoId) {
        console.log("❌ Video ID 추출 실패");
        return;
      }

      if (!process.env.NEXT_PUBLIC_YOUTUBE_API_KEY) {
        console.log("❌ YouTube API 키가 없음");
        setVideoDuration("00:00");
        return;
      }

      try {
        const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;
        console.log("📡 API 호출:", apiUrl);

        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log("📦 API 응답:", data);

        if (data.items?.[0]?.contentDetails?.duration) {
          const duration = data.items[0].contentDetails.duration;
          console.log("⏰ Duration:", duration);

          // PT2M30S 형식을 MM:SS로 변환
          const match = duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
          console.log("정규식 결과:", match);

          const minutes = parseInt(match?.[1] || "0");
          const seconds = parseInt(match?.[2] || "0");
          const formatted = `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;

          console.log("✅ 최종 길이:", formatted);
          setVideoDuration(formatted);
        } else {
          console.log("❌ Duration 데이터 없음");
          setVideoDuration("00:00");
        }
      } catch (error) {
        console.error("❌ YouTube API 호출 실패:", error);
        setVideoDuration("00:00");
      }
    };

    if (isOpen) {
      fetchVideoDuration();
    }
  }, [isOpen, trailerUrl]);

  return (
    <Modal open={isOpen} onOpenChange={handleClose}>
      <Modal.Content className="max-w-4xl w-full p-0 bg-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl p-6">
        <Modal.Header className="absolute top-4 left-4 z-10">
          <Modal.Title className="text-white text-lg font-semibold">
            {movieTitle} - 트레일러
          </Modal.Title>
        </Modal.Header>

        <Button
          type="button"
          size="default"
          onClick={handleClose}
          className="absolute top-2 right-0 z-10 text-white"
        >
          <X className="w-6 h-6" />
        </Button>

        <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden">
          {!isPlaying ? (
            // Thumbnail with Play Button
            <div
              className={`h-full relative group ${
                trailerUrl ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              onClick={() => trailerUrl && setIsPlaying(true)}
            >
              <Image
                src={trailerThumbnailUrl || "/placeholder-movie.jpg"}
                alt={`${movieTitle} 예고편 썸네일`}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                {trailerUrl ? (
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-black ml-1" />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <div className="text-center text-white p-6 rounded-lg">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-600 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        예고편 없음
                      </h3>
                      <p className="text-sm text-gray-300">
                        현재 이 영화의 예고편을
                        <br />
                        제공하지 않습니다.
                      </p>
                    </div>
                  </div>
                )}
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
              ) : trailerUrl ? (
                // Fallback for direct video files
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted={isMuted}
                  src={trailerUrl}
                >
                  <source src={trailerUrl} type="video/mp4" />
                  브라우저가 비디오를 지원하지 않습니다.
                </video>
              ) : (
                // No trailer available
                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-600 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      예고편을 찾을 수 없습니다
                    </h3>
                    <p className="text-gray-400">
                      현재 이 영화의 예고편을 제공하지 않습니다.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Video Controls */}
          {!isPlaying ? (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent p-4">
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

                  <div className="text-white text-sm">
                    00:00 /{" "}
                    {videoDuration === "00:00" ? "00:00" : videoDuration}
                  </div>
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
            <span>
              {genres.map((g, index) => (
                <span key={index}>
                  {g}
                  {index !== genres.length - 1 && ", "}
                </span>
              ))}
            </span>
            {genres.length > 0 && " • "}
            {year} • {runtime}분 • {certification}
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

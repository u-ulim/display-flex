// TMDB API 응답 타입 정의
interface ReleaseDate {
  certification: string;
  descriptors: string[];
  iso_639_1: string;
  note: string;
  release_date: string;
  type: number;
}

interface ReleaseDatesResult {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
}

interface ReleaseDatesResponse {
  id: number;
  results: ReleaseDatesResult[];
}

interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

interface VideosResponse {
  id: number;
  results: Video[];
}

// 시청 가능 연령 정보를 가져오는 함수
export async function fetchCertification(
  movieId: number,
  apiKey: string
): Promise<string> {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=${apiKey}`
    );
    const data: ReleaseDatesResponse = await res.json();

    // 한국 지역의 certification 찾기
    const krRelease = data.results?.find(
      (release: ReleaseDatesResult) => release.iso_3166_1 === "KR"
    );
    let certification = krRelease?.release_dates?.[0]?.certification;

    // 한국 등급이 없으면 미국 등급 사용
    if (!certification) {
      const usRelease = data.results?.find(
        (release: ReleaseDatesResult) => release.iso_3166_1 === "US"
      );
      certification = usRelease?.release_dates?.[0]?.certification;
    }

    // certification 값을 한국어로 변환
    const certificationMap: Record<string, string> = {
      // 한국 등급
      ALL: "전체 관람가",
      "12": "12세 이상",
      "15": "15세 이상",
      "18": "18세 이상",
      "19": "청소년 관람불가",
      // 미국 등급
      G: "전체 관람가",
      PG: "12세 이상",
      "PG-13": "15세 이상",
      R: "18세 이상",
      "NC-17": "청소년 관람불가",
    };

    return certification
      ? certificationMap[certification] || `${certification}세 이상`
      : "전체 관람가";
  } catch (error) {
    console.error(`Failed to fetch certification for movie ${movieId}:`, error);
    return "전체 관람가";
  }
}

// 트레일러 정보를 가져오는 함수
export async function fetchTrailerUrl(
  movieId: number,
  apiKey: string
): Promise<string> {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=ko-KR`
    );
    const data: VideosResponse = await res.json();

    // YouTube 트레일러 찾기 (Official 트레일러 우선)
    const trailer =
      data.results?.find(
        (video: Video) =>
          video.site === "YouTube" &&
          (video.type === "Trailer" || video.type === "Teaser") &&
          video.official === true
      ) ||
      data.results?.find(
        (video: Video) =>
          video.site === "YouTube" &&
          (video.type === "Trailer" || video.type === "Teaser")
      );

    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : "";
  } catch (error) {
    console.error(`Failed to fetch trailer for movie ${movieId}:`, error);
    return "";
  }
}

// 장르 인터페이스
export interface IGenre {
  id: number;
  name: string;
}

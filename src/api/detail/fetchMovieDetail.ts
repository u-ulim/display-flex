export interface MovieDetail {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  year: number;
  genre: string[];
  duration: number;
  director: string;
  cast: {
    id: number;
    name: string;
    character: string;
    image: string;
  }[];
  reviews: {
    id: number;
    user: string;
    rating: number;
    date: string;
    content: string;
    helpfulCount: number;
  }[];
  similarMovies: {
    id: number;
    title: string;
    image: string;
    rating: number;
    year: number;
  }[];
}

// Mock 데이터 - 실제로는 API에서 가져올 데이터
const mockMovieData: Record<string, MovieDetail> = {
  "1": {
    id: 1,
    title: "오펜하이머",
    description:
      "1942년, 맨해튼 프로젝트의 일환으로 로스 알라모스 연구소에서 원자폭탄 개발을 지휘하게 된 물리학자 로버트 오펜하이머. 그는 나치 독일보다 먼저 핵무기를 완성시키기 위해 동료 과학자들과 함께 인류 역사상 가장 강력한 무기를 만들어낸다.",
    image: "/placeholder.svg",
    rating: 8.9,
    year: 2023,
    genre: ["액션", "드라마", "역사"],
    duration: 180,
    director: "크리스토퍼 놀란",
    cast: [
      {
        id: 1,
        name: "킬리언 머피",
        character: "로버트 오펜하이머",
        image: "/placeholder.svg",
      },
      {
        id: 2,
        name: "에밀리 블런트",
        character: "키티 오펜하이머",
        image: "/placeholder.svg",
      },
      {
        id: 3,
        name: "로버트 다우니 주니어",
        character: "루이스 스트라우스",
        image: "/placeholder.svg",
      },
      {
        id: 4,
        name: "맷 데이먼",
        character: "레슬리 그로브스",
        image: "/placeholder.svg",
      },
    ],
    reviews: [
      {
        id: 1,
        user: "영화광123",
        rating: 9.1,
        date: "2024.01.11",
        content:
          "크리스토퍼 놀란 감독의 역작이라고 할 수 있습니다. 킬리언 머피의 연기가 정말 인상적이었고, 원자폭탄 개발이라는 무거운 주제를 깊이 있게 다뤘습니다.",
        helpfulCount: 12,
      },
      {
        id: 2,
        user: "시네마러버",
        rating: 9.2,
        date: "2024.01.12",
        content:
          "역사적 사실을 바탕으로 한 드라마가 이렇게 몰입도 높을 수 있다니. 특히 마지막 장면에서의 연출이 소름끼쳤습니다.",
        helpfulCount: 8,
      },
      {
        id: 3,
        user: "영화덕후",
        rating: 9.3,
        date: "2024.01.13",
        content:
          "3시간이라는 긴 러닝타임이 전혀 지루하지 않았습니다. 오펜하이머의 내적 갈등이 잘 표현되었어요.",
        helpfulCount: 15,
      },
    ],
    similarMovies: [
      {
        id: 2,
        title: "덩케르크",
        image: "/placeholder.svg",
        rating: 8.5,
        year: 2017,
      },
      {
        id: 3,
        title: "인터스텔라",
        image: "/placeholder.svg",
        rating: 9.0,
        year: 2014,
      },
      {
        id: 4,
        title: "다크 나이트",
        image: "/placeholder.svg",
        rating: 9.2,
        year: 2008,
      },
      {
        id: 5,
        title: "인셉션",
        image: "/placeholder.svg",
        rating: 8.8,
        year: 2010,
      },
    ],
  },
  "2": {
    id: 2,
    title: "덩케르크",
    description: "제2차 세계대전 중 덩케르크 철수 작전을 다룬 전쟁 영화입니다.",
    image: "/placeholder.svg",
    rating: 8.5,
    year: 2017,
    genre: ["전쟁", "드라마", "액션"],
    duration: 106,
    director: "크리스토퍼 놀란",
    cast: [
      {
        id: 5,
        name: "톰 하디",
        character: "파리어",
        image: "/placeholder.svg",
      },
      {
        id: 6,
        name: "킬리언 머피",
        character: "쉬버링 솔져",
        image: "/placeholder.svg",
      },
    ],
    reviews: [],
    similarMovies: [
      {
        id: 1,
        title: "오펜하이머",
        image: "/placeholder.svg",
        rating: 8.9,
        year: 2023,
      },
      {
        id: 3,
        title: "인터스텔라",
        image: "/placeholder.svg",
        rating: 9.0,
        year: 2014,
      },
    ],
  },
  "3": {
    id: 3,
    title: "인터스텔라",
    description:
      "지구의 미래가 위험에 처한 상황에서 새로운 행성을 찾아 떠나는 우주 탐험가들의 이야기.",
    image: "/placeholder.svg",
    rating: 9.0,
    year: 2014,
    genre: ["SF", "드라마", "모험"],
    duration: 169,
    director: "크리스토퍼 놀란",
    cast: [
      {
        id: 7,
        name: "매튜 맥커너히",
        character: "쿠퍼",
        image: "/placeholder.svg",
      },
      {
        id: 8,
        name: "앤 해서웨이",
        character: "브랜드 박사",
        image: "/placeholder.svg",
      },
      {
        id: 9,
        name: "제시카 차스테인",
        character: "머피",
        image: "/placeholder.svg",
      },
    ],
    reviews: [
      {
        id: 1,
        user: "SF팬",
        rating: 9.5,
        date: "2024.01.10",
        content:
          "과학적 설정과 감동적인 스토리가 완벽하게 조화를 이룬 작품입니다.",
        helpfulCount: 25,
      },
    ],
    similarMovies: [
      {
        id: 1,
        title: "오펜하이머",
        image: "/placeholder.svg",
        rating: 8.9,
        year: 2023,
      },
      {
        id: 2,
        title: "덩케르크",
        image: "/placeholder.svg",
        rating: 8.5,
        year: 2017,
      },
    ],
  },
  "4": {
    id: 4,
    title: "다크 나이트",
    description: "배트맨이 조커와 맞서 싸우는 다크 히어로 영화의 걸작.",
    image: "/placeholder.svg",
    rating: 9.2,
    year: 2008,
    genre: ["액션", "범죄", "드라마"],
    duration: 152,
    director: "크리스토퍼 놀란",
    cast: [
      {
        id: 10,
        name: "크리스찬 베일",
        character: "브루스 웨인/배트맨",
        image: "/placeholder.svg",
      },
      {
        id: 11,
        name: "히스 레저",
        character: "조커",
        image: "/placeholder.svg",
      },
    ],
    reviews: [
      {
        id: 1,
        user: "히어로팬",
        rating: 9.8,
        date: "2024.01.08",
        content: "히스 레저의 조커 연기는 정말 전설적입니다.",
        helpfulCount: 50,
      },
    ],
    similarMovies: [
      {
        id: 1,
        title: "오펜하이머",
        image: "/placeholder.svg",
        rating: 8.9,
        year: 2023,
      },
    ],
  },
};

export async function fetchMovieDetail(
  movieId: string
): Promise<MovieDetail | null> {
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!TMDB_API_KEY) {
    console.error("❌ TMDB API key is missing");
    return null;
  }

  try {
    console.log("🎬 Fetching movie from TMDB with ID:", movieId);

    // TMDB API 호출
    const [movieResponse, creditsResponse, reviewsResponse, similarResponse] =
      await Promise.all([
        // 영화 기본 정보
        fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=ko-KR`
        ),
        // 출연진 정보
        fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${TMDB_API_KEY}`
        ),
        // 리뷰 정보
        fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        ),
        // 비슷한 영화
        fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${TMDB_API_KEY}&language=ko-KR&page=1`
        ),
      ]);

    if (!movieResponse.ok) {
      console.log("❌ Movie not found for ID:", movieId);
      return null;
    }

    const [movieData, creditsData, reviewsData, similarData] =
      await Promise.all([
        movieResponse.json(),
        creditsResponse.json(),
        reviewsResponse.json(),
        similarResponse.json(),
      ]);

    // TMDB 데이터를 우리 인터페이스에 맞게 변환
    const transformedMovie: MovieDetail = {
      id: movieData.id,
      title: movieData.title,
      description: movieData.overview || "설명이 없습니다.",
      image: movieData.poster_path
        ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
        : "/placeholder.svg",
      rating: Math.round(movieData.vote_average * 10) / 10,
      year: new Date(movieData.release_date).getFullYear(),
      genre: movieData.genres?.map((g: any) => g.name) || [],
      duration: movieData.runtime || 0,
      director:
        creditsData.crew?.find((person: any) => person.job === "Director")
          ?.name || "정보 없음",
      cast:
        creditsData.cast?.slice(0, 6).map((actor: any) => ({
          id: actor.id,
          name: actor.name,
          character: actor.character,
          image: actor.profile_path
            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
            : "/placeholder.svg",
        })) || [],
      reviews:
        reviewsData.results?.slice(0, 5).map((review: any, index: number) => ({
          id: index + 1,
          user: review.author,
          rating:
            review.author_details?.rating || Math.round(Math.random() * 5 + 5),
          date: new Date(review.created_at).toLocaleDateString("ko-KR"),
          content:
            review.content.length > 300
              ? review.content.substring(0, 300) + "..."
              : review.content,
          helpfulCount: Math.floor(Math.random() * 20) + 1,
        })) || [],
      similarMovies:
        similarData.results?.slice(0, 8).map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          image: movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : "/placeholder.svg",
          rating: Math.round(movie.vote_average * 10) / 10,
          year: new Date(movie.release_date).getFullYear(),
        })) || [],
    };

    console.log("✅ Movie found from TMDB:", transformedMovie.title);
    return transformedMovie;
  } catch (error) {
    console.error("❌ Failed to fetch movie from TMDB:", error);

    // 폴백: Mock 데이터 사용
    console.log("🔄 Falling back to mock data");
    const movie = mockMovieData[movieId];

    if (movie) {
      console.log("✅ Using mock data for:", movie.title);
      return movie;
    }

    return null;
  }
}

// 실제 API 호출 버전 (나중에 사용)
/*
export async function fetchMovieDetail(movieId: string): Promise<MovieDetail | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/movie/${movieId}`);
    
    if (!response.ok) {
      throw new Error('Movie not found');
    }
    
    const movie = await response.json();
    return movie;
  } catch (error) {
    console.error('Failed to fetch movie detail:', error);
    return null;
  }
}
*/

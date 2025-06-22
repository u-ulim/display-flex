export interface ReviewData {
  id: number;
  movieId: number;
  movieTitle: string;
  moviePoster: string;
  userNickname: string;
  userAvatar?: string;
  reviewText: string;
  rating: number;
  createdAt: string;
  title: string;
  poster_path: string;
}

export async function fetchReviews(
  page: number = 1,
  limit: number = 3
): Promise<ReviewData[]> {
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  // 임시 리뷰 텍스트 배열
  const reviewTexts = [
    "정말 훌륭한 영화였습니다. 스토리텔링이 뛰어나고 연기력도 최고였어요. 강력히 추천합니다!",
    "기대 이상으로 재미있었습니다. 특히 액션 시퀀스가 정말 박진감 넘쳤어요.",
    "감동적인 스토리와 뛰어난 영상미가 인상적이었습니다. 꼭 보세요!",
    "예상보다 훨씬 좋았어요. 마지막까지 긴장감을 놓을 수 없었습니다.",
    "캐릭터들의 매력이 정말 뛰어났고, 전개도 흥미진진했습니다.",
    "시각적으로 정말 아름다운 영화였습니다. 음악도 완벽했어요.",
    "몰입도가 정말 높은 작품이었습니다. 시간 가는 줄 몰랐어요.",
    "연출과 연기, 모든 면에서 완성도가 높은 영화였습니다.",
  ];

  const userNames = [
    "영화매니아",
    "시네필",
    "무비러버",
    "영화광",
    "드라마퀸",
    "액션키드",
    "로맨티스트",
    "스릴러팬",
    "코미디언",
    "판타지아",
  ];

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=ko-KR&page=${page}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await res.json();

    // 영화 데이터를 리뷰 데이터로 변환
    return data.results
      .slice(0, limit)
      .map((movie: ReviewData, idx: number) => {
        const globalIndex = (page - 1) * limit + idx;
        const rating = Math.floor(Math.random() * 5) + 6; // 6-10 범위의 평점

        return {
          id: globalIndex + 1,
          movieId: movie.id,
          movieTitle: movie.title,
          moviePoster: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
          userNickname: userNames[globalIndex % userNames.length],
          userAvatar: Math.random() > 0.5 ? undefined : "/placeholder.svg", // 50% 확률로 아바타 없음
          reviewText: reviewTexts[globalIndex % reviewTexts.length],
          rating: rating + Math.random() * 0.9, // 소수점 추가
          createdAt: new Date(
            Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
          )
            .toISOString()
            .split("T")[0]
            .replace(/-/g, "."),
        };
      });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
}

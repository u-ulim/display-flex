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
};

export async function fetchMovieDetail(
  movieId: string
): Promise<MovieDetail | null> {
  // 실제 API 호출을 시뮬레이션하기 위한 딜레이
  await new Promise((resolve) => setTimeout(resolve, 500));

  const movie = mockMovieData[movieId];

  if (!movie) {
    return null;
  }

  return movie;
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

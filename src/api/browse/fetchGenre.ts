export async function fetchCollection() {
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  // 실제 TMDB 컬렉션 데이터 가져오기
  const collectionsData = await Promise.all([
    // 다크 나이트 컬렉션 (크리스토퍼 놀란)
    // 토이 스토리 컬렉션 (애니메이션 대표)
    fetch(
      `https://api.themoviedb.org/3/collection/10194?api_key=${TMDB_API_KEY}&language=ko-KR`
    ),

    fetch(
      `https://api.themoviedb.org/3/collection/263?api_key=${TMDB_API_KEY}&language=ko-KR`
    ),
    // 마블 시네마틱 유니버스 (아이언맨 컬렉션으로 대체)
    fetch(
      `https://api.themoviedb.org/3/collection/131295?api_key=${TMDB_API_KEY}&language=ko-KR`
    ),
  ]);

  const collections = await Promise.all(
    collectionsData.map(async (response) => {
      const data = await response.json();
      return {
        id: data.id,
        title: data.name || data.title,
        description: data.overview || "훌륭한 영화 컬렉션",
        count: `+${data.parts?.length || 0}개 영화`,
        image: data.backdrop_path
          ? `https://image.tmdb.org/t/p/w500${data.backdrop_path}`
          : "/placeholder.svg",
      };
    })
  );

  // 영화와 컬렉션 데이터 모두 반환
  return {
    collections,
  };
}

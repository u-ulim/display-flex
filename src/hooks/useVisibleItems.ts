import { useCallback, useEffect, useState } from "react";

export function useVisibleItems() {
  const getVisibleItems = useCallback(() => {
    if (typeof window === "undefined") return 6;
    if (window.innerWidth < 640) return 2;
    if (window.innerWidth < 768) return 3;
    if (window.innerWidth < 1024) return 4;
    return 6;
  }, []);

  const [visibleItems, setVisibleItems] = useState(6); // SSR/CSR 모두 일치하는 안전한 값으로 초기화
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setVisibleItems(getVisibleItems());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getVisibleItems]);

  // 마운트 전에는 SSR/CSR이 항상 일치하는 값(6)을 반환
  if (!mounted) return 6;
  return visibleItems;
}

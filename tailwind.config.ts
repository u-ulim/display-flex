import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // 경로는 프로젝트에 맞게
  theme: {
    extend: {
      screens: {
        xs: "390px", // 390px breakpoint 추가
        // 기본 breakpoint들은 그대로 유지됩니다:
        // sm: '640px'
        // md: '768px'
        // lg: '1024px'
        // xl: '1280px'
        // 2xl: '1536px'
      },
    },
  },
};

export default config;

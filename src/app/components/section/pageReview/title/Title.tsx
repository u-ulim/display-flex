import { titleVariants } from "./titleVariants";

const { section } = titleVariants();

export const Title = () => {
  return (
    <section className={section()}>
      <div className="pt-10 mb-4">
        <h2 className="font-bold-32 mb-2 dark:text-white">리뷰</h2>
        <p className="text-gray-600 dark:text-gray-300">
          다른 사용자들이 작성한 리뷰를 확인해보세요!
        </p>
      </div>
    </section>
  );
};

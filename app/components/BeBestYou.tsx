import React from "react";

const BeBestYou = () => {
  return (
    <section className="my-[5rem] mb-5 px-4 sm:px-10 md:px-20 gap-4 sm:gap-6 md:gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold p-4">
          Be Best You with EQ
        </div>
        <div className="text-sm sm:text-lg md:text-xl p-4">
          People with high emotional intelligence (EQ) live more fulfilled lives.
          They tend to be happier and have healthier relationships.
        </div>
        <div className="text-sm sm:text-lg md:text-xl p-4">
          They are more successful in their pursuits and make for inspiring
          leaders. According to science, they earn $29 a year more on average.
        </div>
      </div>
    </section>
  );
};

export default BeBestYou;

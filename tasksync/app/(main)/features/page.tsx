import FeaturesList from "./featureslist";

const FeaturesPage: React.FC = () => {
  return (
    <section className="bg-transparent text-white">
      <div className="mx-auto max-w-screen-xl px-2 py-4 sm:px-4 sm:py-8 lg:px-6 lg:py-10">
        <div className="mx-auto max-w-lg text-center">
          {/* <h2 className="text-3xl font-bold sm:text-4xl">Our Features</h2> */}
        </div>
        <FeaturesList />
        <div className="mt-8 text-center">
          <a
            href="/pricing"
            className="inline-block rounded bg-pink-500 px-8 py-2 text-sm font-medium text-white transition hover:bg-pink-800 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;

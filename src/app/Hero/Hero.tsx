function Hero() {
  return (
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-4xl text-center">
        Manage your UI React components
        <span className={`text-green-600`}> Effertlessly!</span>
      </h2>
      <p className="text-center text-[18px] w-[510px] max-sm:w-full text-slate-500">
        Save time by reusing your favourite components. Sttore them in a
        centralized database and create new components with ease. Enhance your
        development workflow by having quick access to a library of reusable
        components and ensure consistency across your projects.
      </p>

      <button
        className={`block bg-green-600 rounded-md px-9 py-3 text-sm font-medium text-white hover:bg-green-600`}
        type="button"
      >
        {`Let's get started!`}
      </button>
    </div>
  );
}
export default Hero;

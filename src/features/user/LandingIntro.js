import TemplatePointers from "./components/TemplatePointers";

function LandingIntro() {
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200">
      <div className="hero-content py-12">
        <div className="max-w-md">
          <h1 className="text-3xl text-center font-bold ">
            <img
              src="/logo.svg"
              className="w-10 inline-block ml-2 mask mask-circle"
              alt="وکیل باشی"
            />
            وکیل باشی
          </h1>

          <div className="text-center mt-12">
            <img
              src="./intro.png"
              alt="وکیل باشی"
              className="w-11/12 inline-block"
            ></img>
          </div>

          {/* Importing pointers component */}
          <TemplatePointers />
        </div>
      </div>
    </div>
  );
}

export default LandingIntro;

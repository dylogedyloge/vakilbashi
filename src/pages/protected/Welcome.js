import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import { Link } from "react-router-dom";
import TemplatePointers from "../../features/user/components/TemplatePointers";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "" }));
  }, []);

  return (
    <>
      {/** ---------------------- Different charts ------------------------- */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 m-6">
        <Link to={"/app/dashboard"}>
        <div className="card cursor-pointer bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/logo.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              سئو
              {/* <div className="badge badge-secondary">بزودی</div> */}
            </h2>
            <p>تولید محتوا برای بالا بردن سئوی سایت</p>
          </div>
        </div>
        </Link>
        <div className="card  bg-base-100 cursor-pointer shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/logo.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              سئو
              <div className="badge badge-info">بزودی</div>
            </h2>
            <p>تولید محتوا برای بالا بردن سئوی سایت</p>
          </div>
        </div>
        <div className="card  bg-base-100 cursor-pointer shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/logo.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              سئو
              <div className="badge badge-info">بزودی</div>
            </h2>
            <p>تولید محتوا برای بالا بردن سئوی سایت</p>
          </div>
        </div>
        <div className="card  bg-base-100 cursor-pointer shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/logo.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              سئو
              <div className="badge badge-info">بزودی</div>
            </h2>
            <p>تولید محتوا برای بالا بردن سئوی سایت</p>
          </div>
        </div>
        <div className="card  bg-base-100 cursor-pointer shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/logo.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              سئو
              <div className="badge badge-info">بزودی</div>
            </h2>
            <p>تولید محتوا برای بالا بردن سئوی سایت</p>
          </div>
        </div>
        <div className="card  bg-base-100 cursor-pointer shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/logo.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              سئو
              <div className="badge badge-info">بزودی</div>
            </h2>
            <p>تولید محتوا برای بالا بردن سئوی سایت</p>
          </div>
        </div>
        <div className="card  bg-base-100 cursor-pointer shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/logo.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              سئو
              <div className="badge badge-info">بزودی</div>
            </h2>
            <p>تولید محتوا برای بالا بردن سئوی سایت</p>
          </div>
        </div>
        <div className="card  bg-base-100 cursor-pointer shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/logo.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              سئو
              <div className="badge badge-info">بزودی</div>
            </h2>
            <p>تولید محتوا برای بالا بردن سئوی سایت</p>
          </div>
        </div>
        <div className="card  bg-base-100 cursor-pointer shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/logo.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              سئو
              <div className="badge badge-info">بزودی</div>
            </h2>
            <p>تولید محتوا برای بالا بردن سئوی سایت</p>
          </div>
        </div>
        <div className="card  bg-base-100 cursor-pointer shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/logo.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              سئو
              <div className="badge badge-info">بزودی</div>
            </h2>
            <p>تولید محتوا برای بالا بردن سئوی سایت</p>
          </div>
        </div>
        <div className="card  bg-base-100 cursor-pointer shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/logo.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              سئو
              <div className="badge badge-info">بزودی</div>
            </h2>
            <p>تولید محتوا برای بالا بردن سئوی سایت</p>
          </div>
        </div>
        <div className="card  bg-base-100 cursor-pointer shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/logo.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              سئو
              <div className="badge badge-info">بزودی</div>
            </h2>
            <p>تولید محتوا برای بالا بردن سئوی سایت</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InternalPage;

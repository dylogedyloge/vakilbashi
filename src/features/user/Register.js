
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LandingIntro from "./LandingIntro";
import { FaCheckSquare, FaSquare } from "react-icons/fa";
import { Checkbox } from "@material-tailwind/react";

const Register = () => {
  const navigate = useNavigate();
  const [isCompany, setIsCompany] = useState(true);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      isCompany: true,
      companyName: "",
      phoneNumber: "",
      emailAddress: "",
      agreeToTermsOfService: false,
      receiveAdvertisementsByEmail: false,
      receiveAdvertisementsByPhone: false,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("نام و نام خانوادگی ضروری است"),
      companyName: Yup.string().when("isCompany", {
        is: true,
        then: () => Yup.string().required("نام شرکت ضروری است"),
        otherwise: () => Yup.string(),
      }),
      phoneNumber: Yup.string()
        .required("شماره تلفن ضروری است")
        .matches(/^\d+$/, "شماره تلفن باید عدد باشد"),
      emailAddress: Yup.string()
        .email("آدرس ایمیل نامعتبر است")
        .required("آدرس ایمیل ضروری است"),
      agreeToTermsOfService: Yup.boolean()
        .oneOf([true], "قوانین سرویس را پس از مطالعه قبول کنید")
        .required("مطالعه و پذیرش قوانین سرویس ضروری است"),
    }),
    onSubmit: async (values) => {
      try {
        // await axios.post("/api/register", values);
        console.log(values);
        navigate("/app/welcome");
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full shadow-xl ">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <LandingIntro />
          <div className="grid grid-cols-1">
            <div className="grid place-content-center mt-20">
              <h1 className="text-2xl font-bold mb-5 text-center">ثبت‌نام </h1>
              <div className="card shodow-xl w-96 bg-base-100">
                <form
                  className="w-full max-w-lg"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                      <input
                        className={`w-full p-3 border rounded-lg outline-none text-gray-700 focus:shadow-outline ${
                          formik.touched.fullName && formik.errors.fullName
                            ? "border-red-500"
                            : "border-gray-200"
                        } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="نام و نام خانوادگی"
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.fullName && formik.errors.fullName && (
                        <p className="text-red-500 font-bold text-sm">
                          {formik.errors.fullName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <div className="tabs tabs-boxed bg-base-100 grid grid-cols-2">
                        <button
                          type="button"
                          onClick={() => setIsCompany(false)}
                          className={`tab tab-lg ${
                            !isCompany ? "tab-lifted tab-active" : ""
                          } `}
                        >
                          شخص
                        </button>

                        <button
                          type="button"
                          onClick={() => setIsCompany(true)}
                          className={`tab tab-lg ${
                            isCompany ? "tab-lifted tab-active" : ""
                          } `}
                        >
                          شرکت
                        </button>
                      </div>
                    </div>
                  </div>

                  {isCompany && (
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <input
                          className={`w-full p-3 border rounded-lg outline-none text-gray-700 focus:shadow-outline ${
                            formik.touched.companyName &&
                            formik.errors.companyName
                              ? "border-red-500"
                              : "border-gray-200"
                          } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                          id="companyName"
                          name="companyName"
                          type="text"
                          placeholder="نام شرکت"
                          value={formik.values.companyName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.companyName &&
                          formik.errors.companyName && (
                            <p className="text-red-500 font-bold text-sm">
                              {formik.errors.companyName}
                            </p>
                          )}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                      <input
                        className={`w-full p-3 border rounded-lg outline-none text-gray-700 focus:shadow-outline ${
                          formik.touched.phoneNumber &&
                          formik.errors.phoneNumber
                            ? "border-red-500"
                            : "border-gray-200"
                        } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        placeholder="شماره تلفن (ده رقمی)"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.phoneNumber &&
                        formik.errors.phoneNumber && (
                          <p className="text-red-500 font-bold text-sm">
                            {formik.errors.phoneNumber}
                          </p>
                        )}
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                      <input
                        className={`w-full p-3 border rounded-lg outline-none text-gray-700 focus:shadow-outline ${
                          formik.touched.emailAddress &&
                          formik.errors.emailAddress
                            ? "border-red-500"
                            : "border-gray-200"
                        } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                        id="emailAddress"
                        name="emailAddress"
                        type="text"
                        placeholder="آدرس ایمیل"
                        value={formik.values.emailAddress}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.emailAddress &&
                        formik.errors.emailAddress && (
                          <p className="text-red-500 font-bold text-sm">
                            {formik.errors.emailAddress}
                          </p>
                        )}
                    </div>
                  </div>

                  <div className="grid-grid-cols-1">
                    <div className="flex items-center">
                      <Checkbox
                        type="checkbox"
                        onClick={() =>
                          formik.setFieldValue(
                            "agreeToTermsOfService",
                            !formik.values.agreeToTermsOfService
                          )
                        }
                        checked={`${
                          formik.values.agreeToTermsOfService ? "checked" : ""
                        }`}
                        color="red"
                      />
                      <span className="tracking-wide text-gray-700 text-xs font-bold">
                        با&nbsp;
                        <a
                          href="/terms-of-service"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary"
                        >
                          قوانین سرویس&nbsp;
                        </a>
                        موافقم
                      </span>
                    </div>

                    {formik.touched.agreeToTermsOfService &&
                      formik.errors.agreeToTermsOfService && (
                        <p className="text-red-500 font-bold text-sm">
                          {formik.errors.agreeToTermsOfService}
                        </p>
                      )}
                    <div className="flex items-center">
                      <Checkbox
                        type="checkbox"
                        onClick={() =>
                          formik.setFieldValue(
                            "receiveAdvertisementsByEmail",
                            !formik.values.receiveAdvertisementsByEmail
                          )
                        }
                        checked={`${
                          formik.values.receiveAdvertisementsByEmail
                            ? "checked"
                            : ""
                        }`}
                        color="red"
                      />

                      <span className="tracking-wide text-gray-700 text-xs font-bold">
                        اعلانات و آگهی‌ها را به ایمیل من بفرستید
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Checkbox
                        type="checkbox"
                        onClick={() =>
                          formik.setFieldValue(
                            "receiveAdvertisementsByPhone",
                            !formik.values.receiveAdvertisementsByPhone
                          )
                        }
                        checked={`${
                          formik.values.receiveAdvertisementsByPhone
                            ? "checked"
                            : ""
                        }`}
                        color="red"
                      />

                      <span className="tracking-wide text-gray-700 text-xs font-bold">
                        اعلانات و آگهی‌ها را از طریق اس ام اس برای من بفرستید
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                    className={`btn btn-block mt-10 ${
                      !formik.isValid || formik.isSubmitting
                        ? "bg-gray-400 cursor-not-allowed "
                        : "btn-primary bg-blueGray hover:bg-blueGray-dark text-white font-bold py-2 px-4 rounded"
                    }`}
                  >
                    ثبت‌نام
                  </button>
                  <div className="text-center font-bold my-10">
                    <p className="">
                      حساب کاربری دارید؟
                      <Link
                        to="/login"
                        className="text-primary hover:text-primary-focus"
                      >
                        ورود
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

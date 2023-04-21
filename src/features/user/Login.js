import { useState } from "react";
import LandingIntro from "./LandingIntro";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { AiOutlineMail, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";

const LoginSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\d{10}$/, "شماره تلفن نامعتبر است")
    .required("این فیلد ضروری است"),
  verificationCode: Yup.string()
    .matches(/^\d{6}$/, "کد ورودی ۶ رقمی است")
    .required("این فیلد ضروری است"),
  email: Yup.string().email("ایمیل نامعتبر است").required("این فیلد ضروری است"),
  password: Yup.string()
    .min(8, "پسورد حداقل باید ۸ کاراکتر باشد")
    .required("این فیلد ضروری است"),
});

const LoginForm = () => {
  const navigate = useNavigate();

  const [loginMethod, setLoginMethod] = useState("email");
  const [verificationSent, setVerificationSent] = useState(false);

  const handleLoginMethodChange = (method) => {
    setLoginMethod(method);
    setVerificationSent(false);
  };

  const handleSendVerificationCode = () => {
    // Send verification code logic here
    setVerificationSent(true);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <LandingIntro />

          <div className="flex justify-center items-center h-screen">
            <div>
              <h1 className="text-2xl font-bold mb-5 text-center">
                یکی از روش‌های زیر را برای ورود انتخاب کنید
              </h1>
              <div className="flex justify-center mb-5">
                <button
                  className={`${
                    loginMethod === "phone" ? "bg-gray-100" : ""
                  } p-2 rounded-full`}
                  onClick={() => handleLoginMethodChange("phone")}
                >
                  <AiOutlinePhone className="h-5 w-5" />
                </button>
                <button
                  className={`${
                    loginMethod === "email" ? "bg-gray-100" : ""
                  } p-2 rounded-full`}
                  onClick={() => handleLoginMethodChange("email")}
                >
                  <AiOutlineMail className="h-5 w-5" />
                </button>
                <button
                  className={`${
                    loginMethod === "password" ? "bg-gray-100" : ""
                  } p-2 rounded-full`}
                  onClick={() => handleLoginMethodChange("password")}
                >
                  <AiOutlineUser className="h-5 w-5" />
                </button>
              </div>

              <Formik
                initialValues={{
                  phone: "",
                  verificationCode: "",
                  email: "",
                  password: "",
                }}
                validationSchema={
                  loginMethod === "phone"
                    ? LoginSchema.pick(["phone", "verificationCode"])
                    : loginMethod === "email"
                    ? LoginSchema.pick(["email"])
                    : LoginSchema.pick(["password", "username"])
                }
                onSubmit={(values) => {
                  // Login logic here
                  navigate("/app/welcome");
                  console.log(values);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="grid grid-cols-1 gap-6 p-10 shadow-lg ">
                    {loginMethod === "phone" && (
                      <>
                        {!verificationSent ? (
                          <>
                            <Field
                              name="phone"
                              type="text"
                              placeholder="شماره تلفن (۱۰ رقمی)"
                              className="w-full p-3 border rounded-lg outline-none text-gray-700 focus:shadow-outline"
                            />
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="text-red-500 font-bold text-sm"
                            />

                            <button
                              type="button"
                              onClick={handleSendVerificationCode}
                              className="btn btn-secondary"
                            >
                              کد ورودی را بفرست
                            </button>
                          </>
                        ) : (
                          <>
                            <Field
                              name="verificationCode"
                              type="text"
                              placeholder="کد ورودی"
                              className="w-full p-3 border rounded-lg outline-none text-gray-700 focus:shadow-outline"
                            />
                            <ErrorMessage
                              name="verificationCode"
                              component="div"
                              className="text-red-500 font-bold text-sm"
                            />

                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="btn btn-primary"
                            >
                              ورود
                            </button>
                          </>
                        )}
                      </>
                    )}

                    {loginMethod === "email" && (
                      <>
                        <Field
                          name="email"
                          type="text"
                          placeholder="آدرس ایمیل"
                          className="w-full p-3 border rounded-lg outline-none text-gray-700 focus:shadow-outline"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 font-bold text-sm"
                        />

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary"
                        >
                          ورود
                        </button>
                      </>
                    )}

                    {loginMethod === "password" && (
                      <>
                        <Field
                          name="username"
                          type="text"
                          placeholder="نام کاربری"
                          className="w-full p-3 border rounded-lg outline-none text-gray-700 focus:shadow-outline"
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="text-red-500 font-bold text-sm"
                        />

                        <Field
                          name="password"
                          type="password"
                          placeholder="پسورد"
                          className="w-full p-3 border rounded-lg outline-none text-gray-700 focus:shadow-outline"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-red-500 font-bold text-sm"
                        />

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary"
                        >
                          ورود
                        </button>
                      </>
                    )}
                    <div className="text-right text-primary">
                      <Link to="/forgot-password">
                        <span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                          پسوردتان را فراموش کرده اید؟
                        </span>
                      </Link>
                    </div>
                    <div className="text-center font-bold">
                      <p className="">
                        حساب کاربری ندارید؟{" "}
                        <Link
                          to="/register"
                          className="text-primary hover:text-primary-focus"
                        >
                          ثبت نام کنید
                        </Link>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

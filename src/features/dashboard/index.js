import React, { useState } from "react";
import {
  AiFillPlusCircle,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineFileImage,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { Checkbox } from "@material-tailwind/react";
import TypingText from "./components/TypingText";

const FormStepper = () => {
  const sampleEssay =
    "فواید گیاه‌خواری دقیقا همان موردی است که این رژیم را در بین مردم بسیاری محبوب کرده است. احتمالا چند سالی است که نام رژیم گیاه‌خواری را زیاد شنیده‌اید و با افراد بسیار زیادی روبرو شدید که خود را گیاه‌خوار یا وگان معرفی ‌می‌کنند؛ اما آیا تا به امروز درباره این رژیم پرطرفدار تحقیق کرده‌اید؟ آیا درباره فواید گیاه‌خواری و مضرات آن کنجکاو شده‌اید؟شاید بارها با این موضوع روبرو شده باشید که مردم جهان به دلیل فواید گیاه‌خواری آن را به عنوان سبکی در زندگی انتخاب می‌کنند اما آیا واقعا نخوردن گوشت و پروتئین حیوانی به بدن آسیبی وارد نمی‌کند؟پیش از اینکه شروع به گیاه‌خواری کنید بهتر است اطلاعات خود را درباره این رژیم و فواید گیاه‌خواری بیشتر کنید. رژیم گیاه‌خواری دارای انواع مختلفی است که هر فرد با توجه به سلامت جسمانی باید یکی را انتخاب کند. سعی کنید برای شروع با یک پزشک متخصص مشورت کنید زیرا امکان دارد به دلیل فواید گیاه‌خواری این رژیم به بسیاری از افراد توصیه شود اما در برخی شرایط هم پیش می‌آید که با وجود تمام فواید گیاه‌خواری، پزشک فرد را از گرفتن آن منع می‌کند.در ادامه این مطلب قصد داریم اطلاعاتی را پیرامون رژیم گیاه‌خواری و فواید گیاه‌خواری ارائه کنیم. با ما همراه شوید.";
  const [essay, setEssay] = useState(sampleEssay);

  const [step, setStep] = useState(1);
  const handleStepChange = (newStep) => {
    setStep(newStep);
  };
  const handleNextClick = (event) => {
    event.preventDefault();
    handleStepChange(step + 1);
  };
  const handleBackClick = (event) => {
    event.preventDefault();
    handleStepChange(step - 1);
  };
  // CASE 3
  const [headings, setHeadings] = useState([
    { text: "گیاهخواری چیست؟", hasImage: false },
    { text: "گیاهخواری و علم نوین", hasImage: false },
    { text: "چهره‌های مشهور گیاهخوار", hasImage: false },
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const handleDeleteHeading = (index) => {
    const newHeadings = [...headings];
    newHeadings.splice(index, 1);
    setHeadings(newHeadings);
  };

  const handleInsertHeading = (index) => {
    const newHeadings = [...headings];
    newHeadings.splice(index + 1, 0, { text: "", hasImage: false });
    setHeadings(newHeadings);
    setEditingIndex(index + 1);
  };

  const handleEditHeadingStart = (index) => {
    setEditingIndex(index);
  };

  const handleEditHeadingEnd = () => {
    setEditingIndex(null);
  };

  const handleEditHeadingChange = (event, index) => {
    const newHeadings = [...headings];
    newHeadings[index].text = event.target.value;
    setHeadings(newHeadings);
  };

  const handleHasImageToggle = (index) => {
    const newHeadings = [...headings];
    newHeadings[index].hasImage = !newHeadings[index].hasImage;
    setHeadings(newHeadings);
  };
  // CASE 4
  const [faqInputs, setFaqInputs] = useState([{ id: 1, value: "" }]);
  const [faqIsEditMode, setFaqIsEditMode] = useState(true);
  const handleFaqInputChange = (event, index) => {
    const values = [...faqInputs];
    values[index].value = event.target.value;
    setFaqInputs(values);
  };
  const handleFaqAddInput = () => {
    const newFaqInput = {
      id: faqInputs.length + 1,
      value: "",
    };
    setFaqInputs([...faqInputs, newFaqInput]);
  };
  const handleFaqSaveClick = () => {
    setFaqIsEditMode(false);
  };
  const handleFaqEditClick = () => {
    setFaqIsEditMode(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the form from submitting
    // handle form submission logic here
  };
  // CASE 1
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState("");
  const [title, setTitle] = useState("");
  const [tone, setTone] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleToneChange = (event) => {
    setTone(event.target.value);
  };

  const handleKeywordInputChange = (event) => {
    setCurrentWord(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && currentWord) {
      event.preventDefault();
      setWords([...words, currentWord]);
      setCurrentWord("");
    } else if (event.key === "Backspace" && !currentWord && words.length) {
      setWords(words.slice(0, words.length - 1));
    }
  };
  const handleKeyWordDelete = (word, event) => {
    event.preventDefault();
    setWords(words.filter((w) => w !== word));
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <div className="mb-10 font-bold text-xl">
              عنوان مقاله موردنظر کلیدواژه‌ها و لحن مقاله موردنظرتان رامشخص کنید
            </div>
            <form className="grid grid-cols-2 gap-6 ">
              <input
                type="text"
                placeholder="عنوان مقاله مورد نظرتان را بنویسید"
                className="input input-bordered w-full "
                value={title}
                onChange={handleTitleChange}
              />
              <div className="card bg-base-300 ">
                <div className="card-body">
                  <h2 className="card-title">عنوان مقاله</h2>
                  <p>{title}</p>
                </div>
              </div>
              <input
                type="text"
                value={currentWord}
                onChange={handleKeywordInputChange}
                onKeyDown={handleInputKeyDown}
                placeholder="کلیدواژه‌ها"
                className="input input-bordered w-full  mt-10"
              />
              <div className="card bg-base-300 ">
                <div className="card-body">
                  <h2 className="card-title">کلیدواژه‌ها</h2>
                  <div className="grid grid-flow-row auto-rows-max ">
                    {words.map((word, index) => (
                      <div className="kbd kbd-sm p-2 m-1 relative " key={index}>
                        <button
                          className="btn btn-ghost btn-circle btn-xs absolute right-1 top-1"
                          onClick={(event) => handleKeyWordDelete(word, event)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 absolute right-1 top-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                        <span className="mr-2">{word}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <select
                className="select select-bordered w-full "
                onChange={handleToneChange}
              >
                <option disabled selected>
                  لحن مورد نظرتان را انتخاب کنید
                </option>
                <option value="رسمی">رسمی</option>
                <option value="غیررسمی">غیر رسمی</option>
              </select>
              <div className="card bg-base-300 ">
                <div className="card-body">
                  <h2 className="card-title">لحن</h2>
                  <p>{tone}</p>
                </div>
              </div>

              <button className="btn col-span-2" onClick={handleNextClick}>
                بعدی
              </button>
            </form>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="mb-10 font-bold text-xl">
              یکی از مقدمه‌های پیشنهادی را انتخاب کنید
            </div>
            <form className="grid grid-cols-2 gap-6 ">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">
                    درمان بیماری‌های لاعلاج با گیاهخواری
                  </span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio radio-error"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">تاریخچه گیاهخواری در ایران</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio radio-error"
                    checked
                  />
                </label>
              </div>
              <button className="btn" onClick={handleNextClick}>
                بعدی
              </button>
              <button className="btn btn-outline" onClick={handleBackClick}>
                قبلی
              </button>
            </form>
          </div>
        );
      case 3:
        return (
          <div>
            <div className="mb-10 font-bold text-xl">
              سؤالاتی که مایلید در مقاله شما پاسخ داده شوند را مشخص کنید
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 ">
              <button
                className="flex justify-center items-center"
                onClick={handleFaqAddInput}
              >
                <AiFillPlusCircle className="text-3xl" />
              </button>

              {faqInputs.map((faqInput, index) => (
                <input
                  key={faqInput.id}
                  type="text"
                  className="input input-bordered"
                  value={faqInput.value}
                  onChange={(event) => handleFaqInputChange(event, index)}
                  disabled={!faqIsEditMode}
                />
              ))}
              {faqIsEditMode ? (
                <button
                  className="btn btn-primary px-4 py-2 mt-4 "
                  onClick={handleFaqSaveClick}
                >
                  ذخیره
                </button>
              ) : (
                <button
                  className="btn btn-secondary px-4 py-2 mt-4 "
                  onClick={handleFaqEditClick}
                >
                  تغییر
                </button>
              )}
              <div className="grid grid-cols-2 gap-6 mt-6">
                <button className="btn" onClick={handleNextClick}>
                  بعدی
                </button>
                <button className="btn btn-outline" onClick={handleBackClick}>
                  قبلی
                </button>
              </div>
            </form>
          </div>
        );
      case 4:
        return (
          <div>
            <div className="mb-10 font-bold text-xl">
              تیترهای مقاله موردنظتان را مشخص کنید. می توانید تیترهای پیشنهادی
              را حذف کنید یا تغییر دهید و به آن‌ها اضافه کنید. در هر تیتر مشخص
              کنید که مایلید شامل تصویر باشد یا نه؟
            </div>
            <form>
              <ul className="space-y-2 mb-6">
                {headings.map((heading, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={heading.text}
                        onChange={(event) =>
                          handleEditHeadingChange(event, index)
                        }
                        onBlur={handleEditHeadingEnd}
                        autoFocus
                        className="input input-bordered w-full mx-6"
                      />
                    ) : (
                      <>
                        <AiOutlineFileImage
                          onClick={() => handleHasImageToggle(index)}
                          className={`cursor-pointer ${
                            heading.hasImage ? "text-error" : "text-base-200"
                          }`}
                        />
                        <Checkbox
                          onClick={() => handleHasImageToggle(index)}
                          type="checkbox"
                          checked={`${heading.hasImage ? "checked" : ""}`}
                          color="red"
                        />

                        <span>{heading.text}</span>

                        <AiOutlineEdit
                          onClick={() => handleEditHeadingStart(index)}
                          className="text-xl cursor-pointer "
                        />
                      </>
                    )}

                    <AiOutlineDelete
                      onClick={() => handleDeleteHeading(index)}
                      className="text-xl cursor-pointer "
                    />
                    <AiOutlinePlusCircle
                      onClick={() => handleInsertHeading(index)}
                      className="text-xl cursor-pointer "
                    />
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-6">
                <button className="btn" onClick={handleNextClick}>
                  بعدی
                </button>
                <button className="btn btn-outline" onClick={handleBackClick}>
                  قبلی
                </button>
              </div>
            </form>
          </div>
        );

      case 5:
        return (
          <div>
            <TypingText />
          </div>
        );
      default:
        return null;
    }
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-center" dir="ltr">
        <ul className="steps">
          <li
            className={`step cursor-pointer text-sm ${
              step >= 1 ? "step-info" : ""
            }`}
            onClick={() => handleStepChange(1)}
          >
            عنوان، کلیدواژه‌ها، لحن
          </li>
          <li
            className={`step cursor-pointer text-sm ${
              step >= 2 ? "step-info" : ""
            }`}
            onClick={() => handleStepChange(2)}
          >
            انتخاب مقدمه پیشنهادی
          </li>
          <li
            className={`step cursor-pointer text-sm ${
              step >= 3 ? "step-info" : ""
            }`}
            onClick={() => handleStepChange(3)}
          >
            تعداد پاراگراف، سؤالات احتمالی
          </li>
          <li
            className={`step cursor-pointer text-sm ${
              step >= 4 ? "step-info" : ""
            }`}
            onClick={() => handleStepChange(4)}
          >
            تیترها
          </li>
          <li
            className={`step cursor-pointer text-sm ${
              step >= 5 ? "step-info" : ""
            }`}
            onClick={() => handleStepChange(5)}
          >
            دریافت مقاله
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 gap-16">
      <div>{renderStepIndicator()}</div>
      <div>{renderStepContent()}</div>
    </div>
  );
};

export default FormStepper;

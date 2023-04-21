import { useState } from "react";
import { saveAs } from "file-saver";
import { BsDownload } from "react-icons/bs";

const TypingText = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [isFinishedTyping, setIsFinishedTyping] = useState(false);
  const [textTyped, setTextTyped] = useState("");

  const handleStartTyping = () => {
    setIsTyping(true);
    setTextTyped("");
    let i = 0;
    let typingInterval = setInterval(() => {
      if (i < text.length) {
        setTextTyped((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsFinishedTyping(true);
      }
    }, 10); // Change this value to adjust the typing speed
  };

  const handleDownloadDocx = () => {
    const blob = new Blob([textTyped], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    saveAs(blob, "typed-text.docx");
  };

  return (
    <div className="" dir="rtl">
      <div
        className={`mb-10 font-bold text-xl ${
          isFinishedTyping || isTyping ? "hidden" : ""
        }`}
      >
        اگر از اطلاعاتی که در مورد مقاله موردنظرتان وارد کردید اطمینان دارید روی
        دکمه زیر کلیک کنید
      </div>
      <div className="card">
        <button
          className={`btn btn-primary ${isFinishedTyping ? "hidden" : ""}`}
          onClick={handleStartTyping}
          disabled={isTyping}
        >
          {isTyping ? "...در حال نوشتن" : "شروع به نوشتن کن"}
          {isFinishedTyping ? "hidden" : ""}
        </button>
        <p className={` ${isTyping ? "" : "hidden"}`}>{textTyped}</p>
      </div>
      <div className={`mt-10  ${isFinishedTyping ? "" : "hidden"}`}>
        <button
          className="btn btn-block btn-primary lowercase"
          onClick={handleDownloadDocx}
        >
          <BsDownload className="ml-4 text-xl" />
          دانلود با فرمت docx
        </button>
      </div>
    </div>
  );
};

export default TypingText;

const text =
  "مبل ها در دو گروه استیل و راحتی وجود دارند که مبل های استیل و راحتی تفاوت هایی باهم دارند، مبلمان راحتی به مبلمانی گفته میشود که تمام پارچه باشد یعنی چوب یا فلزی در بدنه اصلی آن وجود نداشته باشد. مبل های راحتی برخلاف مبل های استیل پایه کوتاه و دسته های پهن دارند.مبلمان استیل به مبل هایی گفته میشود که حالت رسمی دارند و دارای پایه های بلند و پشتی های صاف هستند. اگر برای راحتی خودتان برای نشستن و برخواستن مبلمان میخرید بهتر است سراغ مبلمان های راحتی بروید اما در صورتی که قصد دارید 2 دست مبلمان بخرید میتوانید یکی را راحتی و دیگری را استیل انتخاب کنید.مبلمان جزو وسایلی است که هنگام خرید آن باید حسابی دقت و سلیقه به خرج دهید و با هوشیاری کامل دست به انتخاب بزنید، ترفندهایی که در ادامه مشاهده میکنید میتوانند بسیار کمک کننده باشند.جنس و کیفیت چوب به کار رفته در مبلمان اولین چیزی است که باید در نظر بگیرید، مبلمانی انتخاب کنید که چوب های محکمی دارند و دارای فرورفتگی نیستند. نئوپان و کامپوزیت ها کیفیت کمتر، قیمت کمتر و دوام کمتری دارند.یکی دیگر از چیزهایی که هنگام خرید مبل باید در نظر بگیرید دکوراسیون منزل است. هنگام انتخاب رنگ و جنس پارچه رومبلی سعی کنید رنگ پرده ها و فرش ها را در نظر داشته باشید و طوری انتخاب کنید که با هم همخوانی داشته باشند. اگر خیلی منزل تان رفت و امد هست و معمولا زیاد مهمان دارید یا وقتش را ندارید که هرروز به تمیز کردن خانه بپردازید بهتر است پارچه های روشن برای رومبلی انتخاب نکنید مخصوصا اگر فرزند کوچک دارید.برای انتخاب رنگ مبلمان سلیقه شخصی و رنگ دکوراسیون منزل حرف اول را میزند اما بد نیست که بدانید رنگ های فانتزی و پاستلی معمولا زود خسته کننده و تکراری میشوند پس بیشتر رنگ های گرم برای مبلمان توصیه میشود.حواس تان به پایه های مبل باشد زیرا پایه ها باید محکم باشند و بتوانند وزن بالا را تحمل کنند. دقت کنید پایه ها باید دقیقا به مبل متصل باشد و نباید جدا از آن ساخته شده باشد و به بدنه وصل شود. پایه ها نباید انحنا داشته باشد و دچار لغزش شود.";

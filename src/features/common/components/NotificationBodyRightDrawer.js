function NotificationBodyRightDrawer() {
  return (
    <>
    <div className="grid grid-cols-1 gap-4 mt-10">

      <div className="card ">
        <div className="alert alert-info">
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="text-sm">با استفاده از پرداخت سالیانه در پلن نقره ای از ۱۲٪ تخفیف برخوردار شوید</span>
          </div>
        </div>
      </div>
      <div className="card ">
        <div className="alert alert-info">
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="text-sm">پلن طلایی مناسب برای استفاده گروهی </span>
          </div>
        </div>
      </div>
      <div className="card ">
        <div className="alert alert-warning">
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span className="text-sm">اعتبار حساب شما برای پلن نقره ای به پایان رسیده است</span>
          </div>
        </div>
      </div>

    </div>
      
      {/* {[...Array(15)].map((_, i) => {
        return (
          <div
            key={i}
            className={"grid mt-3 card bg-base-200 rounded-box p-3"(
              i < 5 ? "bg-red-900" : ""
            )}
          >
            {i % 2 === 0
              ? `Your monthly charge for plan 2 is over`
              : `Try Silver plan to create 10 essay per day `}
          </div>
        );
      })} */}
    </>
  );
}

export default NotificationBodyRightDrawer;

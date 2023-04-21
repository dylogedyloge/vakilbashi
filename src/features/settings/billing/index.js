import moment from "jalali-moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import { showNotification } from "../../common/headerSlice";
import { AiFillPrinter } from "react-icons/ai";

const BILLS = [
  {
    invoiceNo: "#۳۲۲۱",
    amount: "دانلود",
    description: "مقاله تولید شده توسط هوش مصنوعی",
    status: "در انتظار پرداخت",
    generatedOn: moment(new Date())
      .locale("fa")
      .add(-23 * 8, "days")
      .format("DD MMM YYYY"),
    paidOn: "امیر نجفی",
  },

  {
    invoiceNo: "#۵۷۶۵",
    amount: "دانلود",
    description: "مقاله تولید شده توسط هوش مصنوعی",
    status: "در انتظار پرداخت",
    generatedOn: moment(new Date())
      .locale("fa")
      .add(-20 * 7, "days")
      .format("DD MMM YYYY"),
    paidOn: "امیر نجفی",
  },

  {
    invoiceNo: "#۵۴۴۳",
    amount: "دانلود",
    description: "مقاله تولید شده توسط هوش مصنوعی",
    status: "پرداخت شده",
    generatedOn: moment(new Date())
      .locale("fa")
      .add(-15 * 6, "days")
      .format("DD MMM YYYY"),
    paidOn: "رسول ضیافتی",
  },

  {
    invoiceNo: "#۴۲۲۲",
    amount: "دانلود",
    description: "مقاله تولید شده توسط هوش مصنوعی",
    status: "پرداخت شده",
    generatedOn: moment(new Date())
      .locale("fa")
      .add(-4 * 8, "days")
      .format("DD MMM YYYY"),
    paidOn: "امین جلیلی",
  },

  {
    invoiceNo: "#۴۳۳۲",
    amount: "دانلود",
    description: "مقاله تولید شده توسط هوش مصنوعی",
    status: "پرداخت شده",
    generatedOn: moment(new Date())
      .locale("fa")
      .add(-21 * 7, "days")
      .format("DD MMM YYYY"),
    paidOn: "امین جلیلی",
  },

  {
    invoiceNo: "#۰۱۹۲",
    amount: "دانلود",
    description: "مقاله تولید شده توسط هوش مصنوعی",
    status: "پرداخت شده",
    generatedOn: moment(new Date())
      .locale("fa")
      .add(-6 * 8, "days")
      .format("DD MMM YYYY"),
    paidOn: "امیر نجفی",
  },

  {
    invoiceNo: "#۸۴۷۵",
    amount: "دانلود",
    description: "مقاله تولید شده توسط هوش مصنوعی",
    status: "پرداخت شده",
    generatedOn: moment(new Date())
      .locale("fa")
      .add(-30 * 7, "days")
      .format("DD MMM YYYY"),
    paidOn: "رسول ضیافتی",
  },

  {
    invoiceNo: "#۰۹۳۲",
    amount: "دانلود",
    description: "مقاله تولید شده توسط هوش مصنوعی",
    status: "پرداخت شده",
    generatedOn: moment(new Date())
      .locale("fa")
      .add(-30 * 8, "days")
      .format("DD MMM YYYY"),
    paidOn: "امین جلیلی",
  },
];

function Billing() {
  const [bills, setBills] = useState(BILLS);

  const getPaymentStatus = (status) => {
    if (status === "پرداخت شده")
      return <div className="badge badge-success">{status}</div>;
    if (status === "در انتظار پرداخت")
      return <div className="badge badge-primary">{status}</div>;
    else return <div className="badge badge-ghost">{status}</div>;
  };

  return (
    <>
      <TitleCard title="صورتحساب" topMargin="mt-2">
        {/* Invoice list in table format loaded constant */}
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>شماره مقاله</th>
                <th>تاریخ تولید</th>
                <th>عنوان</th>
                <th>دانلود</th>
                <th>وضعیت</th>
                <th>نام کاربر</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>{l.invoiceNo}</td>
                    <td>{l.generatedOn}</td>
                    <td>{l.description}</td>
                    <td className="cursor-pointer">
                      <div className="flex items-center">
                        <AiFillPrinter />
                        <div>{l.amount}</div>
                      </div>
                    </td>
                    <td>{getPaymentStatus(l.status)}</td>
                    <td>{l.paidOn}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
}

export default Billing;

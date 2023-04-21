// import moment from "moment";
import moment from "jalali-moment";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import { showNotification } from "../../common/headerSlice";

const TopSideButtons = () => {
  const dispatch = useDispatch();

  const addNewTeamMember = () => {
    dispatch(
      showNotification({ message: "Add New Member clicked", status: 1 })
    );
  };

  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-secondary mx-4"
        onClick={() => addNewTeamMember()}
      >
        دعوت عضو جدید
      </button>
    </div>
  );
};

const TEAM_MEMBERS = [
  {
    name: "امیر نجفی",
    avatar: "/2.jpg",
    email: "amir@vakilbashi.com",
    role: "مدیرپروژه",
    joinedOn: moment().locale("fa").format("DD MMM YYYY"),
    lastActive: "۵ ساعت پیش",
  },
  {
    name: "رسول ضیافتی",
    avatar: "/1.jpg",
    email: "rasool@vakilbashi.com",
    role: "ادمین",
    joinedOn: moment()
      .locale("fa")
      .add(-5 * 2, "days")
      .format("DD MMM YYYY"),
    lastActive: "۱۵ دقیقه پیش",
  },
  {
    name: "مرتضی ناظمی",
    avatar: "/3.jpg",
    email: "maziar@vakilbashi.com",
    role: "ادمین",
    joinedOn: moment()
      .locale("fa")
      .add(-5 * 3, "days")
      .format("DD MMM YYYY"),
    lastActive: "۲۰ ساعت پیش",
  },
  {
    name: "امین جلیلی",
    avatar: "/4.jpg",
    email: "amin@vakilbashi.com",
    role: "کارشناس تولید محتوا",
    joinedOn: moment()
      .locale("fa")
      .add(-5 * 4, "days")
      .format("DD MMM YYYY"),
    lastActive: "۱ ساعت پیش",
  },
  {
    name: "سحر سفلایی",
    avatar: "/5.jpg",
    email: "sahar@vakilbashi.com",
    role: "کارشناس تولید محتوا",
    joinedOn: moment()
      .locale("fa")
      .add(-5 * 5, "days")
      .format("DD MMM YYYY"),
    lastActive: "۱ دقیقه پیش",
  },
  {
    name: "عباس بوعذار",
    avatar: "/6.jpg",
    email: "abbas@vakilbashi.com",
    role: "کارآموز",
    joinedOn: moment()
      .locale("fa")
      .add(-5 * 6, "days")
      .format("DD MMM YYYY"),
    lastActive: "خیلی وقت پیش",
  },
];

function Team() {
  const [members, setMembers] = useState(TEAM_MEMBERS);

  const getRoleComponent = (role) => {
    if (role === "ادمین")
      return <div className="badge badge-primary">{role}</div>;
    if (role === "کارشناس تولید محتوا")
      return <div className="badge">{role}</div>;
    if (role === "مدیرپروژه")
      return <div className="badge badge-secondary">{role}</div>;
    if (role === "کارآموز")
      return <div className="badge badge-accent">{role}</div>;
    else return <div className="badge badge-ghost">{role}</div>;
  };

  return (
    <>
      <TitleCard
        title="اعضای فعال"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        {/* Team Member list in table format loaded constant */}
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>نام</th>
                <th>آدرس ایمیل</th>
                <th>تاریخ عضویت</th>
                <th>نقش</th>
                <th>آخرین فعالیت</th>
              </tr>
            </thead>
            <tbody>
              {members.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-circle w-12 h-12">
                            <img src={l.avatar} alt="Avatar" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold mx-4">{l.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{l.email}</td>
                    <td>{l.joinedOn}</td>
                    <td>{getRoleComponent(l.role)}</td>
                    <td>{l.lastActive}</td>
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

export default Team;

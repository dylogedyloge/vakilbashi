import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import { showNotification } from "../../common/headerSlice";
import InputText from "../../../components/Input/InputText";
import TextAreaInput from "../../../components/Input/TextAreaInput";
import ToogleInput from "../../../components/Input/ToogleInput";

function ProfileSettings() {
  const dispatch = useDispatch();

  // Call API to update profile settings changes
  const updateProfile = () => {
    dispatch(showNotification({ message: "Profile Updated", status: 1 }));
  };

  const updateFormValue = ({ updateType, value }) => {
    console.log(updateType);
  };

  return (
    <>
      <TitleCard title="اطلاعات شخصی" topMargin="mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            labelTitle="نام"
            defaultValue="امیر"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="آدرس ایمیل"
            defaultValue="amir@vakilbashi.com"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="عنوان"
            defaultValue="تولیدکننده محتوا"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="مکان"
            defaultValue="مشهد"
            updateFormValue={updateFormValue}
          />
          <TextAreaInput
            labelTitle="درباره من"
            defaultValue="مدیر بخش تولید محتوا در وکیل باشی"
            updateFormValue={updateFormValue}
          />
        </div>
        <div className="divider"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            labelTitle="زبان"
            defaultValue="فارسی"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="نام شرکت"
            defaultValue="وکیل باشی"
            updateFormValue={updateFormValue}
          />
          {/* <ToogleInput
            updateType="syncData"
            labelTitle="Sync Data"
            defaultValue={true}
            updateFormValue={updateFormValue}
          /> */}
        </div>

        <div className="mt-16">
          <button
            className="btn btn-secondary btn-block"
            onClick={() => updateProfile()}
          >
            بروز رسانی
          </button>
        </div>
      </TitleCard>
    </>
  );
}

export default ProfileSettings;

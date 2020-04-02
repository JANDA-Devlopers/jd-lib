import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import DayPickerModal from "./DayPickerModal";
import { useDayPicker } from "../../hooks/hook";
import { useModal, TDayPickerDot } from "../..";
import Button from "../button/Button";

export default {
  title: "DayPickerModal",
  component: () => {
    const DayPickerModalHook = useModal(true);
    const DayPickerHook = useDayPicker(null, null);

    return <DayPickerModal modalHook={DayPickerModalHook} {...DayPickerHook} />;
  },
  decorators: [withKnobs]
};

export const standard = () => {
  const DayPickerModalHook = useModal(true);
  const DayPickerHook = useDayPicker(null, null);
  const dots: TDayPickerDot[] = [
    {
      tooltip: "?",
      color: "error",
      date: new Date()
    }
  ];
  return (
    <div>
      <Button
        onClick={() => {
          DayPickerModalHook.openModal();
        }}
        label={"열기"}
      />
      <DayPickerModal
        dots={dots}
        {...DayPickerHook}
        autoClose={boolean("autoClose", true)}
        isRange={boolean("isRange", true)}
        modalHook={DayPickerModalHook}
      />
    </div>
  );
};

standard.story = {
  name: "standard"
};

import React, { useEffect } from "react";
import { Body } from "#common/common.style";
import {TimerContainer, TimerCell} from "./Timer.style"

function Timer({ timedata }) {
  useEffect(() => {
    let clearTimerId = setInterval(
      () => timedata.getTime(timedata.timerFinishDate),
      1000,
    );

    return () => clearInterval(clearTimerId);
  });

  return (
    <TimerContainer>
      {timedata.days === undefined ? (
        <></>
      ) : (
        <>
          <TimerCell>
            <Body.XXL>
              {timedata.days < 10 ? `0${timedata.days}` : `${timedata.days}`}
            </Body.XXL>
            <Body.Tiny>Days</Body.Tiny>
          </TimerCell>
          <Body.XXL>:</Body.XXL>
          <TimerCell>
            <Body.XXL>
              {timedata.hours < 10 ? `0${timedata.hours}` : `${timedata.hours}`}
            </Body.XXL>
            <Body.Tiny>Hours</Body.Tiny>
          </TimerCell>
          <Body.XXL>:</Body.XXL>
          <TimerCell>
            <Body.XXL>
              {timedata.mins < 10 ? `0${timedata.mins}` : `${timedata.mins}`}
            </Body.XXL>
            <Body.Tiny>Mins</Body.Tiny>
          </TimerCell>
          <Body.XXL>:</Body.XXL>
          <TimerCell>
            <Body.XXL>
              {timedata.secs < 10 ? `0${timedata.secs}` : `${timedata.secs}`}
            </Body.XXL>
            <Body.Tiny>Secs</Body.Tiny>
          </TimerCell>
        </>
      )}
    </TimerContainer>
  );
}

export default Timer;

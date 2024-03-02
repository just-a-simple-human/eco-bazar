import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Body, colors } from '../default'

const Timer = styled.section`
    
    width: 290px;
    height: 52px;
    margin-top: 8px;

    display: flex;
    gap: 8px;

    & :nth-child(even) {

        color: rgba(255, 255, 255, 0.6);

    }

`

const TimerCell = styled.div`
    
    width: 56px;
    height: 52px;

    display: flex;
    flex-direction: column;
    gap: 4px;

    & :first-child {
        color: ${colors.brandingColors.white};
        text-align: center;
    }
    
    & p:last-child {
        line-height: 100%;
        color: rgba(255, 255, 255, 0.8);
        letter-spacing: calc(0.03*12px);
        text-align: center;
        text-transform: uppercase;
    }

`

function SaleTimer({timedata}) {

    useEffect(()=>{

        let clearTimerId = setInterval(() => timedata.getTime(timedata.timerFinishDate), 1000)

        return () => clearInterval(clearTimerId)

    })

    return (
        <Timer>
            {timedata.days === undefined ? 
                <></> : 
                <>
                    <TimerCell>
                        <Body.XXL>{timedata.days < 10 ? `0${timedata.days}` : `${timedata.days}`}</Body.XXL>
                        <Body.Tiny>Days</Body.Tiny>
                    </TimerCell>
                    <Body.XXL>:</Body.XXL>
                    <TimerCell>
                        <Body.XXL>{timedata.hours < 10 ? `0${timedata.hours}` : `${timedata.hours}`}</Body.XXL>
                        <Body.Tiny>Hours</Body.Tiny>
                    </TimerCell>
                    <Body.XXL>:</Body.XXL>
                    <TimerCell>
                        <Body.XXL>{timedata.mins < 10 ? `0${timedata.mins}` : `${timedata.mins}`}</Body.XXL>
                        <Body.Tiny>Mins</Body.Tiny>
                    </TimerCell>
                    <Body.XXL>:</Body.XXL>
                    <TimerCell>
                        <Body.XXL>{timedata.secs < 10 ? `0${timedata.secs}` : `${timedata.secs}`}</Body.XXL>
                        <Body.Tiny>Secs</Body.Tiny>
                    </TimerCell>
                </>}
            </Timer>
    )
}

export default SaleTimer
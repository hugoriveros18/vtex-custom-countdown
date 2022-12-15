import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { TimeSplit } from '../../typings/global'
import { tick } from '../../typings/time'
import countdownSchema from '../../schemas/countdown-schema'
import './styles.css'

interface Props {
  targetDate: string
  targetHour: string
  countdownInactiveMessage: string
  countdownActiveMessage: string
  message: string
}

const Countdown = ({
  targetDate = '2000-12-12',
  targetHour = '00:00:00',
  countdownInactiveMessage = "It's over",
  countdownActiveMessage = 'Time to finish:',
}: Props) => {
  // STATES
  const [timeRemaining, setTimeRemaining] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00',
  })
  const [countdownFinished, setCountdownFinished] = useState<boolean>(false)
  
  // FUNCTIONS
  tick(targetDate, targetHour, setTimeRemaining, countdownFinished, setCountdownFinished)

  // STYLES
  const CSS_HANDLES = [
    'countdown__container',
    'countdown__message',
    'countdown__message--text',
    'countdown__time',
    'countdown__time--box',
    'countdown__time--box-numbers',
    'countdown__time--box-text',
    'countdown__time--phone',
    'countdown__message--text-phone',
    'countdown__time--box-numbers-phone',
    'countdown__inactive--container',
    'countdown__inactive--text',
  ]

  const handles = useCssHandles(CSS_HANDLES)

  // JSX
  if (countdownFinished) {
    return (
      <div className={handles['countdown__inactive--container']}>
        <p className={handles['countdown__inactive--text']}>{countdownInactiveMessage}</p>
      </div>
    )
  }
  return (
    <div className={handles.countdown__container}>
      <div className={handles.countdown__message}>
        <p className={handles['countdown__message--text']}>{countdownActiveMessage}</p>
      </div>
      <div className={handles.countdown__time}>
        <div className={handles['countdown__time--box']}>
          <p className={handles['countdown__time--box-numbers']}>
            {timeRemaining.hours}
          </p>
          <p className={handles['countdown__time--box-text']}>HRS</p>
        </div>
        <div className={handles['countdown__time--box']}>
          <p className={handles['countdown__time--box-numbers']}>
            {timeRemaining.minutes}
          </p>
          <p className={handles['countdown__time--box-text']}>MIN</p>
        </div>
        <div className={handles['countdown__time--box']}>
          <p className={handles['countdown__time--box-numbers']}>
            {timeRemaining.seconds}
          </p>
          <p className={handles['countdown__time--box-text']}>SEC</p>
        </div>
      </div>
      <div className={handles['countdown__time--phone']}>
        <p className={handles['countdown__message--text-phone']}>{countdownActiveMessage}</p>
        <p className={handles['countdown__time--box-numbers-phone']}>
          {`${timeRemaining.hours} : ${timeRemaining.minutes} : ${timeRemaining.seconds}`}
        </p>
      </div>
    </div>
  )
}

Countdown.schema = countdownSchema

export default Countdown

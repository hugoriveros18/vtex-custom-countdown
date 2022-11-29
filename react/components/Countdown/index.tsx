// react/Countdown.tsx
import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { TimeSplit } from '../../typings/global'
import { getTwoDaysFromNow, tick } from '../../typings/time'
import countdownSchema from '../../schemas/countdown-schema'
import './styles.css'

interface Props {
  targetDate: string
}

const DEAFULT_TARGET_DATE = getTwoDaysFromNow()

DEAFULT_TARGET_DATE

const Countdown = ({ targetDate }: Props) => {
  // STATES
  const [timeRemaining, setTimeRemaining] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  // FUNCTIONS
  tick(targetDate, setTimeRemaining)

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
  ]

  const handles = useCssHandles(CSS_HANDLES)

  // JSX
  return (
    <div className={handles.countdown__container}>
      <div className={handles.countdown__message}>
        <p className={handles['countdown__message--text']}>ENDS IN:</p>
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
        <p className={handles['countdown__message--text-phone']}>ENDS IN:</p>
        <p className={handles['countdown__time--box-numbers-phone']}>
          {`${timeRemaining.hours} : ${timeRemaining.minutes} : ${timeRemaining.seconds}`}
        </p>
      </div>
    </div>
  )
}

Countdown.schema = countdownSchema

export default Countdown

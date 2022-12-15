import { TimeSplit } from './global'

const SECONDS_IN_MINUTE = 60
const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE

const fillWithZero = (digits: number, number: number): string => {
  const filled = `${'0'.repeat(digits - 1)}${number}`

  return filled.slice(filled.length - digits)
}

const parseTimeRemaining = (totalSeconds: number): TimeSplit => {
  const hours = Math.floor(totalSeconds / SECONDS_IN_HOUR)
  const minutes = Math.floor(
    (totalSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE
  )

  const seconds = Math.floor(
    (totalSeconds % SECONDS_IN_HOUR) % SECONDS_IN_MINUTE
  )

  return {
    hours: fillWithZero(2, hours),
    minutes: fillWithZero(2, minutes),
    seconds: fillWithZero(2, seconds),
  }
}

export const tick = (
  targetDate: string,
  targetHour: string,
  dispatchFn: React.Dispatch<React.SetStateAction<TimeSplit>>,
  countdownFinished : boolean,
  setCountdownFinished : (val: boolean) => void
) => {
  const ONE_SECOND_IN_MILLIS = 1000
  const formatFinalDate = new Date(`${targetDate}T${targetHour}`).toISOString();
  const finalDate = new Date(formatFinalDate);
  const now = new Date()
  const secondsLeft = (finalDate.getTime() - now.getTime()) / ONE_SECOND_IN_MILLIS;
  
  if((secondsLeft < 0 || finalDate.toString() === "Invalid Date") && !countdownFinished) {
    setCountdownFinished(true);
  } else {
    setTimeout(() => {
      dispatchFn(parseTimeRemaining(secondsLeft))
    }, ONE_SECOND_IN_MILLIS)
  }
}

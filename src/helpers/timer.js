export const calculateTimeLeft = () => {
  const publicDate = new Date(Date.UTC(2021, 12, 30, 12, 0, 0))
  const difference = publicDate - new Date()

  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days:
        Math.floor(difference / (1000 * 60 * 60 * 24)) < 10
          ? `0${Math.floor(difference / (1000 * 60 * 60 * 24))}`
          : `${Math.floor(difference / (1000 * 60 * 60 * 24))}`,
      hours:
        Math.floor((difference / (1000 * 60 * 60)) % 24) < 10
          ? `0${Math.floor((difference / (1000 * 60 * 60)) % 24)}`
          : `${Math.floor((difference / (1000 * 60 * 60)) % 24)}`,
      minutes:
        Math.floor((difference / 1000 / 60) % 60) < 10
          ? `0${Math.floor((difference / 1000 / 60) % 60)}`
          : `${Math.floor((difference / 1000 / 60) % 60)}`,
      seconds:
        Math.floor((difference / 1000) % 60) < 10
          ? `0${Math.floor((difference / 1000) % 60)}`
          : `${Math.floor((difference / 1000) % 60)}`,
    }
  }

  return timeLeft
}

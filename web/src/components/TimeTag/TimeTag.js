import {useMemo} from 'react'

const TimeTag = ({datetime}) => {
  const timestamp = useMemo(() => {
    const date = new Date(datetime)
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  }, [datetime])

  return (
    <time dateTime={datetime} title={datetime}>
      {timestamp}
    </time>
  )
}

export default TimeTag

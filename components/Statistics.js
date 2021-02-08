import { commad, zerod } from '../utils/number'

export default function Statistics ({ statistics, followers }) {
  const likes = statistics.map(x => x.like_on_fetch)
  const comments = statistics.map(x => x.comment_on_fetch)
  const dates = statistics.map(x => new Date(+x.taken_at_timestamp * 1000))

  const average = x => x.reduce((a, b) => a + b, 0) / x.length

  const likesOnAverage = likes ? average(likes) : '-'
  const commentOnAverage = comments ? average(comments) : '-'
  const hourOnAverage = dates ? average(dates.map(x => x.getHours())) : '-'
  const minuteOnAverage = dates ? average(dates.map(x => x.getMinutes())) : '-'

  return (
    <div className="pt-4 p-3">
      <div className="p-4 border rounded-lg">
        <h2 className="font-bold text-lg">平均</h2>
        <h2>ライク数: {commad(Math.round(likesOnAverage))}</h2>
        <h2>コメント数: {commad(Math.round(commentOnAverage))}</h2>
        <h2>エンゲージメント率: {(likesOnAverage / followers * 100).toFixed(2)}%</h2>
        <h2>投稿時間: {`${zerod(Math.round(hourOnAverage))}:${zerod(Math.round(minuteOnAverage))}`}</h2>
      </div>
    </div>
  )
}
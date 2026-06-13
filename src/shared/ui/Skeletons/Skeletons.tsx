import s from "./Skeleton.module.css"

type Props = {
  skeleton?: string
}

export const Skeletons = ({ skeleton }: Props) => {
  return (
    <div className={skeleton ? skeleton : s.grid}>
      {Array(20)
        .fill(null)
        .map((_, id) => (
          <div key={id}>
            <div className={s.item}></div>
            <div className={s.itemName}></div>
          </div>
        ))}
    </div>
  )
}

import { FocusList } from "./FocusList"
import { FocusItem } from "./FocusItem"

export const Focus = () => {
  return (
    <section>
        {FocusList.map((item, i)=>{
            return <FocusItem key={i}
            name = {item.name}
            image = {item.image}
            title = {item.title}
            description = {item.description}/>
        })}
    </section>
  )
}

import { BrowserItem } from "./BrowserItem";
import { BrowserList } from "./BrowserList";

export const BrowseAll = () => {
  return (
    <section>
      {BrowserList.map((itemlist, i) => {
        return <BrowserItem key={i}
          name={itemlist.name}
          image={itemlist.image} />
      })}
    </section>
  )
}

import { Link } from "react-router-dom";
import { Focus } from "../Components/Focus/Focus";

export const HomeContent = () => {
  return (
    <div>
      <header>
        <h2><Link to='/'>Focus</Link></h2>
        <p><Link to='/'>Show all</Link></p>
      </header >

      <section>
        <Focus/>
      </section>
    </div>

  )
}

import { SearchContent } from "./SearchContent";
import { Header, Div,Section } from "./SearchStyled";
import { Link } from "react-router-dom";


export const Search = () => {
  return (
    <Div>
      <Header>
        <input type="text" placeholder="What do you want to listen to ?" />
        <div>
        <p><Link to ='/signUp'>Sign up</Link></p>
         <button><Link to ='/log in'>Log in </Link></button>
        </div>
      </Header>
      <Section>
        <SearchContent/>
      </Section>
    </Div>

  )
}

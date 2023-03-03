import { Div, Header,Section } from './HomeStyled';
import { HomeContent } from './HomeContent'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Div>
      <Header>
        <div>
          <p><Link to ='/signUp'>Sign up</Link></p>
          <button><Link to ='/log in'>Log in </Link></button>
        </div>
      </Header>
      <Section>
        <HomeContent/>
      </Section>
    </Div>
  )
}

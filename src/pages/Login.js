import logo from '../images/logo.png'
import { FaFacebook, FaApple, FaGoogle } from 'react-icons/fa';

import styled from 'styled-components';

const Main = styled.main`
      display:flex;
      flex-direction:column;
      width:1720px;`

const Header = styled.header`
    display:flex;
    justify-content:center;
    width:100%;
    padding:30px;
    

    img {
      width:30px;
      border-radius:50%;
    }
    h1{
      font-size:27px;
    }
    
    span{
      font-size:14px;
    }`


const Section = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:30px;
    
    p{
      font-size:13px;
      font-weight:bold;
    }`

const DivButton = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:10px;
    
    button{
      border-radius:30px;
      padding:7px 31px;
      width:100%;
      margin:10px;
      outline:none;
      border:solid 1px #878787;
      background-color:#fff;
      
    }
    button:hover{
      border:1px solid #222;
    }
    button span {
      padding-right:10px;
    }`

const Form = styled.form`
      display:flex;
      flex-direction:column;
      margin-top:10px;
      
      div{
        display:flex;
        flex-direction:column;

        label{
          font-size:13px;
          font-weight:bold;
          margin:10px;
        }

      input{
        border: 1px solid #878787;
        padding:10px;
        width:100%;
        border-radius:5px;
        outline:none;
      }

      input:hover{
        border: 1px solid #222;
      }

      }`

const LastDiv = styled.div`
      display:flex;
      align-items:center;
      margin-top:40px;
      justify-content:space-between;

button{
  color:#222;
  background-color:#1FDF64;
  padding: 15px 30px;
  gap:10px;
  border-radius:30px;
  font-size:15px;
  font-weight:bold;
  border:none;
}

button:hover{
  transform:scale(1.05);
}

button a {
  color:#222;
  cursor:default;
  text-decoration:none;
}`

export const Login = () => {
  return (
    <Main>
      <Header>
        <img src={logo} alt='logo' />
        <h1>Spotify</h1>
        <span>&reg;</span>
      </Header>
        <hr/>
      <Section>
        <p>To continue, log in to Spotify.</p>
        <DivButton>
          <button><span><FaFacebook /></span>Continue with facebook</button>
          <button><span><FaApple /></span>Continue with apple</button>
          <button><span><FaGoogle /></span>Continue with google</button>
          <button>Continue with phone number</button>
        </DivButton>
        <div><p>Or</p></div>

        <Form>
          <div>
            <label>Email address or username</label>
            <input type='text' placeholder='Email address or username' required />
          </div>
          <div>
            <label>Password</label>
            <input type='password' placeholder='Password' required />
          </div>
        </Form>

        <LastDiv>
        <input type='checkbox'/>
        <label>Remember me </label>
        <button type='submmit'>Log in</button>
        </LastDiv>

        
      </Section>
    </Main>
  )
}

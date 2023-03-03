
import styled from 'styled-components';


 export const Navbar = styled.nav`
    font-size: 1.5em;
    background-color:#000000;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:200px;
    height:100vh;
    padding:10px;

    div {
        display:flex;
        align-items:center;
    }
    div img {
      width:30px;
      background-color:black;
      cursor:pointer;
    }
    div :hover {
      cursor:pointer;
    }

    div h1 {
      color:#fff;
      font-size:30px;
    }

    div span{
      color:#fff;
      font-size:14px;
      align-self:start;
    }

    div{
      display:flex;
      justify-content:center;
      align-items:center;
      margin-top:30px;
    }
    ion-icon{
      color:#fff;
      cursor:pointer;
    }
    a {
      text-decoration: none;
      color:#B3B3B3;
      padding:10px;
      font-size:13px;
      transition: 0.2s ease;
      font-weight:bold;
    }
    a:hover{
      color:#ccccFF;
      
    }
    `;
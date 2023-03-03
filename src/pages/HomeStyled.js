import styled from "styled-components";

export const Div = styled.div`
        display:flex;
        flex-direction:column;
        `
export const Header = styled.header`
  width:100%;
  height:63px;
  background-color:#101010;
  display:flex; 
  justify-content:flex-end;
  align-items:center;

  div{
    gap:30px;
    padding-right:20px;
    display:flex;
    align-items:center;

  }
  
  div p a{     
   color:#B3B3B3;
    text-decoration:none;
    font-size:15px;
    font-weight:bold;
  }
  div p a:hover{
    color:#F6F6F6;
    text-decoration:none;
    font-size:16px;
    cursor: default;

  }
  }
   button{
    color:#222;
    background-color:#FfFfFf;
    padding: 15px 30px;
    gap:10px;
    border-radius:30px;
    font-size:15px;
    font-weight:bold;
  }

  button:hover{
    background-color:#F6F6F6;
    transform:scale(1.05);
  }

  button a {
    color:#222;
    cursor:default;
    text-decoration:none;
  }

  `

  export const Section = styled.section`
      div{
        display:flex;
        flex-direction:column;
      }
      header{
        width:100%;
        background-color:#1D1D1D;
        padding: 20px 25px;
        display:flex;
        justify-content:space-between;
        align-items:center;
      } 
      a{
        color:#FFF;
        text-decoration:none;
        font-size:22px;
        font-weight:bold;
        

      }
      a:hover{
        text-decoration:underline; 
     

      }
      
      p a {
        color:#B3B3B3;
        font-size:14px;
        font-weight:bold;
      
      }

      section{
        background-color:#181818;
        min-height:100%;
        display:flex; 
        flex-wrap:wrap;
        align-items:center; 
      }

      `


import styled from "styled-components";


export const Div = styled.div`
    display:flex;
    flex-direction:column;
     ` 
export const Header = styled.header`
width:100%;
height:63px;
background-color:#090909;
display:flex; 
justify-content:space-between;
align-items:center;

input{
  margin-left:70px;
  border-radius:30px;
  width:20%;
  padding:10px 20px;
  outline:none; 
  border:none;
  font-size:14px;
}

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
    cursor: default;
  }
  div p a:hover{
    color:#F6F6F6;
    text-decoration:none;
    font-size:16px;

  } 
}
button{
  background-color:#FfFfFf;
  padding: 15px 30px;
  gap:10px;
  border-radius:30px;
  font-size:15px;
  font-weight:bold;
}

button:hover{
  transform:scale(1.05);
  background-color:#F6F6F6;
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
  background-color:#181818;
} 

header h2{
  color:#f1f1f1;
  padding-top:60px;
  padding-left:30px;
}

section{
  background-color:#181818;
  min-height:100%;
  display:flex; 
  flex-wrap:wrap;
  align-items:center; 
}

`

import styled from "styled-components"

const Div = styled.div`
    position:relative;
    padding:10px;
    padding-left:35px;
    
    
    div:hover{
      background-color:#252525;
    }`
 
const Item = styled.div`
    {
        cursor:pointer;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:15px 5px ;
        border-radius:10px;
        transition:0.3s ease;
      
    h1{
      position:absolute;
      top:30px;
      left:70px;
      color:#fff;
     
  }

  img{
      border-radius:10px;
      width:150px;
      height:150px;
      cursor:pointer;
  }


  h3{
    font-size:16px;
    color:#fff;
    margin-top:20px;
    
  }

  p{
    margin-top:10px;
    color:#B3B3B3;
    font-size:14px;


   
`


export const FocusItem = ({name, image,title,description}) => {
  return (
    <Div>
      <Item>
        <h1>{name}</h1>
        <img src= {`${image}`} alt = {name}
        />
        <h3>{title}</h3>
        <p>{description}</p>
  
        </Item>
    </Div>
  )
}

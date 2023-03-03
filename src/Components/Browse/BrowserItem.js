import styled from "styled-components"

const Div = styled.div`
    height:220px;
    position:relative;
    padding-left:10px;
    margin-left:20px;
    
    h2{
        position:absolute;
        top:27px;
        left:25px;
        color:#fff;
       
    }

    img{
        border-radius:10px;
        width:190px;
        height:190px;
        cursor:pointer;
    }

    img:hover:{
      cursor-pointer;
    }
    `
    
export const BrowserItem = ({ name, image }) => {
    return (
      <Div>
        <h2> {name}</h2>
        <img src={`${image}`} alt = {`${name}`}/>
      </Div>
    )
  }
  
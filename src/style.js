import styled from "styled-components"

export const Container = styled.div`
`
export const Header = styled.div`
  padding: 20px;
  width: 100vw;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 1;  
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const H1 = styled.h1`
`

export const Name = styled.div`
    h1{
        font-size: 25px;
        font-weight: 600;
        margin: 0 10px;
        
    }

    h4{
        font-size: 17px;
        font-weight: 200;
        margin: 0 10px;
        
    }
`

export const Navigation = styled.ul`
    list-style: none;    
    padding: 0;
    display: flex;    
    align-items: center;
    gap: 10px;
    font-size: 17px;
    font-weight: 200;
    margin-left: 50px;
    
`
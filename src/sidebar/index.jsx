import React from 'react'
import { Container } from './styles';
// import { Nav } from './styled';

// import { FaTimes } from 'react-icons/fa';
import Close from '../assets/images/icon-close.svg';


const Sidebar = ({ active }) => {
  
    const closeSidebar = () => {
        active(false)
    }

    return(
      
        <Container sidebar = {active}>
          <ul >
              <li >How we work</li>
              <li >Blog</li>
              <li >Account</li>
              <li ><button>View plans</button></li>
            </ul> 
          <img onClick={closeSidebar} src={Close} />
          
        </Container>
        
    )
}

export default Sidebar

import React,{useState}  from 'react'
import styled,{ keyframes } from 'styled-components'
import AdbIcon from '@material-ui/icons/Adb';
import CommentIcon from '@material-ui/icons/Comment';
import { zoomIn,fadeInUp, fadeInUpBig } from 'react-animations'

const zoomInAnimation = keyframes`${zoomIn}`
const fadeInUpAnimation = keyframes`${fadeInUp}`
function Home() {
    const [Open,setOpen] = useState(false);
    
    return (
        <Container>

           
           <HelpIcon onClick={() => setOpen(true)} >
  <img src="./images/magnifier.png"/>
           </HelpIcon>

           <Box show={Open} >
           
       


           <Upper>
 <Close onClick={() => setOpen(false)}>x</Close>

<Content>
  
<h1>IRIS</h1>
<h2>Hello 👋</h2>
<p1>I am Iris, a virtual Assistant</p1>
<p2>How may I help you?</p2>

</Content>

            </Upper>

           
           

<Lower>
<Bot>
   
    <AdbIcon className="Ic"/>

</Bot>

<Heading>
<h2>Frequently Asked Questions       <p>?</p> </h2>


</Heading>

<Btc>
<PatternOne>
Can I redeem my FB before the original term?

</PatternOne>
</Btc>

<Btc2>

<PatternTwo>
    How do I pay my credit card bill?
</PatternTwo>
</Btc2>

<Btc3>
<PatternThree>
    How can I get my Account Statement?
</PatternThree>
</Btc3>

<Btc4>
<PatternFour>
    What is the tenure of Fixed Deposit?
</PatternFour>
</Btc4>

<Btc5>
<Last>
<CommentIcon className="Message"/>
<p>Start a New Conversation</p>
</Last>
</Btc5>

</Lower>

<Bottom>


</Bottom>


            </Box>

        </Container>
    )
}

export default Home

const Container = styled.div `
height:100vh;
background-color:black;
display:flex;
align-items:end;
justify-content:right;

`




const HelpIcon = styled.div `
height:70px;
width:70px;
background-color:#fff;
border-radius:50%;
margin-bottom:40px;
margin-right:30px;
cursor:pointer;

display:flex;
align-items:center;
justify-content:center;


img{
    height:70%;
    width:70%;
    

}

`


const Box = styled.div `

background-color:#fff;



position: fixed;
    bottom: 100px;
    right: 20px;
    height: calc(100% - 120px);
    width: 376px;
    min-height: 250px;
    max-height: 704px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
    opacity: 1;
    border-radius: 8px;
   overflow:hidden;
    transition: width 200ms ease 0s, height ease 0s, max-height ease 0s;


transform: ${props => props.show? 'translateY(0)' : 'translateY(400%)'};
`



const Icon = styled.div `
display:flex;
justify-content:flex-end;
cursor:pointer;
font-size:30px
`



const Upper=styled.div `
height:300px;
background-color: #ff4e00;
background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);
animation:animationIn 2s;




`

const Content = styled.div `
color:white;
font-weight:800;
margin-top:-25px;

h1{
    display:flex;
    margin-left:50px;
}

h2{
    
        display:flex;
        margin-left:50px;
        margin-top:-15px;
    
}

p1{
    display:flex;
        margin-left:50px;
}

p2{
    display:flex;
    margin-left:50px;
     margin-top:10px;
}


`

const Close = styled.div `

display:flex;
justify-content:flex-end;
font-size:20px;
font-weight:bold;
margin-right:10px;
cursor:pointer;

`

const Lower = styled.div `





    background-color: rgb(255, 255, 255);
    border-radius: 6px;
    font-size: 14px;
   border-radius:8px;
    color: rgb(0, 0, 0);
   
    

    box-shadow: rgb(0 0 0 / 10%) 0px 4px 15px 0px, rgb(0 0 0 / 0%) 0px 1px 2px 0px, rgb(17 17 250 / 0%) 0px 2px 0px 0px inset;

    position: fixed;
    bottom: 0px;
    
    height: calc(100% - 220px);
    width: 346px;
    min-height: 250px;
  
    box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
    opacity: 1;
    border-radius: 8px;
    overflow-y:auto;
   margin:0 15px;
   margin-top:60px;
    margin-bottom: 17px;
    margin-right:10px;

  
  
`

const Bot = styled.div `
height:50px;
width:50px;
background-color: orange;


border-radius:40px;
position:fixed;
margin-top:-30px;
margin-left:30px;

.Ic{
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:5px;
    margin-top:2px;
    font-size:38px;
    color:white;
}


`

const Heading = styled.div `
display:flex;

align-items:center;
justify-content:center;

flex-shrink:1;





h2{
  display:flex;
  align-items:center;
  justify-content:center;
  min-width:20vw;
    font-size:14.8px;
    font-weight:700;
   margin-left:-30px;

   

   p{
    color:orange;
    font-weight:800;
   
    margin-left:20px;
}


   
}







`



const PatternOne = styled.div `

margin-top:1px;
display:flex;
align-items:center;
justify-content:center;
min-width:22vw;

height: 50px;

margin-left:15px;
margin-right:18px;
margin-top:10px;
    margin-bottom: 10px;
    background-color: rgb(255, 255, 255);
    border-radius: 3px;
    font-size: 13px;
    line-height: 1.4;
    color: rgb(0, 0, 0);
    overflow-y: auto;
    
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 15px 0px, rgb(0 0 0 / 10%) 0px 1px 2px 0px, rgb(17 17 250 / 50%) 0px 2px 0px 0px inset;
    transition: all 0.3s ease-out 0s;
}
animation: 3s zoomIn;
`

const PatternTwo = styled.div `
display:flex;
align-items:center;
justify-content:center;
min-width:22vw;
height: 50px;
margin-left:15px;
margin-right:18px;
margin-top:20px;
    margin-bottom: 10px;
    background-color: rgb(255, 255, 255);
    border-radius: 3px;
    font-size: 14px;
    line-height: 1.4;
    color: rgb(0, 0, 0);
    overflow-y: auto;
    
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 15px 0px, rgb(0 0 0 / 10%) 0px 1px 2px 0px, rgb(17 17 250 / 50%) 0px 2px 0px 0px inset;
    transition: all 0.3s ease-out 0s;
}
`


const PatternThree = styled.div `
display:flex;
align-items:center;
justify-content:center;
min-width:22vw;

height: 50px;
margin-left:15px;
margin-right:18px;
margin-top:20px;
    margin-bottom: 10px;
    background-color: rgb(255, 255, 255);
    border-radius: 3px;
    font-size: 14px;
    line-height: 1.4;
    color: rgb(0, 0, 0);
    overflow-y: auto;
  
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 15px 0px, rgb(0 0 0 / 10%) 0px 1px 2px 0px, rgb(17 17 250 / 50%) 0px 2px 0px 0px inset;
    transition: all 0.3s ease-out 0s;
}

`

const PatternFour = styled.div `
display:flex;
align-items:center;
justify-content:center;
min-width:22vw;

height: 50px;
margin-left:15px;
margin-top:20px;
margin-right:18px;
    margin-bottom: 1px;
    background-color: rgb(255, 255, 255);
    border-radius: 3px;
    font-size: 14px;
    line-height: 1.4;
    color: rgb(0, 0, 0);
    overflow-y: auto;
  
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 15px 0px, rgb(0 0 0 / 10%) 0px 1px 2px 0px, rgb(17 17 250 / 50%) 0px 2px 0px 0px inset;
    transition: all 0.3s ease-out 0s;
}

x

`

const Last = styled.div `
display:flex;
align-items:center;
justify-content:center;
border: 1px solid #000;
background-color: rgb(255, 255, 255);
border-radius: 50px;
font-size: 14px;
line-height: 1.4;



box-shadow: rgb(0 0 0 / 30%) 0px 4px 15px 0px, rgb(0 0 0 / 5%) 0px 1px 2px 0px, rgb(17 17 250 / 0%) 0px 2px 0px 0px inset;
transition: all 0.3s ease-out 0s;

margin:30px 30px;

p{
    font-weight:800;
    margin-left:10px;
}


`







const Bottom = styled.div `



`


const Btc = styled.div `

animation:5s ${zoomInAnimation};
`

const Btc2 = styled.div `

animation:6s ${zoomInAnimation};
`

const Btc3 = styled.div `

animation:7s ${zoomInAnimation};

`

const Btc4 = styled.div `

animation:8s ${zoomInAnimation};
`

const Btc5 = styled.div `

animation:9s ${fadeInUpAnimation};
`





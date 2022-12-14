import styled from "styled-components";
import { motion } from "framer-motion"

export const HomeContainer = styled(motion.div)`
`

export const HomeContent = styled.div`
  max-width:1140px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin:0 auto;
  padding:40px 0;
`

export const HomeLogo = styled.div`
    > img {
      width:70px;
    }
`

export const HomeTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size:30px;
  color: white;
`

export const HomeSubtitle = styled.div`
  color:white;
  font-family: "Open Sans", sans-serif;
  padding-top:15px;
`

export const HomeForm = styled.div`

`

import React from 'react'
import { CtSpiral, ImgSpiral } from './Spiral.styled';
import spiral from '../../assets/img/notebook.svg';

function Spiral() {
  return (
    <CtSpiral>
      <ImgSpiral imageUrl={spiral}/>
    </CtSpiral>
  )
}

export default Spiral
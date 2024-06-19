"use client";

//import { useEffect } from 'react';

import { useState } from "react";
//import img from "../../../public/developer.png";
import { StaticImageData } from "next/image";


function Test() {

  //const [ first, setfirst ] = useState("Hola....")
  //const [ imagen, setMagen] = useState<StaticImageData| null>(null)
/*
  function sumar(a: number, b: number): number {


    const resultado = a + b;
    console.log('se muestra',resultado);
    return resultado
  } 


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMagen(img);
    setfirst("Imagen actualizada");
    console.log(setfirst);
  }*/


/* 
  useEffect(() => {
    sumar(4,6);
  }, [])
  
 */

  return (
          <section>           
            <p></p>
            {/* {imagen && <img src={imagen.src} alt="Developer" />} */}
            <button /*onClick={handleClick}*/>
              
            </button>
          </section>
  )
}

export default Test
alert("Bienvenidos a Indumentaria Shoes!");
    
      let numero;

      let eleccion;
      let eleccion2;
      let eleccion3;
      let eleccion4;
      let eleccion5;

      let opcion;
      let opcion2;
      let opcion3;
      let opcion4;
      let opcion5;
        
      function zapatillas(){
         numero = parseInt(prompt("Seleccione su marca\n 1-Nike\n 2-Adidas\n 3-Puma\n 4-Vans\n 5-Lecoq"));
        }

      zapatillas();

         while(isNaN(parseInt(numero))){ 
          alert("No ingresaste un numero");
          zapatillas()
        }





        //NIKE
        if(numero==1){
           eleccion = parseInt(prompt("Seleccione su modelo\n 1-Nike Air Max\n 2-Nike Air Force\n 3-Nike Mercurial"));
        }
                 if(eleccion==1){
                 opcion = parseInt(prompt("Seleccionaste modelo Nike Air Max, desea añadir al carrito? \n 1-Si\n 2-No"));
            }
                 if(opcion==1){
                  alert("Añadido al carrito.");
                  
                }
                 if(opcion==2){
                  alert("Muchas gracias!");
                  sleep ();
                }
                 if(eleccion==2){
                  opcion = parseInt(prompt("Seleccionaste modelo Nike Air Force, desea añadir al carrito? \n 1-Si\n 2-No"));
            }    
                 if(opcion==1){
                  alert("Añadido al carrito.");
                  
                }
                if(opcion==2){
                  alert("Muchas gracias!");
                  sleep ();
                }
                 if(eleccion==3){
                  opcion = parseInt(prompt("Seleccionaste modelo Nike Mercurial, desea añadir al carrito? \n 1-Si\n 2-No"));
            } 
                 if(opcion==1){
                  alert("Añadido al carrito.");
                  
                 
                }
                 if(opcion==2){
                  alert("Muchas gracias!");
                  sleep ();
                }
                 
                

        //ADIDAS
        if(numero==2){
           eleccion2 = parseInt(prompt("Seleccione su modelo\n 1-Adidas Forum\n 2-Adidas Superstar\n 3-Adidas Running"));
        }
                 if(eleccion2==1){
                 opcion2 = parseInt(prompt("Seleccionaste modelo Adidas Forum, desea añadir al carrito? \n 1-Si\n 2-No"));
            } 
                 if(opcion2==1){
                 alert("Añadido al carrito.");
                 
            }
                 if(opcion2==2){
                 alert("Muchas gracias!");
                 sleep ();
            }
                 if(eleccion2==2){
                 opcion = parseInt(prompt("Seleccionaste modelo Adidas Superstar, desea añadir al carrito? \n 1-Si\n 2-No"));
        } 
                 if(opcion2==1){
                 alert("Añadido al carrito.");
                 
            }
                 if(opcion2==2){
                    alert("Muchas gracias!");
                    sleep ();
            
            }
                 if(eleccion2==3){
                 opcion = parseInt(prompt("Seleccionaste modelo Adidas Running, desea añadir al carrito? \n 1-Si\n 2-No"));
        } 
                 if(opcion2==1){
                 alert("Añadido al carrito.");
                
            }

                 if(opcion2==2){
                  alert("Muchas gracias!");
                  sleep ();
            }
        

        //PUMA
        if(numero==3){
           eleccion3 = parseInt(prompt("Seleccione su modelo\n 1-Puma R78\n 2-Puma X-Ray\n 3-Puma Graviton"));
        }
                 if(eleccion3==1){
                 opcion3 = parseInt(prompt("Seleccionaste modelo Puma R78, desea añadir al carrito? \n 1-Si\n 2-No"));
        } 
                 if(opcion3==1){
                 alert("Añadido al carrito.");
                 
            }
                 if(opcion3==2){
                  alert("Muchas gracias!");
                  sleep ();
            }
                 if(eleccion3==2){
                 opcion3 = parseInt(prompt("Seleccionaste modelo Puma X-Ray, desea añadir al carrito? \n 1-Si\n 2-No"));
        } 
                 if(opcion3==1){
                 alert("Añadido al carrito.");
                 
            }
                 if(opcion3==2){
                  alert("Muchas gracias!");
                  sleep ();
            }
                 if(eleccion3==3){
                 opcion3 = parseInt(prompt("Seleccionaste modelo Puma Graviton, desea añadir al carrito? \n 1-Si\n 2-No"));
        } 
                 if(opcion3==1){
                 alert("Añadido al carrito.");
                 
            }
                 if(opcion3==2){
                  alert("Muchas gracias!");
                  sleep ();
            }


        
        //VANS
        if(numero==4){
           eleccion4 = parseInt(prompt("Seleccione su modelo\n 1-Vans Old Skool\n 2-Vans Plataforma"));
        }
                 if(eleccion4==1){
                 opcion4 = parseInt(prompt("Seleccionaste modelo Vans Old Skool, desea añadir al carrito? \n 1-Si\n 2-No"));
            } 
                 if(opcion4==1){
                  alert("Añadido al carrito.");
                  
            }
                 if(opcion4==2){
                  alert("Muchas gracias!");
                  sleep ();
            }
                 if(eleccion4==2){
                 opcion4 = parseInt(prompt("Seleccionaste modelo Vans Plataforma, desea añadir al carrito? \n 1-Si\n 2-No"));
        } 
                 if(opcion4==1){
                  alert("Añadido al carrito.");
                  
            }
                 if(opcion4==2){
                  alert("Muchas gracias!");
                  sleep ();
            }
                 
            


        //LECOQ
        if(numero===5){
           eleccion5 = parseInt(prompt("Seleccione su modelo\n 1-Lecoq Omega\n 2-Lecoq breakpoint"));
        }
                 if(eleccion5==1){
                 opcion5 = parseInt(prompt("Seleccionaste modelo Lecoq Omega, desea añadir al carrito? \n 1-Si\n 2-No"));
            } 
                 if(opcion5==1){
                 alert("Añadido al carrito.");
                 
            }
                 if(opcion5==2){
                  alert("Muchas gracias!");
                  sleep ();
            }
                 if(eleccion5==2){
                 opcion5 = parseInt(prompt("Seleccionaste modelo Lecoq Breakpoint, desea añadir al carrito? \n 1-Si\n 2-No"));
        } 
                 if(opcion5==1){
                  alert("Añadido al carrito.");
                  
            }
                 if(opcion5===2){
                  alert("Muchas gracias!");
                  sleep();
            }            


     let direccion = prompt("Direccion de envio:");
     let nombre = prompt("Nombre y Apellido:");

      while(direccion != "ESC" ){

      alert = confirm("El usuario ingresó" + "\n Calle: " + direccion + "\n Nombre completo: " + nombre);
      alert = confirm(" Valor de producto: $30.000\n Valor de envio: $2.500\n Total de compra: $32.500");
      alert = confirm("Direccion de envio: " + direccion + "\n Nombre: " + nombre +"\nTotal de su compra: $32.500");
      sleep ();
    }


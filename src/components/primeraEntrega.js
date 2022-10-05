import {useState} from 'react'


export const Js=()=>{
    const [pet,setPet]=useState("")
    const [book,setBook]=useState({})

    const user={
        nombre:"Luis Emanuel",
        apellido:"Suares",
        libros:[{autor:"No se", libro:"Harry Potter" }],
        mascotas:["gato","perro","loro"],
    }
    
    const getFullName=()=>{
        const fullName=user.nombre+" "+user.apellido
        console.log(fullName)
    }

    const countMascotas=()=>{
        const petCounter=user.mascotas.length
        console.log(petCounter)
    }
    
    const handleChange=(e)=>{
        const value=e.target.value
        setPet(value)
    }
    
    const HandleBooksChange=(e)=>{
        const { target } = e;
       const { name, value } = target; 
        const newValues = {
         [name]: value,
       }; 
       setBook({...newValues})
       console.log(book)
       
     }
    
     const getBookNames=()=>{
        user.libros.forEach(book =>console.log(book.libro))

     }

    const addBook=(e)=>{
        e.preventDefault()
        console.log(book)
        user.libros.push(book)
       console.log(user.libros)
    } 

    const addMascota=()=>{
        user.mascotas.push(pet)
        console.log(user.mascotas)
    }

    return (
        <div>
            <input onChange={handleChange} placeholder='Ingrese Mascota' id='pet'></input>
            <button onClick={addMascota}>AGREGAR MASCOTA</button>
            <button onClick={getFullName}>Obtener Nombre Completo</button>
            <button onClick={countMascotas}>Contar mascotas</button>
            <form onSubmit={addBook}>
            <input onChange={HandleBooksChange} required placeholder='Ingrese Autor' name='autor' ></input>
            <input onChange={HandleBooksChange} required placeholder='Ingrese Libro' name='libro'  ></input>
            <button type='submit'>AGREGAR libro</button>
            </form>
            <button onClick={getBookNames}>Ver Libros</button>
            
        </div>
    )

}


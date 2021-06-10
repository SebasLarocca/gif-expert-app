import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { getGifs } from './helpers/getGifs';




export const GifGrid = ({ category }) => {

    // el use effect, con el segundo argumento como un arreglo vacio, lo quehace es que no renderice de nuevo todo el componente cada vez que se llama a la funcion
    // useEffect( ()=>{
    //     getGifs( category ).then( imgs => setImages( imgs ) )
    // }, [ category ] );
    
    // const [images, setImages] = useState([]);

    const { data: images, loading } = useFetchGifs( category );

    return (

        <>
        <h3>{ category }</h3>
        
        { loading? <p className='animate__rotateIn' >Cargando...</p> : null }

        <div className='card-grid' >
            {/* <ol> */}
            
             {/* {images.map( (img) =>{ return <li key={img.id}>{img.title}<br></br><img src={img.url}></img><br></br></li>  } )} */}
                {images.map( img => <GifGridItem {...img} key={img.id} />  )}     
                   
            {/* </ol> */}
        </div>
        </>
    )
};

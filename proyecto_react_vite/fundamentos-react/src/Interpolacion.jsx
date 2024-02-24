/* La interpolación es a la inserción de valores dinámicos dentro de elementos JSX o cadenas de texto */
/* Estos valores se pasan a los elementos a través de llaves {} */


let titulo = "Un componente de React JS"
let claseSection = "seccion"

/* Acá declaro un componente que es un botón y en vez de exportarlo, lo uso dentro de otro componenete simplemente 
usandolo como si fuera una etiqueta más */
let MyButton = () =>{
    return <button>I'm a button</button>
}

export let UnComponente = () =>{
    return <>
            <section className={claseSection}>
                <h3>{titulo}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non commodi, officiis quas ipsam, ab facere eum incidunt minima qui, doloribus voluptate voluptas? Quia temporibus ipsa natus doloribus veniam, dolores labore cumque tenetur sint voluptatem quo accusamus asperiores. Eaque praesentium quos pariatur sed debitis consequuntur eum suscipit, aliquid voluptatum, exercitationem in nostrum repellendus impedit perferendis! Reiciendis nam laudantium molestiae explicabo animi!</p>
                <MyButton></MyButton>
            </section>
        </>
}



let claseTextoCentrado = "texto-centrado"
let texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, vitae!"
let imgPath = "https://picsum.photos/250/100"
let altImg = "Imagen de ejemplo"

export let Interpolacion = () =>{
    return  <>
                <h3>{titulo}</h3>
                <p className={claseTextoCentrado}>{texto}</p>
                <img src={imgPath} alt={`Alternativo: ${altImg}`} />
                <MyButton></MyButton>
            </>
}
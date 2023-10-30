import React from "react";
import Product from "./Product";

export default function ProductsGrid() {

    const data = [
        {
            name: "Letras 3D",
            img: "https://web.archive.org/web/20160705120508/http://coansa.com.mx/wp-content/uploads/2015/05/fastory.jpg" 
        },
        {
            name: "Cajas de luz",
            img: "https://web.archive.org/web/20160705114638/http://coansa.com.mx/wp-content/uploads/2015/05/esc.-praxair-2.jpg" 
        },
        {
            name: "Marquesinas",
            img: "https://web.archive.org/web/20170501171747/http://coansa.com.mx/wp-content/uploads/2015/05/BANREGIO-M.P.-3.jpg" 
        },
        {
            name: "Unipolares",
            img: "https://web.archive.org/web/20220517103944im_/https://coansa.com.mx/wp-content/uploads/2015/05/PRESTAMO-SUN-MALL-2-150x150.jpg" 
        },
        {
            name: "Interiores",
            img: "https://web.archive.org/web/20160705130643/http://coansa.com.mx/wp-content/uploads/2015/05/20140415_091958.jpg"
        },
        {
            name: "Tótems",
            img: "https://web.archive.org/web/20160705060908/http://coansa.com.mx/wp-content/uploads/2015/05/MUGUERZA-TOTEM-6.jpg"
        },
        {
            name: "Anuncios en serie",
            img: "https://web.archive.org/web/20160705120021/http://coansa.com.mx/wp-content/uploads/2015/05/1535696_198090660388956_1163458241_n.jpg"
        },
        {
            name: "Proyectos especiales",
            img: "https://web.archive.org/web/20160705130621/http://coansa.com.mx/wp-content/uploads/2015/05/DSCF0201-copia.jpg"
        },
        {
            name: "Señalamientos",
            img: "https://web.archive.org/web/20170502171556/http://coansa.com.mx/wp-content/uploads/2015/05/FOTO-008.jpg"
        },
    ]
    
    return (
        <section class="bg-white py-8 p-24">

        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">

            <nav id="store" class="w-full z-30 top-0 px-6 py-1">
                <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                    <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
				Nuestros productos
			</a>

                    <div class="flex items-center" id="store-nav-content">

                        <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                            </svg>
                        </a>

                        <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                            </svg>
                        </a>

                    </div>
              </div>
            </nav>
            {/*component for products */}
            {data.map((item) => (
                <Product name={item.name} img={item.img} />

            ))}
            <Product/>
            <Product/>
            <Product/>
            </div>
        </section>
    )
}
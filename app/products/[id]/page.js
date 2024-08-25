import Footer from "@/app/components/Footer";
import FocusCard from "@/app/components/FocusCard";
import Image from "next/image";
const ProductPage = ({params})=>{
    const {id} = params;
    const products = [
        {
            name : 'codebrew',
            links: "https://codebrew.news",
            des: "Byte size news",
            image: "https://salnet.xyz/codebrew.jpg",
            blur: true
        },
    ]

    // Find the product based on id
    const product = products.find(product => product.name === id);
    return(
        <>
            {product && (
                <>

                    <FocusCard
                                        index={'1'}
                                        links={product.links}
                                        name={product.name}
                                        des={'dfgfdg'}
                                        image={product.image}
                                        blur={'dfgfd'}
                    />

                


                </>
            )}
              <Footer productspage={'productspage'} />

        </>
    )
}
export default ProductPage;
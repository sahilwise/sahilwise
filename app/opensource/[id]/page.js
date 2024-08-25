import Footer from "@/app/components/Footer";
const ProductPage = ({params})=>{
    const {id} = params;
    const products = [
        {
            name : 'applemusicclone',
            title : "cool"
        },
        {
            name : 'instagramclone',
            title : "smart"

        }
    ]

    // Find the product based on id
    const product = products.find(product => product.name === id);
    return(
        <>
            {product && (
                <>
                    <p className="text-white">Name: {product.name}</p>
                    <p className="text-white">Title: {product.title}</p>
                </>
            )}
              <Footer opensourcepage={'opensourcepage'} />

        </>
    )
}
export default ProductPage;
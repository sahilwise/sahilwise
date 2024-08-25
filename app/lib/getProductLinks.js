const getProductsLinks = async()=>{
    const  result = await fetch('https://www.salnet.xyz/api/productslinks')
    return result.json()
}

export default getProductsLinks;
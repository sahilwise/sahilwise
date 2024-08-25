const getHomeLinks = async()=>{
    const  result = await fetch('https://www.salnet.xyz/api/homelinks')
    return result.json()
}

export default getHomeLinks;
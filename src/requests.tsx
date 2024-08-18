const getRequest = async (url: string) => {
    try{
        const res = await fetch(url)
        const data = await res.json()
        
        if(!res.ok){
            throw new Error(data.error)
        }

        return data
    } catch (error){
        return error
    }
}

export {getRequest}
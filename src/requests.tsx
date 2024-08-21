
const getRequest = async (url: string) => {
    try{
        const res = await fetch(url)
        const data = await res.json()
        
        if(!res.ok){
            throw new Error(data)
        }

        return data
    } catch (error){
        console.log(error)
        return false
    }
}

const postRequest = async (url:string, body:object) => {
    try{
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        const res = await fetch(url, configObj)

        const data = await res.json()

        if(!res.ok){
            throw new Error(data.error)
        }
        return data
    }catch(error){
        return error
    }

}

const patchRequest = async (url:string, body:object) => {
    try{
        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        const res = await fetch(url, configObj)

        const data = await res.json()

        if(!res.ok){
            throw new Error(data.error)
        }
        return data
    }catch(error){
        return error
    }

}

const deleteRequest = async (url:string) => {
    try{
        const configObj = {
            method: "DELETE"
        }
        const res = await fetch(url, configObj)

        const data = await res.json()

        if(!res.ok){
            throw new Error(data.error)
        }
        return data
    }catch(error){
        return error
    }
}

export {getRequest, postRequest, patchRequest, deleteRequest}
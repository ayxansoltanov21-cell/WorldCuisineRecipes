async function getData()
{
    try{
        const response=await fetch('https://dummyjson.com/recipes')
        if(!response.ok)
        {
            throw new Error('Something went wrong')
        }
        const data=await response.json()
        localStorage.setItem('Data',JSON.stringify(data))
        return data

    }catch(error)
    {
        console.log(error)
    }
}
export default getData;
const getWeather = async endpoint => {
    const res = await fetch("https://weather-api.mathisbarre.com/" + endpoint)
    if (!res.ok) {
        throw new Error()
    }
    return await res.json()
}

export default getWeather
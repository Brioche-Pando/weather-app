const getWeather = async () => {
    return await fetch("https://weather-api.mathisbarre.com/nantes")
        .then(res => res.json())
        .then(
            (result) => {
                return result
            },
            (error) => {
                return error
            }
        )
}

export default getWeather;
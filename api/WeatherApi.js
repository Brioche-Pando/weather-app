const getWeather = async () => {
    return await fetch("https://prevision-meteo.ch/services/json/nantes")
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
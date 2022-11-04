const getWeather = async endpoint => {
    return await fetch("https://weather-api.mathisbarre.com/" + endpoint)
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
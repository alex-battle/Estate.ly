import axios from 'axios'

export const findAllAgents = async () => {
    const allAgentsURL = 'localhost:3000/agents'
    const responseAllAgents = await axios.get(allAgentsURL)
    return responseAllAgents
}
export const findAllProperties = async () => {
    const allPropertyURL = 'localhost:3000/properties'
    const responseAllProperty = await axios.get(allPropertyURL)
    return responseAllProperty
}

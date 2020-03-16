import axios from 'axios'


const baseUrl = 'http://localhost:3000'

const api = axios.create({
    baseURL: baseUrl
})

export const loginUser = async (loginData) => {
    const resp = await api.post('/auth/login', loginData)
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  }
// _____________

export const findAllAgents = async () => {
    const allAgentsURL = 'http://localhost:3000/agents'
    const responseAllAgents = await axios.get(allAgentsURL)
    return responseAllAgents
}


export const readAgentById = async (id) => {
    let token = localStorage.getItem('token');
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get(`/agents/${id}`)
    return resp.data
}

export const updateAgent = async (id, data) => {
    let token = localStorage.getItem('token');
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.put(`/agents/${id}`, { agent: data })
    return resp.data
}
export const destroyAgent = async (id) => {
    console.log()
    let token = localStorage.getItem('token');
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const respo = await api.delete(`/agents/${id}`)
    return respo.data
}

export  const createAgent = async (data) => {
    let token = localStorage.getItem('token');
    api.defaults.headers.common.authorization = `Bearer ${token}`
    console.log(data, 'data')
    const resp = await api.post('/agents', { agent: data })
    return resp.data
}

export const findAllProperties = async () => {
    const allPropertyURL = 'http://localhost:3000/properties'
    const responseAllProperty = await axios.get(allPropertyURL)
    return responseAllProperty
}

export const readPropertiesById = async (id) => {
    let token = localStorage.getItem('token');
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get(`/propertiess/${id}`)
    return resp.data
}

export const updateProperties = async (id, data) => {
    let token = localStorage.getItem('token');
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.put(`/propertiess/${id}`, { properties: data })
    return resp.data
}
export const destroyProperties = async (id) => {
    console.log()
    let token = localStorage.getItem('token');
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.delete(`/propertiess/${id}`)
    return resp.data
}

export  const createProperties = async (data) => {
    let token = localStorage.getItem('token');
    api.defaults.headers.common.authorization = `Bearer ${token}`
    console.log(data, 'data')
    const resp = await api.post('/properties', { properties: data })
    return resp.data
  }


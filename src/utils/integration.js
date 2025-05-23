// Simple API integration utility
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000"

const integration = {
  get: async (url, options = {}) => {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw {
          status: response.status,
          message: errorData.message || `HTTP error! status: ${response.status}`,
          response: { status: response.status, data: errorData },
        }
      }

      return { data: await response.json() }
    } catch (error) {
      console.error("GET request failed:", error)
      throw error
    }
  },

  post: async (url, data = {}, options = {}) => {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        body: JSON.stringify(data),
        ...options,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw {
          status: response.status,
          message: errorData.message || `HTTP error! status: ${response.status}`,
          response: { status: response.status, data: errorData },
        }
      }

      return { data: await response.json() }
    } catch (error) {
      console.error("POST request failed:", error)
      throw error
    }
  },

  put: async (url, data = {}, options = {}) => {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        body: JSON.stringify(data),
        ...options,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw {
          status: response.status,
          message: errorData.message || `HTTP error! status: ${response.status}`,
          response: { status: response.status, data: errorData },
        }
      }

      return { data: await response.json() }
    } catch (error) {
      console.error("PUT request failed:", error)
      throw error
    }
  },

  delete: async (url, options = {}) => {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw {
          status: response.status,
          message: errorData.message || `HTTP error! status: ${response.status}`,
          response: { status: response.status, data: errorData },
        }
      }

      return { data: await response.json() }
    } catch (error) {
      console.error("DELETE request failed:", error)
      throw error
    }
  },
}

export default integration

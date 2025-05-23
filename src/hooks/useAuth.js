"use client"

import { useState, useEffect } from "react"

// Hook to check authentication status
export const useAuthStatus = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem("authToken")

        if (!token) {
          setUser(null)
          setLoading(false)
          return
        }

        // For demo purposes, we'll parse the token to get user info
        // In a real app, you would validate this token with your backend
        try {
          // Simple parsing of JWT token (this is a basic implementation)
          const base64Url = token.split(".")[1]
          const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
          const jsonPayload = decodeURIComponent(
            atob(base64)
              .split("")
              .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
              .join(""),
          )

          const userData = JSON.parse(jsonPayload)
          setUser(userData)
        } catch (error) {
          console.error("Error parsing token:", error)
          // If token is invalid, clear it
          localStorage.removeItem("authToken")
          setUser(null)
        }
      } catch (error) {
        console.error("Auth check error:", error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  return { user, loading }
}

// Hook for handling logout
export const useLogout = () => {
  const logout = () => {
    // Clear auth token
    localStorage.removeItem("authToken")

    // Redirect to login page
    window.location.href = "/login"
  }

  return logout
}

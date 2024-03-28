import { createContext, useEffect, useState } from "react"
import { api } from "../services/api"

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post(
        "/session",
        { email, password },
        { withCredentials: true },
      )
      const { user } = response.data

      localStorage.setItem("@rocketmovie:user", JSON.stringify(user))

      setData({ user })
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert("Não foi possível entrar!")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketmovie:user")
    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)
        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
      }
      await api.put("/users", user)
      localStorage.setItem("@rocketmovie:user", JSON.stringify(user))
      setData({ user })
      alert("Perfil atualizado com sucesso!")
    } catch (err) {
      if (err.repsonse) {
        alert(err.response.data.message)
      } else {
        alert("Não foi possível atualizar o perfil!")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketmovie:user")

    if (user) {
      setData({
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, user: data.user, signOut, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }

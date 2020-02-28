import fetch from "node-fetch"

const url = "http://localhost:5000"
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
}

export const getUser = async () => {
  try {
    const res = await fetch(`${url}/api/user`, { method: "GET", headers })
    if (res.status >= 200 && res.status < 300) {
      const data = await res.json()
      return data
    }
  } catch (err) {
    console.log(err)
  }
}

import React from "react"
import Headers from "./Headers"
import Error from "./Error"
import Chart from "./Chart"
import Repositories from "./Repositories"
import GhPolyglot from "gh-polyglot"
import Footer from "./Footer"

const GitProfile = (props) => {
  const [gitUser, setGitUser] = React.useState(null)
  const [gitRepositories, setRepositories] = React.useState(null)
  const [languageData, setLanguageData] = React.useState(null)
  const [followers, setfollowers] = React.useState(null)
  const [following, setFollowing] = React.useState(null)
  const [error, setError] = React.useState({ active: false, type: 200 })

  const params = new URLSearchParams(props.location.search)
  const DEFAULT_QUERY = params.get("id")
  const API = "https://api.github.com/users/"

  //get language statistics
  const getLangData = React.useCallback(() => {
    const me = new GhPolyglot(DEFAULT_QUERY)

    me.userStats((err, stats) => {
      if (err) {
        console.log({ Error: err.message })
        setError({ active: true, type: 400 })
      }
      setLanguageData(stats)
    })
  }, [DEFAULT_QUERY])

  //get Followers
  const getFollowers = React.useCallback(async () => {
    const FOLLOWERS = "/followers"

    await fetch(API + DEFAULT_QUERY + FOLLOWERS)
      .then((response) => {
        if (response.status === 404) {
          setError({ active: true, type: 404 })
        }

        if (response.status === 403) {
          setError({ active: true, type: 403 })
        }

        return response.json()
      })
      .then((data) => {
        setfollowers(data)
      })
      .catch((error) => {
        setError({ active: true, type: 400 })
        console.error("Error : ", error.message)
      })
  }, [DEFAULT_QUERY])

  //get Following
  const getFollowing = React.useCallback(async () => {
    const FOLLOWERS = "/following"

    await fetch(API + DEFAULT_QUERY + FOLLOWERS)
      .then((response) => {
        if (response.status === 404) {
          setError({ active: true, type: 404 })
        }

        if (response.status === 403) {
          setError({ active: true, type: 403 })
        }

        return response.json()
      })
      .then((data) => {
        setFollowing(data)
      })
      .catch((error) => {
        setError({ active: true, type: 400 })
        console.error("Error : ", error.message)
      })
  }, [DEFAULT_QUERY])

  //get user data
  const getUserData = React.useCallback(async () => {
    await fetch(API + DEFAULT_QUERY)
      .then((response) => {
        if (response.status === 404) {
          setError({ active: true, type: 404 })
        }

        if (response.status === 403) {
          setError({ active: true, type: 403 })
        }
        return response.json()
      })
      .then((data) => {
        setGitUser(data)
      })
      .catch((error) => {
        setError({ active: true, type: 400 })
        console.error("Error : ", error.message)
      })
  }, [DEFAULT_QUERY])

  const getRepositories = React.useCallback(async () => {
    const API =
      `https://api.github.com/users/` + DEFAULT_QUERY + `/repos?per_page=100`

    await fetch(API)
      .then((response) => {
        if (response.status === 404) {
          setError({ active: true, type: 404 })
        }

        if (response.status === 403) {
          setError({ active: true, type: 403 })
        }
        return response.json()
      })
      .then((data) => {
        setRepositories(data)
      })
      .catch((error) => {
        setError({ active: true, type: 400 })
        console.error("Error : ", error.message)
      })
  }, [DEFAULT_QUERY])

  React.useEffect(() => {
    getLangData()
    getUserData()
    getRepositories()
    getFollowers()
    getFollowing()
  }, [getLangData, getFollowers, getFollowing, getUserData, getRepositories])

  return (
    <div>
      {error && error.active ? (
        <Error error={error} />
      ) : (
        <div className="h-screen">
          {gitUser && followers && (
            <Headers
              users={gitUser}
              error={error}
              followers={followers}
              following={following}
            />
          )}

          {languageData && gitRepositories && (
            <Chart langData={languageData} repoData={gitRepositories} />
          )}

          {gitRepositories && <Repositories repoData={gitRepositories} />}

          {languageData && gitRepositories && <Footer />}
        </div>
      )}
    </div>
  )
}

export default GitProfile

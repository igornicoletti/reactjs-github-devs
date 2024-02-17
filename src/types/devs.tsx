export type RepoListProps = {
  id: number
  name: string
  full_name: string
  description: string
  stargazers_count: number
  homepage: string
}

export type DevListProps = {
  id: number
  login: string
  avatar_url: string
  name: string
  company: string
  blog: string
  location: string
  email: string
  bio: string
  followers: number
  following: number
  public_repos: number
}

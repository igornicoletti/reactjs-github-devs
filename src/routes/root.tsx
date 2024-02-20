import axios from 'axios'
import { Dev } from '../components/dev'
import { Repo } from '../components/repo'
import { DevListProps } from '../types/dev'
import { RepoListProps } from '../types/repo'
import { FormEvent, useEffect, useState } from 'react'
import { variantsHome, variantsForm } from '../styles/variants'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const { form, field, write, magnifying, add } = variantsForm()
const { base, header, container, content, title, card, repo, dev } = variantsHome()

export function Root() {
  const [user, setUser] = useState<string>('')
  const [input, setInput] = useState<string>('')
  const [devs, setDevs] = useState<DevListProps>()
  const [repos, setRepos] = useState<RepoListProps[]>([])

  const handleSearch = (e: FormEvent<HTMLFormElement>, user: string) => {
    e.preventDefault()
    setUser(user)
    setInput('')
  }

  useEffect(() => {
    if (user) {
      axios.get<DevListProps>(`https://api.github.com/users/${user}`).then(res => setDevs(res.data))
      axios.get<RepoListProps[]>(`https://api.github.com/users/${user}/repos`).then(res => setRepos(res.data))
    }
  }, [user])

  return (
    <div className={base()}>
      <div className={header()}>
        <div className={container()}>
          <div className={content()}>
            <h1 className={title()}>GitHub Devs</h1>
          </div>
        </div>
      </div>
      <div className={container()}>
        <div className={content()}>
          <form className={form()} onSubmit={(e) => handleSearch(e, input)}>
            <div className={field()}>
              <input className={write()} onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Pesquisar desenvolvedor' />
              <MagnifyingGlassIcon className={magnifying()} />
            </div>
            <button className={add()} disabled={!input ? true : false} type='submit'>
              Buscar
            </button>
          </form>
          <div className={card()}>
            {devs &&
              <div className={dev()}>
                <Dev devs={devs} />
              </div>
            }
            {repos.length >= 1 &&
              <ul className={repo()}>
                {repos.map(repo => (
                  <Repo key={repo.id} repo={repo} />
                ))}
              </ul>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
import axios from 'axios'
import { useState } from 'react'
import { Form } from 'react-router-dom'
import { Dev } from '../components/dev'
import { Repo } from '../components/repo'
import { DevListProps } from '../types/dev'
import { RepoListProps } from '../types/repo'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { variantsHome, variantsForm, variantsNot } from '../styles/variants'

const { not, first, work } = variantsNot()
const { form, field, write, magnifying, add } = variantsForm()
const { base, header, container, content, title, card, repo, dev } = variantsHome()

type Props = {
  user: string
}

export function Root() {
  const { register, handleSubmit, watch, reset } = useForm<Props>()

  const [devs, setDevs] = useState<DevListProps>()
  const [repos, setRepos] = useState<RepoListProps[]>([])

  const handleSubmitSearch: SubmitHandler<Props> = async ({ user }) => {
    await axios.get<DevListProps>(`https://api.github.com/users/${user}`)
      .then((response) => setDevs(response.data))
    await axios.get<RepoListProps[]>(`https://api.github.com/users/${user}/repos`)
      .then((response) => setRepos(response.data))
    reset()
  }

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
          <Form className={form()} onSubmit={handleSubmit(handleSubmitSearch)}>
            <div className={field()}>
              <input className={write()} id='user' {...register('user')} placeholder='Pesquisar desenvolvedor' />
              <MagnifyingGlassIcon className={magnifying()} />
            </div>
            <button className={add()} disabled={!watch('user')} type='submit'>
              <span>Buscar</span>
            </button>
          </Form>
          {devs && repos.length > 0 ? (
            <div className={card()}>
              <div className={dev()}>
                <Dev devs={devs} />
              </div>
              <ul className={repo()}>
                {repos.map((repo) => (
                  <Repo key={repo.id} repo={repo} />
                ))}
              </ul>
            </div>
          ) : (
            <div className={not()}>
              <p className={first()}>Encontre desenvolvedores em GitHub Devs</p>
              <p className={work()}>GitHub Devs é uma ferramenta de pesquisa para encontrar usuários e repositórios no GitHub</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
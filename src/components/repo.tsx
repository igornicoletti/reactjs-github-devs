import { Link } from 'react-router-dom'
import { RepoListProps } from '../types/devs'
import { variantsRepo } from '../styles/variants'
import { ArrowTopRightOnSquareIcon, LinkIcon, StarIcon } from '@heroicons/react/24/outline'

const { wrapper, info, login, bio, list, item, divide, icon } = variantsRepo()

type RepoProps = {
  repo: RepoListProps
}

export const Repo = ({ repo }: RepoProps) => {
  return (
    <li className={wrapper()}>
      <Link className={info()} to={`https://github.com/${repo.full_name}`} target='_blank'>
        <h2 className={login()}>{repo.name}</h2>
        <ArrowTopRightOnSquareIcon className={icon()} />
      </Link>
      <p className={bio()}>{repo.description}</p>
      <div className={list()}>
        <div className={item()}>
          <StarIcon className={icon()} />
          <span>{repo.stargazers_count || 0}</span>
        </div>
        {repo.homepage &&
          <>
            <span className={divide()}>•</span>
            <Link className={item()} to={repo.homepage} target='_blank'>
              <LinkIcon className={icon()} />
              <span>{repo.homepage}</span>
            </Link>
          </>
        }
      </div>
    </li>
  )
}
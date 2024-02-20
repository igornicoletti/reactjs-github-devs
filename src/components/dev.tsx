import { Link } from 'react-router-dom'
import { DevListProps } from '../types/dev'
import { variantsDev } from '../styles/variants'
import { BuildingOfficeIcon, CommandLineIcon, EnvelopeIcon, HeartIcon, LinkIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const { wrapper, info, avatar, github, login, arrouba, bio, specs, list, item, icon, profile } = variantsDev()

type DevProps = {
  devs: DevListProps
}

export const Dev = ({ devs }: DevProps) => {
  return (
    <>
      <div className={wrapper()}>
        <div className={info()}>
          <img className={avatar()} src={devs.avatar_url} alt={devs.name} />
          <div className={github()}>
            <h2 className={login()}>{devs.name}</h2>
            <p className={arrouba()}>@{devs.login}</p>
          </div>
        </div>
        {devs.bio && <p className={bio()}>{devs.bio}</p>}
        <div className={specs()}>
          <ul className={list()}>
            <li className={item()}>
              <UserGroupIcon className={icon()} />
              <span>{devs.following || 0} seguindo</span>
            </li>
            <li className={item()}>
              <HeartIcon className={icon()} />
              <span>{devs.followers || 0} seguidores</span>
            </li>
            <li className={item()}>
              <CommandLineIcon className={icon()} />
              <span>{devs.public_repos || 0} repositório público</span>
            </li>
          </ul>
          <ul className={list()}>
            {devs.company &&
              <li className={item()}>
                <BuildingOfficeIcon className={icon()} />
                <span>{devs.company}</span>
              </li>
            }
            {devs.location &&
              <li className={item()}>
                <MapPinIcon className={icon()} />
                <span>{devs.location}</span>
              </li>
            }
            {devs.email &&
              <li className={item()}>
                <EnvelopeIcon className={icon()} />
                <span>{devs.email}</span>
              </li>
            }
            {devs.blog &&
              <li className={item()}>
                <LinkIcon className={icon()} />
                <span>{devs.blog}</span>
              </li>
            }
          </ul>
        </div>
      </div>
      <Link className={profile()} to={`https://github.com/${devs.login}`} target='_blank'>
        Ver perfil GitHub
      </Link>
    </>
  )
}
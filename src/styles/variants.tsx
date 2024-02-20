import { tv } from 'tailwind-variants'

export const variantsError = tv({
  slots: {
    base: 'relative h-full min-h-screen w-full grid content-center',
    container: 'w-full max-w-screen-xl mx-auto px-6',
    content: 'flex flex-col items-center text-center gap-16 py-16',
    wrapper: 'flex flex-col gap-4',
    status: 'text-xl',
    title: 'text-3xl font-semibold',
    message: 'text-sm',
    back: 'flex items-center text-sm gap-2',
    icon: 'size-4',
  }
})

export const variantsHome = tv({
  slots: {
    base: 'relative h-full min-h-screen w-full grid content-start overflow-x-hidden',
    header: 'w-full border-b border-b-dracula-line bg-dracula-line/10',
    container: 'w-full max-w-screen-2xl mx-auto px-6',
    content: 'flex flex-col gap-6 pt-6 pb-12',
    card: 'flex flex-col lg:flex-row items-start gap-2 md:gap-4 pt-12 pb-4',
    title: 'text-3xl font-semibold text-center uppercase',
    dev: 'w-full lg:max-w-xs flex flex-col gap-2 md:gap-4',
    repo: 'w-full flex flex-col rounded px-6 border border-dracula-line divide-y divide-dracula-line bg-dracula-line/10',
  }
})

export const variantsForm = tv({
  slots: {
    form: 'w-full flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-center -mt-12',
    field: 'relative w-full h-12',
    write: 'w-full h-full py-2 pl-12 pr-4 rounded bg-dracula-dark border border-dracula-line hover:border-white focus:border-white placeholder:text-dracula-line focus:outline-none transition ease-in-out duration-300 peer',
    magnifying: 'absolute size-6 bottom-3 left-3 text-dracula-line peer-hover:text-white peer-focus:text-white transition ease-in-out duration-300',
    add: 'w-full md:max-w-44 flex items-center justify-center px-4 h-12 uppercase rounded font-medium text-dracula-line bg-dracula-cyan disabled:bg-dracula-line disabled:text-white disabled:cursor-not-allowed disabled:scale-100 active:scale-95 transition ease-in-out duration-300'
  }
})

export const variantsDev = tv({
  slots: {
    wrapper: 'w-full flex flex-col gap-8 px-4 py-6 rounded border border-dracula-line bg-dracula-line/10',
    info: 'flex items-center gap-4',
    avatar: 'inline-block h-14 w-14 rounded-full',
    github: 'flex flex-col',
    login: 'text-xl font-medium uppercase',
    arrouba: 'text-sm text-dracula-cyan',
    bio: 'font-medium',
    specs: 'flex flex-col gap-6',
    list: 'flex flex-col gap-2 text-sm',
    item: 'flex items-center gap-2',
    icon: 'size-4',
    profile: 'w-full flex items-center justify-center px-6 h-12 uppercase rounded font-medium bg-dracula-line/10 hover:bg-dracula-cyan hover:text-dracula-dark border border-dracula-cyan active:scale-95 transition ease-in-out duration-300',
  }
})

export const variantsRepo = tv({
  slots: {
    wrapper: 'flex flex-col gap-4 py-6',
    info: 'flex items-center gap-4',
    login: 'text-xl font-medium uppercase',
    bio: 'font-medium',
    list: 'flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm text-dracula-cyan',
    item: 'flex items-center gap-2',
    divide: 'text-dracula-line hidden md:block',
    icon: 'size-4',
  }
})
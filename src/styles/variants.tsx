import { tv } from 'tailwind-variants'

export const variantsError = tv({
  slots: {
    base: 'relative h-full min-h-screen w-full grid content-center',
    container: 'w-full max-w-screen-xl mx-auto px-2',
    content: 'flex flex-col items-center text-center',
    status: 'text-xl font-medium pb-2',
    title: 'text-3xl md:text-5xl font-medium pb-4',
    message: 'text-sm pb-8',
    back: 'text-xs uppercase',
  }
})

export const variantsHome = tv({
  slots: {
    base: 'relative h-full min-h-screen w-full grid content-start',
    header: 'w-full border-b border-b-dracula-line bg-dracula-line/10',
    container: 'w-full max-w-screen-2xl mx-auto px-6',
    contentSup: 'flex flex-col lg:flex-row items-center gap-8 py-6',
    contentSub: 'flex flex-col lg:flex-row items-start gap-8 py-16',
    title: 'w-full text-center lg:text-left tracking-wide max-w-72 text-4xl font-medium',
    repo: 'w-full flex flex-col rounded px-6 border border-dracula-line divide-y divide-dracula-line bg-dracula-line/10',
    owner: 'w-full lg:max-w-72 flex flex-col gap-8',
  }
})

export const variantsSearch = tv({
  slots: {
    form: 'w-full flex flex-col md:flex-row items-center justify-start gap-4 mdgap-8',
    field: 'relative w-full lg:max-w-xl h-12',
    write: 'w-full h-full py-2 pl-12 pr-4 rounded-md bg-dracula-line/10 border border-dracula-line hover:border-white focus:border-white placeholder:text-dracula-line focus:outline-none transition ease-in-out duration-300 peer',
    magnifying: 'absolute w-6 h-6 bottom-3 left-4 text-dracula-line peer-hover:text-white peer-focus:text-white transition ease-in-out duration-300',
    search: 'w-full md:max-w-44 flex items-center justify-center px-6 h-12 uppercase rounded font-medium text-dracula-line bg-dracula-cyan disabled:bg-dracula-line disabled:text-white disabled:cursor-not-allowed disabled:scale-100 active:scale-95 transition ease-in-out duration-300'
  }
})

export const variantsDev = tv({
  slots: {
    card: 'w-full lg:max-w-72 flex flex-col gap-8',
    wrapper: 'w-full flex flex-col gap-8 px-4 py-6 rounded border border-dracula-line bg-dracula-line/10',
    info: 'flex items-center gap-4',
    avatar: 'inline-block h-14 w-14 rounded-full',
    github: 'tracking-wide flex flex-col',
    login: 'tracking-wide font-medium uppercase',
    arrouba: 'text-sm text-dracula-cyan',
    bio: 'text-sm text-dracula-comment',
    specs: 'flex flex-col gap-6',
    list: 'flex flex-col gap-2 text-sm',
    item: 'flex items-center gap-4',
    icon: 'w-4 h-4',
    see: 'w-full flex items-center justify-center px-6 h-12 uppercase rounded font-medium bg-dracula-line/10 hover:bg-dracula-cyan hover:text-dracula-bg border border-dracula-cyan active:scale-95 transition ease-in-out duration-300',
  }
})

export const variantsRepo = tv({
  slots: {
    wrapper: 'flex flex-col gap-4 py-6',
    info: 'flex items-center gap-4',
    login: 'tracking-wide font-medium uppercase',
    bio: 'text-dracula-comment',
    list: 'flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm text-dracula-cyan',
    item: 'flex items-center gap-4',
    divide: 'text-dracula-line hidden md:block',
    icon: 'w-4 h-4',
  }
})
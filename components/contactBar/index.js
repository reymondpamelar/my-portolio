import * as Icon from 'react-feather'

export default function ContactBar(){
    return(
        <div className={' fixed bottom-0 left-0 inset-x-0'}>
            <div className={'flex grid items-center p-4 border-t border-zinc-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 inset-x-0'}>
                <div className={'flex w-full text-lg'}>
                    <input
                        className={'bg-transparent outline-0 w-full text-right placeholder:text-zinc-500 pr-4'}
                        placeholder={'Send a message...'}
                    />
                    <Icon.ChevronRight/>
                </div>
            </div>
        </div>
    )
}
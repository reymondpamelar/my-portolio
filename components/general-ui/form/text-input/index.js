
const TextInput = (props) => {;
    const twStyles = [
        'w-full',
        'px-4 py-2',
        'appearance-none',
        ' outline-none transition duration-200 ease-in-out placeholder-gray-600',
        'min-w-0',
        'text-xs',
        'block',
        'bg-transparent border-b-2 border-zinc-400 hover:border-zinc-300 focus:border-white',
        'text-md',
        'no-autofill-bkg'
    ]
    return (
        <div className=" w-full">
            <label className="font-default">{props.label}</label>
            <input {...props.formhook} {...props} className={twStyles.join(' ')} />
        </div>
    )
}

export default TextInput;

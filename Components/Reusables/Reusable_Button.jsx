const Reusable_Button = ({ item, handleClick, text, disabled, height, width, changeId, setIsAvailable, isAvailable }) => {

    return (
        <button disabled={disabled} id={item} onClick={() => { handleClick(item) }} className={`font-graphik w-36 bg-blue-500 text-white ${height} ${width} rounded-lg disabled:opacity-40`}>
            {text}
        </button>)
}
export default Reusable_Button
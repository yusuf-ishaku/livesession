export const Input = ({itype, iplaceholder}) =>{
    return (
        <div>
            <input className="p-3 my-1 focus:outline-none border-[1px] rounded-md" type={itype} placeholder={iplaceholder}/>
        </div>
    )
}
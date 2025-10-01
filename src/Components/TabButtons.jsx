export default function TabButtons({label, onSelect, isSelected}){
    
    // function handleClick(){console.log("Clicked")}

    return(
        <li>
            <button className={isSelected ? 'active': undefined} onClick={onSelect}>{label}</button>
        </li>
    );
}
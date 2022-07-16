export default function Footer(props){
    return(
        <div className={`bg-${props.mode === "light" ? "dark" : "secondary"} text-light text-center p-3`}>
        © Vikram Jagtap 2022</div>
    );
}
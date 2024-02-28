export default function Expressions(){
    const subtext = 'This is a subtext';
    const doublenum = (val : number) => val*2
    return(
        <>
            <h1>Expression Eg</h1>
            <h2>{subtext.toUpperCase()}</h2>
            <h4>The val is {doublenum(20000)}</h4>
            <img src="../logo192.png" alt="React img"/>

        </>
    )
}
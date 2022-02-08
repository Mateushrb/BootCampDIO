function Counter() {
    let quantity = 1

    function upQuantity() {
        quantity = quantity + 1;
        if(quantity < 11) {
            document.getElementById("counter-box").innerHTML = quantity;
        } else {
            document.getElementById("counter-box").innerHTML = 'BOOOOM';
        }
        console.log(quantity);
    }

    return (
        <>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={upQuantity}>Aumentar</button>
        </>
    )
}

export default Counter;
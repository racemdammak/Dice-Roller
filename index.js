function rolldice(){
    const numbers = [];
    const images = [];
    const numofdice = document.getElementById("numofdice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    for(let i = 0; i < numofdice; i++){
        const num = Math.floor(Math.random()*6) + 1;
        numbers.push(num);
        images.push(`<img src="dice_images/${num}.png" alt="Dice ${num}">`);
    }
    diceResult.textContent = `dice: ${numbers.join(', ')}`;
    diceImages.innerHTML = images.join('');
}
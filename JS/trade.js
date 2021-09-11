function tradeLogs()    {
    bank.money += woodcutting.wood
    woodcutting.wood -= woodcutting.wood
    update("cashMade", + (bank.money) + " coins added from wood sold.")
    update("logsCut", + (woodcutting.wood) + " wood left.")
    alert(bank.money + " coins now.")
}


function sellOre()  {
    bank.money += mining.rock
    mining.rock -= mining.rock
    update("cashMade", + (bank.money) + " coins added from ore sold.")
    update("rockMined", + (mining.rock) + " ore left.")
    alert(bank.money + " coins now")
}

function sellFish() {
    bank.money += fishing.fish
    fishing.fish -= fishing.fish
    update("cashMade", + (bank.money) + " coins added from fish sold.")
    update("fishCaught", + (fishing.fish) + " fish left.")
    alert(bank.money + " coins now")
}

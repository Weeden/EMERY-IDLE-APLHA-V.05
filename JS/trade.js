function tradeLogs()    {
    bank.money += woodcutting.wood
    woodcutting.wood -= woodcutting.wood
    update("logsCut", + (woodcutting.wood) + " wood.")
    update("cashMade", + (bank.money) + " coins")
    update("money", + (bank.money) + " coins")
    
    //alert(bank.money + " coins now.")
}


function sellOre()  {
    bank.money += mining.rock
    mining.rock -= mining.rock
    update("rockMined", + (mining.rock) + " ore.")
    update("cashMade", + (bank.money) + " coins")
    update("money", + (bank.money) + " coins")
    
    //alert(bank.money + " coins now")
}

function sellFish() {
    bank.money += fishing.fish
    fishing.fish -= fishing.fish
    update("fishCaught", + (fishing.fish) + " fish.")
    update("cashMade", + (bank.money) + " coins")
    update("money", + (bank.money) + " coins")
    
    //alert(bank.money + " coins now")
}

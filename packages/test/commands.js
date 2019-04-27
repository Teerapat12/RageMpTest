

mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand('hp', (player) => {
    player.health = 100;
});

mp.events.addCommand('armor', (player) => {
    player.armour = 100;
});

mp.events.addCommand('veh', (player, _, vehName) => {
    if (vehName && vehName.trim().length > 0) {
        let pos = player.position;
        pos.x += 2;
        // If player has vehicle - change model.
        mp.vehicles.new(vehName, pos, {
        numberPlate: "ADMIN",
        color: [[0, 255, 0],[0, 255, 0]]
    })
    } else {
        player.outputChatBox(`<b>Command syntax:</b> /veh [vehicle_name]`);
    }
});

mp.events.addCommand('hihihi', (player) => {
	printToPlayer(player, `Hello everyy 3 seconds`)
	locateUser(player)
});

function locateUser(player) {
	const pos = player.position;
	printToPlayer(player, `Position: ${pos}`)
	mp.vehicles.new("cheetah", player.position, {
        numberPlate: "ADMIN",
        color: [[0, 255, 0],[0, 255, 0]]
    })
	setTimeout(() => locateUser(player), 500);

}

function printToPlayer(player, text) {
	player.outputChatBox(text)
}


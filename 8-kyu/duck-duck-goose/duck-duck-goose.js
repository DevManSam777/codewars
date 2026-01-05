function duckDuckGoose(players, position) {
    return players[(position - 1) % players.length].name;
}
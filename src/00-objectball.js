const testName = "Alan Anderson";
const testTeam = "Charlotte Hornets";

console.log(gameObject());
console.log(numPointsScored(testName));
console.log(shoeSize(testName));
console.log(teamColors(testTeam));
console.log(teamNames());
console.log(playerNumbers(testTeam));
console.log(playerStats(testName));
console.log(bigShoeRebounds());
console.log(mostPointsScored());
console.log(winningTeam());
console.log(playerWithLongestName());
console.log(doesLongNameStealaTon());

function numPointsScored(playerName) {
    const gameInfo = gameObject();
    for (const homeOrAway in gameInfo) {
            if (gameInfo[homeOrAway]["players"][playerName] !== undefined) {
                return gameInfo[homeOrAway]["players"][playerName]["points"];
            }
    }
}

function shoeSize(playerName) {
    const gameInfo = gameObject();
    for (const homeOrAway in gameInfo) {
        if (gameInfo[homeOrAway]["players"][playerName] !== undefined) {
            return gameInfo[homeOrAway]["players"][playerName]["shoe"];
        }
    }
}

function teamColors(teamName) {
    const gameInfo = gameObject();
    for (const homeOrAway in gameInfo) {
        if (gameInfo[homeOrAway]["teamName"] === teamName) {
            return gameInfo[homeOrAway]["colors"];
        }
    }
}

function teamNames() {
    const gameInfo = gameObject();
    const teamsArray = [];
    for (const homeOrAway in gameInfo) {
        teamsArray.push(gameInfo[homeOrAway]["teamName"]);
    }
    return teamsArray;
}

function playerNumbers(teamName) {
    const gameInfo = gameObject();
    const numbersArray = [];
    for (const homeOrAway in gameInfo) {
        if (gameInfo[homeOrAway]["teamName"] === teamName) {
            for (const playerName in gameInfo[homeOrAway]["players"]) {
                numbersArray.push(gameInfo[homeOrAway]["players"][playerName]["number"]);
        }
    }
}
    return numbersArray;
}

function playerStats(playerName) {
    const gameInfo = gameObject();
    for (const homeOrAway in gameInfo) {
        if (gameInfo[homeOrAway]["players"][playerName] !== undefined) {
            return gameInfo[homeOrAway]["players"][playerName];
        }
    }
}

function bigShoeRebounds() {
    const gameInfo = gameObject();
    let shoeSize = 0;
    let bigShoeName = "";
    let rebounds = 0;
    for (const homeOrAway in gameInfo) {
        for (const playerName in gameInfo[homeOrAway]["players"]) {
            if (gameInfo[homeOrAway]["players"][playerName]["shoe"] > shoeSize) {
                shoeSize = gameInfo[homeOrAway]["players"][playerName]["shoe"];
                bigShoeName = playerName;
                rebounds = gameInfo[homeOrAway]["players"][playerName]["rebounds"];
            }
        }
    }
    return rebounds;
}

function mostPointsScored() {
    const gameInfo = gameObject();
    let highPoints = 0;
    let highPointsName = "";
    for (const homeOrAway in gameInfo) {
        for (const playerName in gameInfo[homeOrAway]["players"]) {
            if (gameInfo[homeOrAway]["players"][playerName]["points"] > highPoints) {
                highPoints = gameInfo[homeOrAway]["players"][playerName]["points"];
                highPointsName = playerName;
            }
        }
    }
    return highPointsName;
}

function winningTeam() {
    const gameInfo = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
    for (const playerName in gameInfo["home"]["players"]) {
        homeTeamPoints += gameInfo["home"]["players"][playerName]["points"];
    }
    for (const playerName in gameInfo["away"]["players"]) {
        awayTeamPoints += gameInfo["away"]["players"][playerName]["points"];
    }
    if (homeTeamPoints > awayTeamPoints) {
        return gameInfo["home"]["teamName"];
    } else if (homeTeamPoints < awayTeamPoints) {
        return gameInfo["away"]["teamName"];
    } else {
        return "Tie";
    }
}

function playerWithLongestName() {
    const gameInfo = gameObject();
    let nameLength = 0;
    let longestName = "";
    for (const homeOrAway in gameInfo) {
        for (const playerName in gameInfo[homeOrAway]["players"]) {
            if (playerName.length > nameLength) {
                nameLength = playerName.length;
                longestName = playerName;
            }
        }
    }
    return longestName;
}

function doesLongNameStealaTon() {
    const gameInfo = gameObject();
    const longestName = playerWithLongestName();
    let mostSteals = 0;
    let mostStealsPlayer = "";
    for (const homeOrAway in gameInfo) {
        for (const playerName in gameInfo[homeOrAway]["players"]) {
            if (gameInfo[homeOrAway]["players"][playerName]["steals"] > mostSteals) {
                mostSteals = gameInfo[homeOrAway]["players"][playerName]["steals"];
                mostStealsPlayer = playerName;
            }
        }
    }
    if (mostStealsPlayer === longestName) {
        return true;
    } else {
        return false;
    }
}

function gameObject() {
    return game = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 4,
                    slamDunks: 4,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        }
    }
}


                                                        // ex 1
const balance = {
    Artem: 10000,
    Dany: 15000,
    Timur: 20000
}
const newBalanse = Object.values(balance)
const sumBalance = newBalanse.reduce((total, el) => total += el,0)
console.log(sumBalance)
                                                        // ex 2
const myStatus = [
    {name: "Timur", friend: 2, friendName: "Dany"},
    {name: "Dany", friend: 1, friendName: "Artem"},
    {name: "Artem", friend: 3},
];
const isFriendName = myStatus.reduce((acc, obj) => {
    if(obj.friendName){
        acc.push(obj.name)
    }
return acc},[]) 
console.log(isFriendName)
                                                        // ex 3

const orderedNames = [...myStatus].sort((firstName, secondName) =>
 firstName.friend - secondName.friend).map(el => el.name)
console.log(orderedNames);
                                                        // ex 4
const players = [
    {name: "Timur", skills: ["heal", "fireball", "swim"]},
    {name: "Dany", skills: ["block", "heal", "fireball"]},
    {name: "Artem", skills: ["freezing", "swim", "block"]},
]
const playersSkills = players.flatMap(obj => obj.skills);
const uniqueSkills = playersSkills.filter((skills, index, array) => array.indexOf(skills) === index)
const sortedPlayers = uniqueSkills.sort((a, b) => a.localeCompare(b));
console.log(sortedPlayers)
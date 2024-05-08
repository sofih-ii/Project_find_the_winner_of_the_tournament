
function tourNamentWinner (competitions, results){
    const score = {}
    let winner = ''
    for(let i = 0; i < competitions.length; i++){
        const [home, away] = competitions[i];
        const winningTeam = results[i] === 0 ? away:home;
        score[winningTeam] = (score[winningTeam] || 0)+ 3;
        if(!winner|| score[winningTeam] > score[winner]){
            winner = winningTeam;
        }
        
    }
    return winner
}
const competitions = [
    ['Felipe', 'Carlos'],
    ['Marco', 'Pedro'],
    ['Pedro', 'Felipe']
]

const results = [0, 0, 1]

console.log(tourNamentWinner(competitions, results));
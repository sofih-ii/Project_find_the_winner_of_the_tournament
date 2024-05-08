
Algorithmic tournament winner

an algorithmic tournament is underway, 
where teams of programmers compete to solve algorithmic
problems as quickly as possible.

the competition follows a round-robin format, with each
team facing off against all other teams.

only two teams compete against each other at a time,
and in each other at a time, and in each competition,
one team is designated as the home team, while the other
is the away team.

There is always a clear winner and loser in each competition,
with no ties.Teams earn 3 points for a win and 0 points for 
a loss the overall winner is the team with the highest total
points.

Your task is to write a function that determines the winner
of the tournaments based on the results of the competitions and results.

The competitions array contains pairs of teams represented as
[homeTeam, awayTeams], where each team is a strings of at most
30 characters.

The result array indicates the winner of each corresponding 
competition in the competitions array.

Specifically, result[i] denotes the winner of
competitions[i], where a 1 in the results array
means that the home team won, and a 0 means that
the away team won.

it is guaranteed that exactly one team will win the
tournament, and each team will compete against all other
teams exactly once.

Additionally, the tournament will always have at least two teams.

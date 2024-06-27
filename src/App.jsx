
import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"
import useGameCollection from "./hooks/useGameCollection"



export default function App() {

  const {games, addGame, removeGames} = useGameCollection()

  return (
    <div>
    <h2>Game Library</h2>
     <NewGameForm addGame={addGame}/>
     <div className="games">
       {games.map((game) => (
        <Game
         key={game.id}
         title={game.title}
         cover={game.cover}
         onRemove={() => removeGames(game.id)}
        />
       ))}
     </div>
    </div>
  )
}

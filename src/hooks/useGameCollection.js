import { useState } from "react";

export default function useGameCollection(){

    const [games, setGames] = useState(() => {
        const storedGames = localStorage.getItem("obc-game-lib")
        if (!storedGames) return []
        const gameArray = JSON.parse(storedGames)
        return gameArray
      })
    
    
    const addGame = ({ title, cover }) => {
        const id = Math.floor(Math.random() * 1000000)
        const game = { id, title, cover}
        setGames(state => {
         const newState = [...state, game]
         localStorage.setItem("obc-game-lib", JSON.stringify(newState))
        return newState
        })
      }
    
      const removeGames = (id) => {
        setGames(state => {
         const newState = state.filter(game => game.id !== id)
         localStorage.setItem("obc-game-lib", JSON.stringify(newState))
         return newState
        })
      }

      return {games, addGame, removeGames}
}
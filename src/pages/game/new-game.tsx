import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Loading from '../../components/loading.component'
import { GameService } from '../../services/game.service'

const NewGame: React.FC<AppProps> = () => {
  const router = useRouter()

  const [numPlayers, setNumPlayers] = useState(0)

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const nPlayers = parseInt(e.currentTarget.value)
    setNumPlayers(nPlayers)
  }

  const handleClick = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    setLoading(true)
    const game = await GameService.create(numPlayers)
    setLoading(false)
    router.push('game', {
      pathname: 'game/',
      query: {
        id: game.id
      }
    })
  }

  const renderNewGame = () => {
    return (
      <div>
        <h1>New Game</h1>
        <label>
          Number of players:
          <input
            type="number"
            pattern="[0-9]*"
            name="numPlayers"
            value={numPlayers}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Create" onClick={handleClick} />
      </div>
    )
  }

  const renderLoading = () => {
    return <Loading />
  }

  return !loading ? renderNewGame() : renderLoading()
}

export default NewGame

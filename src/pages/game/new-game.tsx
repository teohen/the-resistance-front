import { create } from 'domain'
import { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import {GameService} from '../../services/game.service'

const NewGame: React.FC<AppProps> = () => {

  const [numPlayers, setNumPlayers] = useState(0)

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const nPlayers = parseInt(e.currentTarget.value)
    setNumPlayers(nPlayers)
  }

  const handleClick = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLoading(true)
    const game = await GameService.create(numPlayers)
    setLoading(false)
  }

  return (
    !loading ?
    <div>
    <h1>New Game</h1>
        <label>
          Number of players:
          <input type="number" pattern="[0-9]*" name="numPlayers" value={numPlayers} onChange={handleChange}/>
        </label>
        <input type="submit" value="Create" onClick={handleClick} />
    </div>
    :
    <>
    <h1>carregando...</h1>
    </>
  )
}

export default NewGame

import React, { Component } from 'react';
import {pokemon} from './Pokedex';
import './Pokegame.css';
import styled from "styled-components";

const Card = styled.div`
    background: #D3D3D3;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 25px;
`

class Pokegame extends Component {
    render() {
        let padThree = (num) => (
            num <= 999 ? `00${num}`.slice(-3): num
        );
        let hand1 = [];
        let hand2 = pokemon;

        while (hand1.length < hand2.length){
            let randInd = Math.floor(Math.random() * hand2.length);
            let ranPoke = hand2.splice(randInd, 1)[0];
            hand1.push(ranPoke);
        }

        return (

            <div>
                <h2>Hand One</h2>
                <div className='Pokegame'>
                    {hand1.map(p => 
                        <Card className='Pokegame-card' key={p.id}>
                            <h3>{p.name}</h3>
                            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padThree(p.id)}.png`} alt={p.name} />
                            <p>
                                Type: {p.type}<br/>
                                EXP: {p.base_experience}
                            </p>
                        </Card>
                    )}
                </div>

                <h2>Hand Two</h2>
                <div className='Pokegame'>
                    {hand2.map(p => 
                        <Card className='Pokegame-card' key={p.id}>
                            <h3>{p.name}</h3>
                            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padThree(p.id)}.png`} alt={p.name} />
                            <p>
                                Type: {p.type}<br/>
                                EXP: {p.base_experience}
                            </p>
                        </Card>
                    )}
                </div>
            </div>
        )
    }
}
export default Pokegame;

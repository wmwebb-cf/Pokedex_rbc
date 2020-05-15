import React, { Component } from "react";
import { pokemon } from "./Pokedex"; 
import styled from "styled-components";
import "./Pokecard.css";

const Card = styled.div`
    background: #D3D3D3;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 25px;
`
// const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
    
class Pokecard extends Component {

    static defaultProps = {
        id: Math.random(),
        name: 'Name missing',
        img: 'Img missing',
        type: 'Type missing',
        base_experience: 'EXP missing'
    }

    render() {
        //PADTHREE function takes a number compares it to 999 and if it is less it will add two zeroes to the front of the number and then SLICE off the last three numbers giving you a 3-digit number
        let padThree = (num) => (
            num <= 999 ? `00${num}`.slice(-3): num
    )

        return(
            <div className='Pokecard'>
                {pokemon.map(p => 
                    <Card className='Pokecard-card' key={p.id}>
                        <h3>{p.name}</h3>
                        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padThree(p.id)}.png`} alt={p.name} />
                        <p>
                            Type: {p.type}<br/>
                            EXP: {p.base_experience}
                        </p>
                    </Card>
                )}
            </div>
            
        )
    }
}

export default Pokecard;
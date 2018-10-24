import React, { Component } from 'react';


const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map(ninja => {
        return (
            <div className="ninja" key={ninja.id}>
                <h1>Hello world { ninja.name }</h1>
                <p>{ ninja.id }</p>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
            </div>
        )
    })
    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    ) 
}

export default Ninjas;
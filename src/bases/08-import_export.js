import  heroes from '../data/heroes'

//import {heroes} from './data/heroes'

//console.log(heroes )

//  find method 
export const getHeroeByid = (id) => heroes.find(heroe => heroe.id === id )

console.log(getHeroeByid(4))

// filter method

export const getHeroeByOwner = (owner)=> heroes.filter((heroes)=>heroes.owner === owner)

console.log(getHeroeByOwner('Marvel'))
import heroes from "./data/heroes"

//import {heroes} from './data/heroes'

console.log(heroes )

//  find method 
const getHeroeByid = (id) => heroes.find(heroe => heroe.id === id )

console.log(getHeroeByid(4))

// filter method

const getHeroeByOwner = (owner)=> heroes.filter((heroes)=>heroes.owner === owner)

console.log(getHeroeByOwner('Marvel'))
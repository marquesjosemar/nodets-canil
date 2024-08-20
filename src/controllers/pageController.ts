import { Request, Response } from 'express';

import { Pet } from '../models/pet'; //inserindo o model no controller

//
export const home = (req: Request, res: Response)=>{

    let list = Pet.getAll(); //aqui utiliza a função que foi criada no model pet.ts

    res.render('pages/page', {
        banner: {
            title: 'Todos os animais', //vai pro page.mustache
            background: 'allanimals.jpg'
        },
        list
    });
}

export const dogs = (req: Request, res: Response)=>{

    let list = Pet.getFromType('dog');
    res.render('pages/page', {
        banner: {
            title: 'Cachorros', //vai pro page.mustache
            background: 'banner_dog.jpg'
        },
        list
    });
}

export const cats = (req: Request, res: Response)=>{
    let list = Pet.getFromType('cat');
    res.render('pages/page', {
        banner: {
            title: 'Gatos', //vai pro page.mustache
            background: 'banner_cat.jpg'
        },
        list
    });
}

export const fishes = (req: Request, res: Response)=>{
    let list = Pet.getFromType('fish');
    res.render('pages/page', {
        banner: {
            title: 'Peixes', //vai pro page.mustache
            background: 'banner_fish.jpg'
        },
        list
    });
}
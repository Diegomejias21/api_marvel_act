const {request , response} = require("express");
const { personajes } = require ("../personajesDC");
const getpersonajesDC = (req, res ) => {

    return res.json({
        ok:true,
        statusCode:200,
        personajes
    });
}
const getpersonajesDCById = (req = request , res = response) => {

    let id = parseInt(req.params.id);

    let personajesDCAbuscar = "";

    personajesDCAbuscar = personajesDC.find((personajes)=> {
        return personajesDC.id === id;
    });

    if(personajesDCAbuscar){
        return res.json({
            ok:true,
            statusCode:200,
            personajesDCAbuscar
        });
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No hay personajes con ese id"
        });
    }
    
}
module.exports = {
    getpersonajesDC,
    getpersonajesDCById
}
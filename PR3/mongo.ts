import mongoose from "npm:mongoose@7.6.3";

const Schema= mongoose.Schema;

const discoSchema= new Schema({
    nombre: { type: String, requires:true},
    Autor: { type: String, requires:true},
    Formato: { type: String, requires:true},
    Matriz: { type: String, requires:false},
    Pais_impres: { type: String, requires:true},
    Arte_portado: { type: String, requires:true},
    id: { type: String, requires:true},
});


export type disco={
    nombre:string ,
    Autor: string,
    Formato: string,
    Matriz?: string,
    Pais_impres: string,
    Arte_portado: string,
    id: number,
    _id: mongoose.Types.ObjectId
};

export const Modelodisco= mongoose.model<disco>("disco", discoSchema);
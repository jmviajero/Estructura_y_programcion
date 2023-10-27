import express, {Request, Response} from "npm:express@4.18.2"
import mongoose from "npm:mongoose@7.6.3"



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


type disco={
    nombre:string ,
    Autor: string,
    Formato: string,
    Matriz?: string,
    Pais_impres: string,
    Arte_portado: string,
    id: number,
    _id: mongoose.Types.ObjectId
};

const Modelodisco= mongoose.model<disco>("disco", discoSchema);


//base 64 imagen
//Falta poner mongo y una cosa de deno


await mongoose.connect(
  "mongodb+srv://Juan:12345@cluster0.mfoc843.mongodb.net/disco?retryWrites=true&w=majority"
);

const miapp= express();



miapp.get("/mostrar_todo", async (req:Request, res:Response)=>{
  const discos = await Modelodisco.find().exec();
  res.send(JSON.stringify(discos));
} );

miapp.get("/mostrar_por_id/:id", async (req:Request, res:Response)=>{
  const ids= req.params.id;
  const a= await Modelodisco.find({id: ids}).exec();
  res.send(JSON.stringify(a));
} );

miapp.get("/mostrar_por_nombre/:nombre", async (req:Request, res:Response)=>{
  const a=req.params.nombre;
  const b= await Modelodisco.find({nombre: a}).exec();
  res.send(JSON.stringify(b));
} );

miapp.get("/mostrar_por_formato/:formato", async (req:Request, res:Response)=>{
  const ids= req.params.formato;
  const a= await Modelodisco.find({Formato: ids}).exec();;
  res.send(JSON.stringify(a));
} );

miapp.get("/mostrar_por_pais/:pais", async (req:Request, res:Response)=>{
  const ids= req.params.pais;
  const a= await Modelodisco.find({Pais_impres: ids}).exec();;
  res.send(JSON.stringify(a));
} );

miapp.post("/crear_disco/:Nombre/:Autor/:Formato/:Matriz/:Pais/:Arte/:id", async (req:Request, res:Response)=>{
  
  const a=  new Modelodisco({
    nombre: req.params.Nombre,
    Autor: req.params.Autor,
    Formato: req.params.Formato,
    Matriz: req.params.Matriz,
    Pais_impres: req.params.Pais,
    Arte_portado: req.params.Arte,
    id: req.params.id,
  });
  await a.save();

 
  res.send(JSON.stringify(a));

} );

miapp.put("/actualizar_por_id/:id/:Nombre/:Autor/:Formato/:Matriz/:Pais/:Arte", async  (req:Request, res:Response)=>{
  
  const ids= req.params.id;
  

  const Update= await Modelodisco.findOneAndUpdate({id: ids},
    { nombre: req.params.Nombre,
      Autor: req.params.Autor,
      Formato: req.params.Formato,
      Matriz: req.params.Matriz,
      Pais_impres: req.params.Pais,
      Arte_portado: req.params.Arte,});
 

  res.send(JSON.stringify(Update));

} );

miapp.delete("/eliminar_por_id/:id", async (req:Request, res:Response)=>{
  const ids= req.params.id;
  const a= await Modelodisco.findOneAndDelete({id: ids}).exec();
  res.send(JSON.stringify(a));
} );

miapp.listen(3002, () =>{
  console.log("Funciona");
} );
import express from 'express';
const routes= express.Router();

//Obtener Datos
routes.get('/', (req,res)=>{
   req.getConnection((err, conn)=>{
       if(err) return res.send(err)
       conn.query('SELECT * FROM tbl_usuario',(err,rows)=>{
           if(err) return res.send(err)
           res.json(rows)
       })
   })
})

//ingresar datos

routes.post('/', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO tbl_usuario SET ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)
            res.send('Datos de usuario registrado')
        })
    })
 })
//borrar datos
routes.delete('/:id_usuario', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM tbl_usuario WHERE id_usuario= ?',[req.params.id_usuario],(err,rows)=>{
            if(err) return res.send(err)
            res.send('Uusario eliminado de la base de datos')
        })
    })
 })
 //ACTUALIZAR DATOS
 routes.put('/:id_usuario', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE tbl_usuario SET ?  WHERE id_usuario=?',[req.body, req.params.id_usuario],(err,rows)=>{
            if(err) return res.send(err)
            res.send('Usuario actualizado')
        })
    })
 })

module.exports=routes
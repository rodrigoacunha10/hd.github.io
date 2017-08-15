


const platos=Vue.component('platos',
{

template:'#plato',
data()
{
     return{
             plato:
                    [
                         {'nombre':'pollo dorado','precio':'17','imagen':'https://el-vividor.com/wp-content/uploads/2016/01/pique-macho-cochabamba.jpg','disponible':'1'},
                         {'nombre':'asado','precio':'16','imagen':'https://el-vividor.com/wp-content/uploads/2016/01/pique-macho-cochabamba.jpg','disponible':'1'},
                         {'nombre':'pique','precio':'25','imagen':'https://el-vividor.com/wp-content/uploads/2016/01/pique-macho-cochabamba.jpg','disponible':'0'},
                         {'nombre':'chuleta dorado','precio':'13','imagen':'https://el-vividor.com/wp-content/uploads/2016/01/pique-macho-cochabamba.jpg','disponible':'0'},
                         {'nombre':'mondongo dorado','precio':'7','imagen':'https://el-vividor.com/wp-content/uploads/2016/01/pique-macho-cochabamba.jpg','disponible':'1'},
                         {'nombre':'agi de pollo','precio':'10','imagen':'https://el-vividor.com/wp-content/uploads/2016/01/pique-macho-cochabamba.jpg','disponible':'1'},
                         {'nombre':'milanesa','precio':'12','imagen':'https://el-vividor.com/wp-content/uploads/2016/01/pique-macho-cochabamba.jpg','disponible':'0'},
                         {'nombre':'salpicon','precio':'8.50','imagen':'https://el-vividor.com/wp-content/uploads/2016/01/pique-macho-cochabamba.jpg','disponible':'1'}
                    ],
                    buscar:'',
     }
},
computed:
{
     buscarPlato()
     {  

          return this.plato.filter((com)=>{
                    
                    return com.nombre.includes(this.buscar);
                    
                             });
          }

     }



});


const disponible=Vue.component('plato-disponible',{

props:['plt'],
template:'#plato-disponible'
});

const nodispo= Vue.component('plato-no-disponible',
{
     props:['p'],
   template:'#nodisponible'
});





// creamos las rutas
const routes=[
{path:'/platos',component:platos},
{path:'/plato-disponible',component:disponible},

];

// instanciando el componete enrutador

const router =  new VueRouter(
     {
          routes:routes,
     });




var vm = new Vue({
     		el: "main",
               router,
     		data:
               {
     		}
     			

     	
     		
     	})




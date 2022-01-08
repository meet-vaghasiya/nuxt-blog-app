export default function(context){
   console.log('auth js')
 if(!context.store.getters.isAuthenticated){
    context.redirect('/auth')
 }   
}
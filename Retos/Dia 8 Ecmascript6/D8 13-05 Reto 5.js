/* RETO DE OBJETOS:Crea una clase llamada “Password” que tenga los atributos de “length” y “password”. 
Por defecto el atributo “length” tendrá un valor de 8. Los métodos asociados a esta clase serán:
-isStrong(): Nos devolverá “true” o “false” si la contraseña tiene una fortaleza suficiente 
(los métodos que uséis para determinar esto los dejo de vuestra parte, o que os parezca mejor).
-generatePass(): Genera una contraseña aleatoria con la longitud que se le haya indicado como atributo 
(esta parte es opcional si acabáis pronto, ya que tiene bastante investigación).
-getter(): Métodos getter para los atributos antes mencionados. */
class Password {
    constructor(passwordV){
        this.length=8;
        this.password=passwordV;
    }
    isStrong(clave){
        let largo=clave.length;
        let mayuscula=/[A-Z]/g;
        let m = (clave.match(mayuscula));
        let may=false;
        let arr=false;
        let num=false;
        if(m!=null){
          may=true;
        }
        let numero=/[0-9]/g;
        let n = (clave.match(numero));
        if(n!=null){
          num=true
        }
        let arroba=/[@]/g;
        let a = (clave.match(arroba));
        if(m!=null){
          arr=true
        }
        if (largo>=8 && may===true && num===true && arr===true) {
          return true;
        } else {
          return false;
        } 
      }
    generatePass(num){
        let abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9",".","-","_","$","&","#","@"];
        let numeroAleatorio = num;
        let clave=""
        for(var i = 0; i<num; i++){
            numeroAleatorio = parseInt(Math.random()*abecedario.length);
            clave += abecedario[numeroAleatorio];
        }
        return(clave);
      }
         
    
    getLength(){
        return this.length;
    }
    getPassword(){
        return this.password;
    }
}
var np= new Password; 
console.log(np.isStrong("re1Djft@"))
console.log(np.generatePass(5))
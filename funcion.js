class KeysAndValues {
    //Controla como se inicializa una instancia
    constructor(){
        this.obj = null;
        this.keys = null;
        this.values = null;
    }

    //Recibe los valores del objeto
    ins_object(objeto){
        this.obj = objeto
        this.sep_ord()
    }
    //Separamos las llaves y los valores. Y los ordenamos para una devolución de dos arrays (k&v)
    sep_ord(){
        this.keys = Object.keys(this.obj)
        this.values = Object.values(this.obj)
        var n, i, k, aux1, aux2
        n = this.keys.length

        //Metodo de ordenamiento 
        for (k = 1; k < n; k++) {
            for (i = 0; i < (n - k); i++) {
                if (this.keys[i] > this.keys[i + 1]) {
                    aux1 = this.keys[i];
                    aux2 = this.values[i];
                    this.keys[i] = this.keys[i + 1];
                    this.keys[i + 1] = aux1;
                    this.values[i] = this.values[i + 1];
                    this.values[i + 1] = aux2;
                }
            }
        }
        //Resultado que se muestra en pantalla
        console.log("LLAVES: ["+this.keys+"],  VALORES: ["+this.values+"]");
    }
}

//OBJETOS A ORDENAR
const obje1={b: 3, a: 1, c: 2,}
const obje2={  b: "Microsoft", a: "Apple", c: "Google"}
const obje3={ key1: true, key3: "undefined", key2: false}

//Creacion de un nuevo operador 
let Ob = new KeysAndValues();

//Aplicacion del nuevo operador a los objetos
Ob.ins_object(obje1);
Ob.ins_object(obje2);
Ob.ins_object(obje3);
class demo{
    constructor(softdrink1,softdrink2){
        this.morningsoftdrink = softdrink1;
        this.eveningsoftdrink = softdrink2;
        console.log("Wecole to Console");

    }
    wish(){
        console.log(`Hi amar would like to have ${this.morningsoftdrink} or ${this.eveningsoftdrink}`);
    }

    /**Static function
     * 
     * static function can not call by object. It directly call by classname
     */
    static staticFunction(){
        console.log(`Hi i am static function`);
    }
}

let message = new demo("Cofee", "Green Tea");
message.wish();
demo.staticFunction();
class DataStroage<T>{

    public data:Array<T>=[];

    addData(item:T){
        this.data.push(item);
    }

    removeData(item:T){
        this.data.splice(this.data.indexOf(item),1)
    }

    getData(){
        return [...this.data];
    }

}

const personData = new DataStroage<string>();
personData.addData('Amar');
personData.addData('Anil');
personData.addData('Nirmala');
personData.addData('Ashok');
personData.removeData('Amar');
console.log(personData.getData());

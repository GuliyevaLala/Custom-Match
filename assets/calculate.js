class Calculator { constructor(result){
    this.result = result;
}
    plus(number) {
        this.result+=number;
        return this
        }

    minus(number) {
        this.result-=number;
        return this
        }

    multiply(number){
        this.result*=number;
        return this;
        }

    divide(number){
        this.result/=number;
        return this;
        }

}
var result = new Calculator(50).plus(6).minus(30).multiply(3).divide(2)
console.log(result);


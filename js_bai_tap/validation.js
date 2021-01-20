function getEle(id) {
    return document.getElementById(id);
}

function Validation() {
    this.kiemTraEx1 = (number, min, max, mess, spanId) => {
        if (number <= min || number > max) {
            getEle(spanId).classList.add("thong-bao");
            getEle(spanId).innerHTML = mess;
            return false;
        }
        return true;
    };
    this.kiemTraEx2 = (number1,number2,number3,number4,number5, min, mess, spanId) => {
        if (number1 <= min || number2 <= min || number3 <= min || number4 <= min || number5 <= min) {
            getEle(spanId).classList.add("thong-bao");
            getEle(spanId).innerHTML = mess;
            return false;
        }
        return true;
    };
}
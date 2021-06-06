
function taAberto (date){
const hora = date.getHours();
const minuto = date.getMinutes()

if (hora >= 8){
    if (hora <= 18){
        if (hora === 18){
            if (minuto > 0){
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }else {
        return false;
    }
} else {
    return false;
}
}

console.log(taAberto(new Date(2015,1,1,12)));
console.log(taAberto(new Date(2015,1,1,2)));
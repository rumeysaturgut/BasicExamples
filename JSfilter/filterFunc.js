function filter_list() {
    var myArr = [1,'a','b',0, 15, -223, 12]
    document.getElementById("result").value = myArr.filter(value => Number.isInteger(value) && value>=0).join(" ")
};

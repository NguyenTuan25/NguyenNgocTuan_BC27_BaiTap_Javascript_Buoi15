function pay() {
    var name = document.getElementById("name").value
    var kw = +document.getElementById("Kw").value
    var price = 0;
    price = calculatePrice(kw, 500, 650, 850, 1100, 1300)
    if (name == "" || kw == "") {
        document.getElementById("result-kw").style.display = "block"
        document.getElementById("spanPay").innerHTML = "vui lòng nhập số liệu"
    } else {
        document.getElementById("result-kw").style.display = "block"
        document.getElementById("spanPay").innerHTML = "Số tiền phải trả cho " + name + " : " + price + "đ"
    }

}
function calculatePrice(kw, kw_50, kw_50_100, kw_100_200, kw_200_350, kw_350) {
    var price = 0;
    if (kw <= 50) {
        price += kw * kw_50
    } else if (kw <= 100) {
        price += 50 * kw_50 + (kw - 50) * kw_50_100
    } else if (kw <= 200) {
        price += 50 * kw_50 + 50 * kw_50_100 + (kw - 100) * kw_100_200
    } else if (kw <= 350) {
        price += 50 * kw_50 + 50 * kw_50_100 + 100 * kw_100_200 + (kw - 200) * kw_200_350
    } else if (kw > 350) {
        price += 50 * kw_50 + 50 * kw_50_100 + 100 * kw_100_200 + 150 * kw_200_350 + (kw - 350) * kw_350
    }
    return price
}
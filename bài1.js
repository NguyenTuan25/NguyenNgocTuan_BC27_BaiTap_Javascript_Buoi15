function total() {
    var subject1 = +document.getElementById("subject1").value;
    var subject2 = +document.getElementById("subject2").value;
    var subject3 = +document.getElementById("subject3").value;
    var diemChuan = +document.getElementById("diemChuan").value;
    var doiTuong = document.getElementById("doiTuong").value;
    var khuVuc = document.getElementById("khuVuc").value;
    var diemKhuVuc = tinhDiemKhuVuc(khuVuc);
    var diemDoiTuong = tinhDiemDoiTuong(doiTuong);
    var tongDiemMon = subject1 + subject2 + subject3;
    var diemTongKet = tongDiemMon + diemKhuVuc + diemDoiTuong;
    hienthi(subject1, subject2, subject3, diemTongKet, diemChuan)
}
function hienthi(subject1, subject2, subject3, diemTongKet, diemChuan) {
    if (diemChuan == "") {
        document.getElementById("result").style.display = "block"
        document.getElementById("spanKetQua").innerHTML = "vui lòng nhập số liệu điểm chuẩn"
    } else if (!subject1 || !subject2 || !subject3) {
        document.getElementById("result").style.display = "block"
        document.getElementById("spanKetQua").innerHTML = "tổng điểm:" + diemTongKet + " bạn đã rớt vì có một môn 0 điểm";
    } else if (diemTongKet < diemChuan) {
        document.getElementById("result").style.display = "block"
        document.getElementById("spanKetQua").innerHTML = "tổng điểm:" + diemTongKet + " bạn đã rớt vì không đủ điểm chuẩn";
    } else {
        document.getElementById("result").style.display = "block"
        document.getElementById("spanKetQua").innerHTML = "tổng điểm:" + diemTongKet + " bạn đã đậu";
    }
}
function tinhDiemDoiTuong(doiTuong) {
    switch (doiTuong) {
        case "1":
            return 2.5;
        case "2":
            return 1.5;
        case "3":
            return 1;
        default:
            return 0;
    }
}
function tinhDiemKhuVuc(khuVuc) {
    switch (khuVuc) {
        case "A":
            return 2;
        case "B":
            return 1;
        case "C":
            return 0.5;
        default:
            return 0;
    }
}


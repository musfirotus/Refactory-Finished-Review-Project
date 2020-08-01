//Code by musfirotus
function leapYear(year1, year2) {
    let h = year1;
    for (h > 0; h <= year2; h++) {
        const opr1 = h % 400 == 0;
        const opr2 = h % 400 != 0;
        const opr3 = h % 100 != 0;
        const opr4 = h % 4 == 0;
        const opr5 = h % 4 != 0;

        if ((opr1) || (opr2 && opr3 && opr4))
            console.log('Tahun ' + h + ' adalah tahun kabisat');
        else if ((opr2) || (opr2 && opr3 && opr5))
            console.log('Tahun ' + h + ' adalah bukan tahun kabisat');
        else console.log('Mohon masukan tahun yang valid!')
    }
}

leapYear(2010, 2025);
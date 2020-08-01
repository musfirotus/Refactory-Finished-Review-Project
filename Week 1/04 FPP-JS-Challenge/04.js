const range = (start, stop, step = 1) => Array.from({
  length: (stop - start) / step + 1
}, (_, i) => start + (i * step));
const tahun = range(2010, 2020);

const check = tahun.forEach((h) => {
  const opr1 = h % 400 == 0;
  const opr2 = h % 400 != 0;
  const opr3 = h % 100 != 0;
  const opr4 = h % 4 == 0;
  const opr5 = h % 4 != 0;

  if ((h % 400 == 0) || (opr2 && opr3 && opr4))
    console.log('Tahun ' + h + ' adalah tahun kabisat');
  else if ((opr2) || (opr2 && opr3 && opr5))
    console.log('Tahun ' + h + ' adalah bukan tahun kabisat');
  else console.log('Mohon masukan tahun yang valid!')
});

check;
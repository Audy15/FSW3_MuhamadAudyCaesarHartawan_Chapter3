function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  //Menampilkan hasil output sebelum di sorting berdasarkan Descending
  console.log("Sebelum di sorting :");  
  console.table(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  /*
  Side Effects adalah efek samping setiap perubahan keadaan yang terjadi di luar function yang dipanggil. 
  Tujuan terbesar dari setiap functional programming language adalah meminimalkan efek samping, dengan memisahkannya dari kode perangkat lunak lainnya.
  */
  const result = [...cars];

  // Tulis code-mu disini
  const panjang = cars.length;

  for (let i = 0; i <panjang - 1; i++) {
    //looping membandingan index
    for (let j = 0; j <panjang - 1; j++) {
      //algo bbs
      if (result[j].year < result[j + 1].year) {
        temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  

  
  //Menampilkan hasil output setelah di sorting berdasarkan Descending
  console.log("Sesudah di sorting  :");  
  console.table(result);
  
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
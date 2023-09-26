```
  SHOPPING TEROS
  Tokosidia ingin membuat fitur untuk menjumlahkan harga dari barang-barang yang dibelanjakan oleh customer.
  Berikut adalah list-list barang yang dijual di Tokosidia:
  --------------------------------------------
  | No |     Nama Product       |   Harga    |
  --------------------------------------------
  | 1 |        Asus ROG         |  25000000  |
  --------------------------------------------
  | 2 |      Lenovo Legion      |  22000000  |
  --------------------------------------------
  | 3 |         HP Omen         |  20000000  |
  --------------------------------------------
  | 4 |      Acer Predator      |  21000000  |
  --------------------------------------------

  Tokosidia juga mempunyai promo DISCOUNT 20% untuk MEMBER di tokosidia.
  Bantulah Tokosidia untuk membuat fitur dengan ketentuan di bawah!
  ---------------
    DIRECTIONS
  --------------
  Diberikan 4 buah function yaitu:
  1. shoppingTeros merupakan main function yang akan memanggil fungsi-fungsi lain di dalam nya untuk mengeluarkan output yang di inginkan dengan:
    - Input adalah customer berupa object
    - Output adalah result berupa string
  2. getProductAmount untuk mendapatkan jumlah dari produk yang ingin di beli dengan:
    - Input adalah products berupa array multidimensi
    - Output adalah listProductAmount berupa object
  3. getTotalPrice untuk mendapatkan total harga dari semua produk yang ingin di beli dengan:
    - Input adalah listProductAmount berupa object
    - Output adalah totalPrice berupa number
  4. getDiscount untuk mendapatkan diskon jika customer merupakan member Tokosidia dengan:
    - Input adalah statusMember berupa boolean dan totalPrice berupa number
    - Output adalah totalPriceAfterDiscount berupa number
  ==========================================================================================================================
  -------------
      NOTES
  -------------
  1. Jika customer merupakan member maka kembalikan output berupa string dengan format:
      "Hai pelanggan setia <Nama Customer>! Total Harga yang harus kamu bayar adalah Rp <Total Harga Akhir>"
  2. Jika customer BUKAN merupakan member maka kembalikan output berupa string dengan format:
      "Hai <Nama Customer>! Total Harga yang harus kamu bayar adalah Rp <Total Harga Akhir>"
  ==========================================================================================================================
  -------------
    EXAMPLES
  ------------
  Input:
  {
    name: "Amir",
    products: [["Acer Predator", 2], ["Asus ROG", 1], ["Lenovo Legion", 1]],
    member: true
  }
  PROSES:
  - Panggil fungsi getProductAmount didalam fungsi shoppingTeros dengan paramater input:
    products = [["Acer Predator", 2], ["Asus ROG", 1], ["Lenovo Legion", 1]]
  - Fungsi getProductAmount akan merapihkan data product dengan jumlah yang ingin dibeli, dan mengembalikan output berupa object:
    { 'Acer Predator': 2, 'Asus ROG': 1, 'Lenovo Legion': 1 }
  - Panggil fungsi getTotalPrice didalam fungsi shoppingTeros dengan parameter input:
    products = { 'Acer Predator': 2, 'Asus ROG': 1, 'Lenovo Legion': 1 }
  - Fungsi getTotalPrice akan menjumlahkan semua harga dari barang-barang yang di beli customer, dan mengembalikan output berupa number:
    89000000
  - Panggil fungsi getDiscount didalam fungsi shoppingTeros dengan parameter input:
    statusMember: true
    totalPrice: 89000000

  - Fungsi getDiscount akan menghitung discount (jika ada), dan akan mengembalikan output berupa number:
    71200000
  Output:
  "Hai pelanggan setia Amir! Total Harga yang harus kamu bayar adalah Rp 71200000"



---------------
  Objective
---------------
  - Dapat mengubah dari suatu array multidimensi menjadi suatu object
  - Dapat mengakses array multidimensi dengan dan suatu Object untuk mendapatkan value yang diinginkan
  - Dapat membuat konditional data
  - Dapat mengakses dan Membuat fungsi dalam fungsi
```

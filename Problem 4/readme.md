**!!! NETFLEX CINEMA GRAND OPENING !!!**

**NETFLEX CINEMA** baru saja melakukan grand opening, dan mengadakan promo gratis nonton film serta free meal dan free drink.
**NETFLEX CINEMA** mempunyai dua tipe studio dengan film-film tertentu di tiap tipe nya, yaitu:

```
1. Premiere:

   - Forrest Gump
   - The Dark Knight
   - 5 cm

2. Regular:

   - Sherlock Holmes
   - Call
```

List film yang disediakan oleh **NETFLEX CINEMA**:

```
| No  | Judul Film      | Harga |
| --- | --------------- | ----- |
| 1   | Sherlock Holmes | 20000 |
| 2   | Forrest Gump    | 18000 |
| 3   | Call            | 16000 |
| 4   | The Dark Knight | 14000 |
| 5   | 5 cm            | 25000 |
```

List Free Meal yang disediakan oleh **NETFLEX CINEMA**:

```
| No  | Nama Makanan | Harga |
| --- | ------------ | ----- |
| 1   | Pizza        | 50000 |
| 2   | Burger       | 45000 |
| 3   | Popcorn      | 35000 |
| 4   | Odading      | 20000 |
| 5   | Gorengan     | 10000 |
| 6   | Chitato      | 5000  |
```

List Free Drink yang disediakan oleh **NETFLEX CINEMA**:

```
| No  | Nama Minuman | Bersoda | Harga |
| --- | ------------ | ------- | ----- |
| 1   | Coca-Cola    | `true`  | 15000 |
| 2   | Pepsi        | `true`  | 12000 |
| 3   | Thai Tea     | `false` | 20000 |
| 4   | SiBoBa       | `false` | 18000 |
```

Karena ini merupakan promo dari **NETFLEX CINEMA**, maka customer akan diminta untuk memberi tau:

1. Film yang ingin di tonton

2. Alergi customer

3. Ingin minuman bersoda atau tidak

4. Code Seat

Untuk diproses menjadi tiket nonton di **NETFLEX CINEMA**.

- Free Meal, Free Drink, Cinema Type dan Code Seat Number akan di pilih secara urut oleh sistem.
- Free Meal akan ditentukan dari atas ke bawah berdasarkan alergi customer
- Free Drink akan ditentukan dari atas ke bawah berdasarkan customer ingin minuman bersoda atau tidak
- Cinema Type akan ditentukan dari film apa yang ingin di tonton oleh customer
- Code Seat Number akan ditentukan dari kode yang diinginkan dengan nomor yang masih tersedia

Bantulah **NETFLEX CINEMA** untuk dapat mengeprint tiket dengan sistem seperti ketentuan di atas!

## DIRECTION

Diberikan 6 buah function yaitu:

1. printTicket merupakan main function yang akan memanggil fungsi-fungsi lain di dalam nya yang berfungsi untuk mengeprint tiket customer dengan total harga, dengan:

   - Input:
     - customer berupa object
   - Output berupa object

2. getDataMovie merupakan fungsi untuk mencari data dari film yang ingin di tonton oleh customer, dengan:

   - Input:
     - movieTitle berupa string
   - Output berupa object

3. getFreeMeal merupakan fungsi untuk menentukan makanan customer berdasarkan alergi yang dimiliki customer, dengan:

   - Input:
     - allergies berupa array
   - Output berupa object

4. getFreeDrink merupakan fungsi untuk menentukan minuman customer berdasarkan customer ingin minuman bersoda atau tidak, dengan:

   - Input:
     - drinkSoda berupa boolean
   - Output berupa object

5. getCinemaType merupakan fungsi untuk menentukan tipe cinema berdasarkan film yang ingin di tonton oleh customer, dengan:

   - Input:
     - movieTitle berupa string
   - Output berupa string

6. getSeatNumber merupakan fungsi untuk menentukan tempat duduk customer saat menonton film berdasarkan code seat yang dipilih customer, dengan:
   - Input:
     - codeSeat berupa string
   - Output berupa string

## EXAMPLE

INPUT:

```js
{
	name: "Vincent",
	movie: "Call",
	allergies: ["Popcorn", "Burger"],
	drinkSoda: true,
	seatCode: "B",
}


```

PROCESS:

1. Panggil fungsi **getDataMovie** didalam fungsi **printTicket** dengan paramater input:

   - movieTitle = `"Call"`

2. Fungsi **getDataMovie** akan mencari data film tersebut di dalam sistem, dan mengembalikan output berupa object:

```js
{
	title: "Call",
	price: 16000,
}
```

3. Panggil fungsi **getFreeMeal** didalam fungsi **printTicket** dengan paramater input:

   - allergies = `["Popcorn", "Burger"]`

4. Fungsi **getFreeMeal** akan menentukan free meal SESUAI URUTAN berdasarkan alergi yang dimiliki customer, dan mengembalikan output berupa object:

```js
{
	name: "Pizza",
	price: 10000,
}
```

5. Panggil fungsi **getFreeDrink** didalam fungsi **printTicket** dengan paramater input:
   - drinkSoda = `true`
6. Fungsi **getFreeDrink** akan menentukan free drink SESUAI URUTAN berdasarkan customer ingin minuman bersoda atau tidak, dan akan mengembalikan output berupa object:

```js
{

	name: "Coca-Cola",
	price: 10000,
	soda: true,

}
```

7. Panggil fungsi **getCinemaType** didalam fungsi **printTicket** dengan paramater input:
   - movieTitle = `"Call"`
8. Fungsi **getCinemaType** akan menentukan Cinema Type berdasarkan film yang ingin ditonton customer, dan mengembalikan output berupa string: `"Regular"`
9. Panggil fungsi **getSeatNumber** didalam fungsi **printTicket** dengan paramater input:
   - codeSeat = `"B"`
10. Fungsi **getSeatNumber** akan menentukan Code Seat Number berdasarkan Code Seat yang diinginkan customer dan nomor yang masih tersedia, dan akan mengembalikan output berupa string: `"B1"`

11. Fungsi **printTicket** akan menjumlahkan total harga dari keseluruhan

OUTPUT:

```js
{

	name: 'Vincent',
	movie: 'Call',
	meal: 'Pizza',
	drink: 'Coca-Cola',
	seatType: 'Reguler',
	seatNumber: 'B1',
	totalPrice: 36000,
	message: 'Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha'

}
```

## NOTES

1. Tidak boleh menggunakan built-in Function yang DILARANG!
2. `totalPrice` adalah total harga dari harga film yang ingin ditonton, makanan dan minuman yang didapat.

**SELAMAT DAN SEMANGAT MENGERJAKAN :)**

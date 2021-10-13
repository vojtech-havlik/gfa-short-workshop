import { print, clear } from "./private/config";

/*
 HELP
 for printing use method print("text");
 for clearing console use method clear();

 NÁPOVĚDA
 K výpisu do konzole použijte metodu print("text");
 K promazání konzole použijte metodu clear();
*/

/* TOTO JE KOMENTAR, TU KOD NEPISEM */

print(2);
print(-7);
print(1000000);
print(5.67);
print(3 + 3);
print(4 - 6);
print(2 * 2);
print(7 / 4);
print(2 - 8 / 4);

//modulo - % - udava zvysok po deleni
print(3 % 2);
print(4 % 2);

//String = retazec
print("Ahojte, volam sa Amy a mam 24 rokov =-^%$&");
print(2 + " nieco" + 24);
print((24 * 60 * 60) / 2021);

//Datove typy - data types
//String - textovy retazec
//Integer, int - cele cislo
//Float, Double - desatinne cislo
//Pravdivostna hodnoty (Boolean) - true, false = pravda, nepravda = 1,0

//JavaScript je netypovy jazyk
//Java, C, C++ su typove jazyky

//FIXED VALUES, VARIABLES = PREMENNE
//Deklaracia premennej s nazvom name a priradenie jej hodnoty "Amy"
//Keyword LET pouzivame iba pri definicii novej premennej
let name = "Amy";
let age = 24;
age = 25;
age = 25 - 6;
age = age + 3;
//Rovnaky zapis ako na riadku 50
age += 3;
print(" Ahoj, volam sa " + name + " a mam " + age + " rokov.");

let myAge = 2021 - 1997;
print(myAge);

//Porovnavacie operatori - ===, !==, <, >, <=, >=
print(myAge === 23);
print(myAge === 24);
print(-1 < 1);
print(3 >= 4);
print(myAge <= age);

//CONDITIONS, PODMIENKY
let password = 1234;

if (password === 1234) {
  print("Unlocked screen!");
} else {
  print("Wrong password! Try again!");
}

let hp = -1000;
if (hp <= 0) {
  print("Prehral si!");
} else {
  print("Stale zijes!");
}

/*
  TASK 1:
  CZ - Jaký bude výsledek tohoto výpočtu:
   počet vteřin v jednom dni děleno 
   aktuálním rokem? Vypsat do konzole!
  
  EN - What is the result of seconds in a day divided by current year (2020)? Print it out!

  TASK 2:
  CZ - Co se stane, když použijete matematický
  operátor + na text a číslo zároveň? 
  Vypsat do konzole!
  
  EN - What will happen if you want to add number and text together (with +)? Print it out!
*/

/* YOUR CODE BELONGS HERE - ZDE PATŘÍ VÁŠ KÓD */

/*
  VARIABLE - TASKS:
  CZ:
  1) Vypočítejte svůj věk pomocí konzole a uložte jej do proměnné s názvem age.

  2) Jak dlouho trvala druhá světová válka? Výsledek uložte do proměnné s názvem ww2.

  3) Kolik byste museli zaplatit za 76 akcií Tesly? Výsledek uložte do proměnné s názvem tesla.

  4) Kolik vteřin je v jednom dni? Výsledek uložte do proměnné s názvem secondsOfDay.

  5) Jaké procento světové populace jsou češi? Výsledek uložte do proměnné s názvem czech.

  6) O kolik větší je Čína než Česká republika? Výsledek uložte do proměnné s názvem bigger.

  7) Pokud se do jedné ZOOM místnosti vejde jen 7 lidí a dnes máme 305 účastníků, kolik lidí bude v nejmenší ZOOM mísnosti?
     Výsledek uložte do proměnné s názvem rooms.

  EN:
  1) Calculate your age using the console and store it in a variable called age.

  2) How long was the WW2? Store it in a variable called ww2.
    
  3) How much would you need to pay for 76 Tesla shares? Store it in a variable called tesla.

  4) How many seconds do we have in a day? Store it in a variable called secondsOfDay.

  5) What percentage of the world's population is hungarian? Store it in a variable called hungarians.
    
  6) How much bigger is China than the Czech Republic? Store it in a variable bigger.
    
  7) If only 7 people can fit into a ZOOM call channel and we have 305 participants, then how many people
  will be in the smallest ZOOM call? Store it in participants.
*/

/* YOUR CODE BELONGS HERE - ZDE PATŘÍ VÁŠ KÓD */

/*
  CONDITIONS - TASK:
  CZ: Použijte podmínku k implementaci jednoduchého vyhodnocení hry. Pokud má hráč 0 a méně životů,
  pak prohrál (vypište do konzole - "prohrál jsi"), jinak stále žije (vypište do konzole - "ještě žiješ").
  EN: Use a condition to implement a simple game evaluation. If a player has 0 or fewer lives, then he/she lost
  (write to the console - "you lost"), otherwise he/she is still alive (write to the console - "you are still alive").

 */

/* YOUR CODE BELONGS HERE - ZDE PATŘÍ VÁŠ KÓD */

/*
  LOOPS - TASK:
  CZ: Pomocí for-cyklu sečtěte čísla od 1 do 9999 a vypište výsledek do konzole.
  EN: Using a for-loop sum numbers from 0 to 9999 and print the result to console.
*/

/* YOUR CODE BELONGS HERE - ZDE PATŘÍ VÁŠ KÓD */

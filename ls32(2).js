function vowels(str) {
  let total = 0; // количество гласных

  for (const letter of str.toLowerCase()) {
    if (letter == 'а' || letter == 'у' || letter == 'о' || letter == 'и' || letter == 'э'
      || letter == 'ы' || letter == 'я' || letter == 'ю' || letter == 'е' || letter == 'ё') {
      total += 1;
    }
  }

  return total;
}

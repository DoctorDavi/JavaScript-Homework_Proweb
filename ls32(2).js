function vowels(str) {
  let total = 0; // количество гласных

  for (const letter of str.toLowerCase()) {
    switch (letter) {
      case 'а':
      case 'у':
      case 'о':
      case 'и':
      case 'э':
      case 'ы':
      case 'я':
      case 'ю':
      case 'е':
      case 'ё':
        total += 1;
        break;
    }
  }

  return total;
}

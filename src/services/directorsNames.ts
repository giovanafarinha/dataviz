export default function directorsNames(directorName: string) {
      // on transforme le nom du réalisateur en minuscules sans accents
      directorName = directorName.normalize("NFD");
      directorName = directorName.replace(/[\u0300-\u036f]/g, "");
      directorName = directorName.toLowerCase();
      // on met le premier caractère en majuscule de chaque mot
      const directorWords = directorName.split(" ");
      directorWords.map(function (word, index) {
      directorWords[index] = word.charAt(0).toUpperCase() + word.slice(1);
      });
      directorName = directorWords.join(" ");
      return directorName;
}
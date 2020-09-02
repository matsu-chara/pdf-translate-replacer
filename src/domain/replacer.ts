export const replace = (str: string): string => {
  return str
    .replace(/\n/g, " ") // remove newline
    .replace(/-\s/g, "") // remove "- " e.g. somelongwor-\nds to somelongwords
    .replace(/ • /g, "\n\n• ") // newline before bullets
    .replace(/([;:]) /g, "$1\n") // replace ; or :
    .replace(/(?<!Mr|Ms|Mrs|Mstr|Dr|Prt|e\.g|i\.e|et al)\. +/g, ".\n\n") // newline at end of sentences
    .replace(/\? */g, "?\n\n"); // newline at end of questions
};

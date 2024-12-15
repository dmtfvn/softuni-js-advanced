function solveCurTask(str1, str2, str3) {
  const tripleStringLegth = str1.length + str2.length + str3.length;
  const avgLength = Math.floor(tripleStringLegth / 3);

  console.log(tripleStringLegth);
  console.log(avgLength);
}

solveCurTask('chocolate', 'ice cream', 'cake');
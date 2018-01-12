export function getNow() {
  const now = new Date();
  return `${now.getFullYear()}-${format(now.getMonth() + 1)}-${format(
    now.getDate(),
  )}`;
}

function format(num) {
  if (10 > num) {
    return `0${num}`;
  } else {
    return num;
  }
}

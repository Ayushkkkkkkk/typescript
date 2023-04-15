function detectTypes(val: number | string) {
  if (typeof val == "string") {
    return val.toLowerCase();
  }
  return val + 3.14;
}


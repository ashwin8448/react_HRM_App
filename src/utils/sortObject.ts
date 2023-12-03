const sortObject = (
  a: { [key: string]: string | number },
  b: { [key: string]: string | number }
) => {
  const val1 = String(a.skill || a.department || a.role).toLowerCase();
  const val2 = String(b.skill || b.department || b.role).toLowerCase();
  return val1 > val2 ? 1 : val2 > val1 ? -1 : 0;
};

export default sortObject;

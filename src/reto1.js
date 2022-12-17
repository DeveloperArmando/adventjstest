export function wrapping(regalos) {
  return regalos.map((r) => {
    const envoltura = '*'.repeat(r.length + 2);
    return `${envoltura}\n*${r}*\n${envoltura}`;
  });
}

// export function wrapping(regalos) {
//     // regalos.pop();
//     regalos.push('Wuorales');
//     return [];
//   }
{ console.log('\n## arrow function');

  let recurse = (a) => {
    if (a > 3) {
      return {base: true, a};
    } else {
      const reclog = recurse( a + 1 );
      return {base: false, a, reclog};
    }
  };
  console.log('recurse: ', recurse);
  console.log(recurse(1));
 

  console.log('*cant reassign to new variables*')
  const other_var = recurse;
  recurse = undefined;
  console.log('recurse: ', recurse);
  console.log('other_var: ', other_var);
  try {
    console.log(recurse(1));
  } catch(err) {
    console.error(err);
  }
}
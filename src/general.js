const menus = [
  ["home", "learn"],
  ["texts", "videos", "music"],
  ["settings", "profile"],
];

const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

function components(
  collection,
  Component,
  { props = (element) => {}, content = (element) => <></> }
) {
  return Array.from(collection, (element) => (
    <Component {...props(element)} key={String(element)}>
      {content(element)}
    </Component>
  ));
}
async function get_imported(names, get_path) {
  const imported = {}
  for (const name of names) {
    imported[name] = ((await import(get_path(name))).default)
  }
  return imported
}

export { menus, capitalize, components, get_imported };

const menuGroups = [
  ["home", "learn"],
  ["texts", "videos", "music"],
  ["settings", "profile"],
];

const menus = menuGroups.flat();

const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

function components(collection, get_items) {
  const array = [];
  let i = 0;
  for (const element of collection) {
    const items = get_items(element);

    for (const [key, item] of Object.entries([<div></div>, {}, <></>])) {
      if (items.length === parseInt(key)) {
        items.push(item);
      }
    }

    const [Component, props, content] = items;

    const component = (
      <Component {...props} key={i}>
        {content}
      </Component>
    );

    array.push(component);
    i++;
  }
  return array;
}

async function get_imported(names, importByName) {
  const imported = {};
  for (const name of names) {
    imported[name] = (await importByName(name)).default;
  }
  return imported;
}

export { menus, menuGroups, capitalize, components, get_imported };

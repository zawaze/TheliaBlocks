import Button from "./blocks/Button";
import ImageBlock from "./blocks/Image";
import MultiColumnss from "./blocks/MultiColumns";
import Product from "./blocks/Product";
import Separator from "./blocks/Separator";
import Text from "./blocks/Text";
import Title from "./blocks/Title";
import Video from "./blocks/Video";
import { nanoid } from "nanoid";
// const modules = import.meta.globEager("./blocks/*.tsx");

export const __PLUGINS = [
  { id: nanoid(), ...Text },
  { id: nanoid(), ...ImageBlock },
  { id: nanoid(), ...MultiColumnss },
  { id: nanoid(), ...Product },
  { id: nanoid(), ...Title },
  { id: nanoid(), ...Video },
  { id: nanoid(), ...Separator },
  { id: nanoid(), ...Button },
];

export function registerPlugin(plugin: any) {
  __PLUGINS.push({ ...plugin, id: nanoid() } as any);
}

export function usePlugins() {
  return __PLUGINS;
}

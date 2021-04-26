import "./Menu.css";

import React, { useState } from "react";

import { usePlugins } from "../../pluginManager";
import BlockFromLibrary from "../BlockFromLibrary";

import { map } from "lodash-es";

function Menu() {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(true);
  const blocksLibrary = usePlugins();

  return (
    <div className={`Menu ${visibleMenu ? "Menu--visible" : ""}`}>
      <div className="Menu-content">
        <div className="Menu-header">
          <div className="Menu-title">Blocs</div>
          <button onClick={() => setVisibleMenu(!visibleMenu)}>
            toggle menu
          </button>
        </div>
        <div className="Menu-blocks overscroll-x-auto">
          {map(blocksLibrary, (block) => {
            return (
              <div key={block.id} className="Menu-blocks-item">
                <BlockFromLibrary block={block} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;

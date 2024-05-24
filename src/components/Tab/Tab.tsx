import React, {FC} from 'react';
import styles from './Tab.module.css'
import {ITabModel} from "../../models/ITabModel";


type ITypeTab = ITabModel & { index: number } & { tabs: ITabModel[] } & {
  setTabs: React.Dispatch<React.SetStateAction<ITabModel[]>>
};
export const Tab: FC<ITypeTab> = ({id, text, active, index, tabs, setTabs}) => {
  const tabSwitch = (id: number, active: boolean, index: number) => {
    const tabActive = tabs.map(item => {
      if (index === item.id) {
        return {
          ...item,
          active: true,
        }

      } else {
        return {
          ...item,
          active: false,
        }
      }

    })
    setTabs(tabActive);

  }



  return (
    <div className={active?`${styles.tabActive} ${styles.tab}`:`${styles.tabCompleted} ${styles.tab}`} onClick={() => {
      tabSwitch(id, active, index);
    }}>
      {text}
    </div>
  );
};

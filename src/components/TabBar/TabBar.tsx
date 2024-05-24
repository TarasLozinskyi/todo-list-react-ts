import React, {FC} from 'react';
import styles from './TabBar.module.css'
import {ITabModel} from "../../models/ITabModel";
import {Tab} from "../Tab/Tab";

interface IProps{
  tabs: ITabModel[];
}

type ITypeProps = IProps &{setTabs: React.Dispatch<React.SetStateAction<ITabModel[]>>}

export const TabBar:FC<ITypeProps> = ({tabs, setTabs}) => {




  return (
    <div className={styles.TabBar}>
      {tabs.map((item,index )=> (<Tab key={item.id} id={item.id} active={item.active} text={item.text} tabs={tabs} setTabs={setTabs} index={index} />))}
    </div>
  );
};


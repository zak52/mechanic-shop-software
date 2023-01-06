import React, { useState } from "react";
import "../App/App.css";
import { SidebarData } from "./SidebarData";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import styles from "./sidebar.module.css";
import "./sidebar.module.css"




function Sidebar() {
    const [open, setopen] = useState(true)
    const toggleOpen = () => {
        setopen(!open)
    }
    return (
        <div className={open?styles.Sidebar:styles.SidebarClosed}>
            <ul className={styles.SidebarList}>
                <button className={styles.menuBtn} onClick={toggleOpen}>
                    {open? <KeyboardDoubleArrowLeftIcon/> : <KeyboardDoubleArrowRightIcon/>}
                </button>
                {SidebarData.map(( val, key ) => {
                    return (
                        <li key={key}
                        className={styles.row}
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={() => {window.location.pathname = val.link}}> 
                            <div className={open?styles.icon:styles.iconClosed}>
                                {val.icon}
                            </div>
                            <div className={open?styles.title:styles.titleClosed}>
                                {val.title}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Sidebar

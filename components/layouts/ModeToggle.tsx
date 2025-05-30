'use client';
import {useTheme} from 'next-themes';
import {useState, useEffect} from 'react';
import {CiDark, CiLight} from "react-icons/ci";

export default function ModeToggle() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    if (!mounted) {
        return null;
    }

    return (
        <div className='flex justify-end w-max items-center gap-[.5rem]'>
            <div onClick={toggleTheme}
                 className={`hidden sm:block text-[1.8rem] cursor-pointer text-secondary dark:text-secondary my-[0.65rem]`}
            >
                Giao diện : {theme === "light" ? "Sáng" : "Tối"}
            </div>
            <div className={`w-max h-auto cursor-pointer select-none dark:hidden`} onClick={toggleTheme}>
                <CiLight className={`text-secondary font-medium w-[2.8rem] h-[2.8rem]`}
                         stroke="currentColor" strokeWidth={1}/>
            </div>
            <div className="w-max h-auto cursor-pointer select-none hidden dark:text-primary dark:block"
                 onClick={toggleTheme}>
                <CiDark className={`text-secondary font-medium w-[2.8rem] h-[2.8rem]`}
                        stroke="currentColor" strokeWidth={1}/>
            </div>
        </div>
    );
}

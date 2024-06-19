
export function Footer() {   
    const year = new Date().getFullYear();
    return (
        <footer data-testid="footer" className="w-full static bottom-0 flex-1 flex items-center flex-col text-center bg-gradient-to-t from-primary-yellow from-90% via-yellow-200 via-40% to-white-900 to-90% text-zinc-800 hover:opacity-80 z-40">
            <div className="py-4 px-4 via-yellow-400 flex flex-row justify-center justify-items-center m-auto">
                <span className="hover:scale-110 flex md:text-2xl sm:text-md">
                   Anderson Lima | {year}
                </span>
            </div>
        </footer>
    )
}
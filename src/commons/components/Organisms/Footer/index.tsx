
export function Footer() {   
    const year = new Date().getFullYear();
    return (
        <footer data-testid="footer" className="w-full fixed bottom-0 flex-1 flex items-center flex-col text-center bg-zinc-800 z-40">
            <div className="py-4 px-4 bg-grey-lighter flex flex-row justify-center justify-items-center m-auto ">
                <span className="hover:scale-110 flex md:text-2xl sm:text-md">
                   Anderson Lima | {year}
                </span>
            </div>
        </footer>
    )
}
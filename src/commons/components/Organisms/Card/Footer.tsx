import { FC } from 'react';

interface CardFooterProps {
    linkUrl: string,
    linkLabel: string
}

export const CardFooter: FC<CardFooterProps> = ({ linkUrl, linkLabel }: CardFooterProps) => {
    return (
        <div className="p-6 pt-0">
            <a
                className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-green-500"
                href={linkUrl}
                target="_blank"
            >
                <button
                    className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-green-500 transition-all hover:bg-green-500/10 active:bg-green-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-dark="true"
                >
                    {linkLabel}
                </button>
            </a>
        </div>
    );
}
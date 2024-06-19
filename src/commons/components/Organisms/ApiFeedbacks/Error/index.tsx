import { Button } from "../../../Atoms"

interface ErrorApiComponentProps {
    onRetry: Function
}
export const ErrorApiComponent = ({ onRetry }: ErrorApiComponentProps) => {
    return (
        <div className="rounded overflow-hidden h-full">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Desculpe</div>
                <p className="text-gray-700 text-base">
                    Ocorreu um erro!
                </p>
            </div>
            <div className="px-6 pt-8 pb-2">
                <Button className="button inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer"
                    onClick={() => onRetry()}
                    variant={"primary"}
                    size={"sm"}>
                    tente novamente
                </Button>
            </div>
        </div>
    )
}
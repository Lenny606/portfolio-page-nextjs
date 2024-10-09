import clsx from "clsx";

const ItemsLayout = ({children, className}) => {
    return (
        <div
            className={clsx('p-8 rounded-xl flex items-center justify-center space-y-8 bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-inset-sm', className)}>
            {children}
        </div>
    )
}

export default ItemsLayout;
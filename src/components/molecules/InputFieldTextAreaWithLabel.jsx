import { cn } from '@/lib/utils'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

const InputFieldTextAreaWithLabel = ({ label, id, className, ...props }) => {
    return (
        <div className={cn("grid w-full gap-1.5", className)}>
            <Label htmlFor={id}>{label}</Label>
            <Textarea
                id={id}
                {...props}
                className="disabled:text-slate-500 h-full disabled:opacity-100"
            />
        </div>
    )
}

export default InputFieldTextAreaWithLabel



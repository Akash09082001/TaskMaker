import React from 'react'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'

const InputFieldTextAreaWithLabel = ({ labelText, textareaId, textareaValue, textareaOnChange, textareaPlaceholder }) => {
    return (
        <div className="grid w-full max-w-3xl items-center gap-1.5">
            <Label htmlFor={textareaId}>{labelText}</Label>
            <Textarea
                value={textareaValue}
                onChange={textareaOnChange}
                placeholder={textareaPlaceholder}
                id={textareaId}
            />
        </div>
    )
}

export default InputFieldTextAreaWithLabel



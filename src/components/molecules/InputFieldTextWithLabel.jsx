import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const InputFieldTextWithLabel = ({ labelText, inputType, inputId, inputValue, inputOnChange, inputPlaceholder }) => {
    return (
        <div className="grid w-full max-w-3xl items-center gap-1.5">
            <Label htmlFor={inputId}>{labelText}</Label>
            <Input
                value={inputValue}
                onChange={inputOnChange}
                type={inputType}
                id={inputId}
                placeholder={inputPlaceholder}
            />
        </div>
    )
}

export default InputFieldTextWithLabel


